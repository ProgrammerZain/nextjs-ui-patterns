"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { fetchItemsPage, Item } from "@/app/actions";

interface InfiniteScrollListProps {
  initialItems: Item[];
  initialHasMore: boolean;
}

export function InfiniteScrollList({
  initialItems,
  initialHasMore,
}: InfiniteScrollListProps): React.JSX.Element {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [hasMore, setHasMore] = useState<boolean>(initialHasMore);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. useRef attached to bottom element for IntersectionObserver
  const observerTarget = useRef<HTMLDivElement>(null);

  // 2. useRef tracking the page number being fetched
  const pageRef = useRef<number>(1);

  // Guard ref preventing concurrent duplicate fetches during fast scrolling
  const isFetchingRef = useRef<boolean>(false);

  // Function to load the next page via Server Action
  const loadNextPage = useCallback(async () => {
    if (isFetchingRef.current || !hasMore) return;

    isFetchingRef.current = true;
    setIsLoading(true);

    const nextPage = pageRef.current + 1;

    try {
      // Trigger Server Action to fetch next 10 items from data.json
      const data = await fetchItemsPage(nextPage, 10);

      pageRef.current = nextPage;
      setItems((prevItems) => [...prevItems, ...data.items]);
      setHasMore(data.hasMore);
    } catch (error) {
      console.error("Failed to load next page:", error);
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  }, [hasMore]);

  // 3. useEffect attaching IntersectionObserver to observerTarget ref
  useEffect(() => {
    const targetElement = observerTarget.current;
    if (!targetElement || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isFetchingRef.current) {
          loadNextPage();
        }
      },
      {
        root: null, // Viewport
        rootMargin: "100px", // Trigger slightly before scrolling reaches the absolute bottom
        threshold: 0.1,
      }
    );

    observer.observe(targetElement);

    return () => {
      observer.disconnect();
    };
  }, [hasMore, loadNextPage]);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Real-time status header badge */}
      <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="text-slate-400">Total Loaded Items:</span>
          <span className="text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
            {items.length} items
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-400">Current pageRef.current:</span>
          <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
            Page {pageRef.current}
          </span>
        </div>
      </div>

      {/* Rendered Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3 group"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-medium">
                #{item.id}
              </span>
              <span className="text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                {item.category}
              </span>
            </div>
            <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              {item.description}
            </p>
            <div className="pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-500 flex justify-between">
              <span>Date: {item.date}</span>
              <span>Loaded on Page {Math.ceil((index + 1) / 10)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Target Ref DIV at the bottom for IntersectionObserver */}
      <div
        ref={observerTarget}
        className="p-8 rounded-2xl border border-dashed border-slate-800 bg-slate-950/80 text-center flex flex-col items-center justify-center gap-3 my-8 transition-colors"
      >
        {isLoading ? (
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs">
            <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span>Triggering Server Action: Fetching Page {pageRef.current + 1}...</span>
          </div>
        ) : hasMore ? (
          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Loading more... (Scroll down to trigger IntersectionObserver)</span>
          </div>
        ) : (
          <div className="text-xs font-mono text-slate-500">
            ✅ All 50 items loaded from data.json (End of list)
          </div>
        )}
      </div>
    </div>
  );
}
