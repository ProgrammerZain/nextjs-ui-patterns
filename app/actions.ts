"use server";

import { revalidateTag, revalidatePath } from "next/cache";

/**
 * 1. Tag-Based Revalidation: revalidateTag(tag, profile)
 * Purges the Data Cache for any fetch requests matching the specified tag across the entire application.
 * @param tag The cache tag string (e.g. 'posts', 'products')
 */
export async function revalidatePostsTag(tag: string = "posts"): Promise<{ success: boolean; revalidatedAt: string }> {
  revalidateTag(tag, "max");
  return {
    success: true,
    revalidatedAt: new Date().toISOString(),
  };
}

export const revalidatePosts = revalidatePostsTag;

/**
 * 2. Page Path-Based Revalidation: revalidatePath(path, 'page')
 * Purges cached data specifically for a single page URL route.
 * @param path The URL route path (e.g. '/revalidate/path-page')
 */
export async function revalidateSpecificPage(path: string): Promise<{ success: boolean; revalidatedAt: string }> {
  revalidatePath(path, "page");
  return {
    success: true,
    revalidatedAt: new Date().toISOString(),
  };
}

/**
 * 3. Layout Path-Based Revalidation: revalidatePath(path, 'layout')
 * Purges cached data for a layout AND ALL nested child routes underneath it.
 * @param path The layout route path (e.g. '/revalidate/path-layout')
 */
export async function revalidateLayoutHierarchy(path: string): Promise<{ success: boolean; revalidatedAt: string }> {
  revalidatePath(path, "layout");
  return {
    success: true,
    revalidatedAt: new Date().toISOString(),
  };
}
