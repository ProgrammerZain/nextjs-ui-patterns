import fs from "fs/promises";
import path from "path";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  sending?: boolean;
}

const DATA_FILE = path.join(process.cwd(), "data.json");

export async function getTasks(): Promise<Task[]> {
  try {
    const fileContent = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(fileContent) as Task[];
  } catch (error) {
    // If file doesn't exist, initialize default empty list
    const initialTasks: Task[] = [
      { id: "1", title: "Review Next.js App Router docs", completed: true },
      { id: "2", title: "Implement useOptimistic hook", completed: false },
    ];
    await fs.writeFile(DATA_FILE, JSON.stringify(initialTasks, null, 2), "utf-8");
    return initialTasks;
  }
}

export async function addTask(title: string): Promise<Task> {
  const tasks = await getTasks();
  const newTask: Task = {
    id: Date.now().toString(),
    title: title.trim(),
    completed: false,
  };
  tasks.unshift(newTask);
  await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2), "utf-8");
  return newTask;
}

export async function toggleTask(id: string): Promise<Task | null> {
  const tasks = await getTasks();
  const index = tasks.findIndex((t) => t.id === id);
  if (index === -1) return null;

  tasks[index].completed = !tasks[index].completed;
  await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2), "utf-8");
  return tasks[index];
}
