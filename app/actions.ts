"use server";

import { revalidateTag } from "next/cache";

export async function revalidatePosts(): Promise<{ success: boolean; revalidatedAt: string }> {
  // Purge the Data Cache for any fetch requests tagged with 'posts'
  revalidateTag("posts", "max");
  return {
    success: true,
    revalidatedAt: new Date().toISOString(),
  };
}
