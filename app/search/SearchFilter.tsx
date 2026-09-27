"use client";

import React, { useState, useDeferredValue, useMemo } from "react";
import { Search, Zap, Layers, Sparkles, Filter } from "lucide-react";

interface SearchFilterProps {
  items: string[];
}

export default function SearchFilter({ items }: SearchFilterProps): React.JSX.Element {
  const [query, setQuery] = useState<string>("");

  // Defer the search query state to prevent input typing lag when filtering 10,000 items
  const deferredQuery = useDeferredValue(query);

  // Check if deferred calculation is lag-deferred (stale) while user types rapidly
  const isStale = query !== deferredQuery;

  // Filter 10,000 items based on the DEFERRED query value, NOT immediate input state
  const filteredItems = useMemo(() => {
    console.log(
      "Calculating filtered items",  deferredQuery
    )
    if (!deferredQuery.trim()) return items;
    const lowerQuery = deferredQuery.toLowerCase();
    return items.filter((item) => item.toLowerCase().includes(lowerQuery));
  }, [items, deferredQuery]);

  return (
    <div className="space-y-6">
      {/* Search Input Box */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur space-y-4 shadow-xl shadow-cyan-950/10">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 10,000 items (e.g. 'React', 'Database', 'Item #9420')..."
            className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 text-sm pl-12 pr-4 py-3.5 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-200 bg-slate-900 px-2 py-1 rounded"
            >
              Clear
            </button>
          )}
        </div>

        {/* Realtime Performance & Stale Indicators */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-1 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-slate-200">
              Showing {filteredItems.length.toLocaleString()} of {items.length.toLocaleString()} items
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono">
            {isStale ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-700/60 text-[11px] font-semibold animate-pulse">
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Deferring heavy filter calculation...</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 text-[11px] font-semibold">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                <span>Responsive Typing Locked</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Filtered Results List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
          <span className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span>Search Results List</span>
          </span>
          <span>{filteredItems.length > 100 ? "Displaying top 100 results" : `Displaying ${filteredItems.length} results`}</span>
        </div>

        <div
          className={`space-y-2 max-h-[480px] overflow-y-auto pr-2 rounded-xl transition-opacity duration-200 ${
            isStale ? "opacity-60" : "opacity-100"
          }`}
        >
          {filteredItems.slice(0, 100).map((item, index) => (
            <div
              key={index}
              className="p-3.5 rounded-lg bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs text-slate-200 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-md bg-slate-950 border border-slate-800 flex items-center justify-center font-mono text-[10px] text-slate-400 font-bold shrink-0">
                  #{index + 1}
                </span>
                <span className="font-medium text-slate-200">{item}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">Verified Match</span>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="p-8 text-center text-slate-500 border border-dashed border-slate-800 rounded-xl text-xs">
              No items match &quot;{deferredQuery}&quot; out of 10,000 records.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
