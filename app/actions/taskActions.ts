"use server";

import { addTask, toggleTask } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTaskAction(title: string): Promise<void> {
  if (!title || !title.trim()) return;

  // Await 2-second setTimeout to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Write new task to data.json
  await addTask(title);

  // Call revalidatePath to update server state
  revalidatePath("/tasks");
}

export async function toggleTaskAction(id: string): Promise<void> {
  await toggleTask(id);
  revalidatePath("/tasks");
}
