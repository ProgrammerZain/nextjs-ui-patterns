import React from "react";
import type { Metadata } from "next";
import { getTasks } from "@/lib/db";
import TaskList from "./TaskList";
import { CheckSquare, Zap, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Task Manager | SEO",
  description: "Optimistic UI task management with Next.js App Router and Server Actions",
};

export default async function TasksPage(): Promise<React.JSX.Element> {
  // Fetch tasks directly in Server Component
  const tasks = await getTasks();

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Page Title & Explanation */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center font-bold">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-50">
                Optimistic Task Manager
              </h1>
              <p className="text-xs text-slate-400">
                React <code className="text-cyan-400 font-mono">useOptimistic</code> + Next.js Server Actions + Framer Motion
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
            SEO Title: Task Manager | SEO
          </span>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 text-xs text-slate-300 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-cyan-400">
            <Zap className="w-4 h-4" />
            <span>How Optimistic UI Works Here:</span>
          </div>
          <p>
            1. When you type a task and click <strong>Add Task</strong>, <code className="text-amber-300 font-mono">useOptimistic</code> instantly appends the item to the UI list with a <em>Syncing (2s delay)...</em> badge.
            <br />
            2. In the background, a <strong>Server Action</strong> writes the task to <code className="text-slate-200 font-mono">data.json</code> using <code className="text-slate-200 font-mono">fs.promises</code> and awaits a 2-second artificial delay.
            <br />
            3. Upon completion, <code className="text-cyan-400 font-mono">revalidatePath(&quot;/tasks&quot;)</code> confirms the server data seamlessly!
          </p>
        </div>
      </div>

      {/* Render Client Component TaskList */}
      <TaskList tasks={tasks} />
    </div>
  );
}
