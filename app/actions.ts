"use server";

import fs from "fs/promises";
import path from "path";

export interface Item {
  id: number;
  title: string;
  category: string;
  description: string;
  date: string;
}

export interface FetchItemsResponse {
  items: Item[];
  hasMore: boolean;
  nextPage: number;
  totalPages: number;
  totalItems: number;
}

/**
 * Server Action that reads items page-by-page from data.json
 * @param page The target page number (1-indexed)
 * @param limit Items per page (default: 10)
 */
export async function fetchItemsPage(
  page: number,
  limit: number = 10
): Promise<FetchItemsResponse> {
  const filePath = path.join(process.cwd(), "data.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const allItems: Item[] = JSON.parse(fileContent);

  const totalItems = allItems.length;
  const totalPages = Math.ceil(totalItems / limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const slicedItems = allItems.slice(startIndex, endIndex);

  // Artificial small delay to demonstrate loading state in UI
  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    items: slicedItems,
    hasMore: page < totalPages,
    nextPage: page + 1,
    totalPages,
    totalItems,
  };
}
