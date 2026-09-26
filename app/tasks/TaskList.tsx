"use client";

import React, { useState, useOptimistic, useTransition, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "@/lib/db";
import { addTaskAction, toggleTaskAction } from "../actions/taskActions";
import { Plus, CheckCircle2, Circle, Loader2, Sparkles, Clock } from "lucide-react";

interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps): React.JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const inputRef = useRef<HTMLInputElement>(null);

  // useOptimistic hook to instantly add a task before the 2-second server action resolves
  const [optimisticTasks, addOptimisticTask] = useOptimistic(
    tasks,
    (state: Task[], newTask: Task) => [newTask, ...state]
  );

  const handleCreateTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const taskTitle = title.trim();
    if (!taskTitle) return;

    // 1. Immediately clear input field
    setTitle("");

    // 2. Instantly add optimistic task to UI state
    const optimisticTask: Task = {
      id: `opt-${Date.now()}`,
      title: taskTitle,
      completed: false,
      sending: true,
    };
    addOptimisticTask(optimisticTask);

    // 3. Dispatch Server Action in startTransition
    startTransition(async () => {
      await addTaskAction(taskTitle);
    });
  };

  const handleToggleTask = (id: string) => {
    startTransition(async () => {
      await toggleTaskAction(id);
    });
  };

  const completedCount = optimisticTasks.filter((t) => t.completed).length;

  return (
    <div className="space-y-6">
      {/* Add Task Input Form */}
      <form
        onSubmit={handleCreateTask}
        className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur flex items-center gap-3 shadow-lg shadow-cyan-950/10"
      >
        <input
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task (e.g. 'Build Server Actions with 2s latency')..."
          className="flex-1 bg-slate-950 text-slate-100 placeholder-slate-500 text-sm px-4 py-2.5 rounded-lg border border-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-sans"
        />

        <button
          type="submit"
          disabled={!title.trim()}
          className="px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-slate-950 font-bold text-sm flex items-center gap-2 transition-colors cursor-pointer shrink-0"
        >
          {isPending ? (
            <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
          <span>Add Task</span>
        </button>
      </form>

      {/* Optimistic Status Legend */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-200">
            {completedCount} of {optimisticTasks.length} completed
          </span>
        </div>
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Optimistic UI &bull; Instant Feedback (2s Server Delay)</span>
        </div>
      </div>

      {/* Animated Task List using Framer Motion */}
      <div className="space-y-3">
        <AnimatePresence initial={false}>
          {optimisticTasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: -20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`p-4 rounded-xl border flex items-center justify-between gap-4 transition-all ${
                task.sending
                  ? "border-amber-500/60 bg-amber-950/20 shadow-md shadow-amber-950/20"
                  : task.completed
                  ? "border-slate-800/60 bg-slate-900/20 opacity-75"
                  : "border-slate-800 bg-slate-900/50 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <button
                  type="button"
                  onClick={() => handleToggleTask(task.id)}
                  disabled={task.sending}
                  className="text-slate-400 hover:text-cyan-400 transition-colors shrink-0 disabled:cursor-not-allowed"
                >
                  {task.completed ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Circle className="w-5 h-5" />
                  )}
                </button>

                <span
                  className={`text-sm font-medium leading-normal truncate ${
                    task.completed
                      ? "line-through text-slate-500"
                      : "text-slate-200"
                  }`}
                >
                  {task.title}
                </span>
              </div>

              {/* Optimistic Pending Badge vs Confirmed Status */}
              <div className="shrink-0 flex items-center gap-2">
                {task.sending ? (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-700/60 text-[11px] font-mono font-semibold animate-pulse">
                    <Clock className="w-3 h-3" />
                    <span>Syncing (2s delay)...</span>
                  </span>
                ) : (
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                    ID: #{task.id.slice(-4)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {optimisticTasks.length === 0 && (
          <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl text-xs">
            No tasks found. Add a task above to see Optimistic UI in action!
          </div>
        )}
      </div>
    </div>
  );
}
