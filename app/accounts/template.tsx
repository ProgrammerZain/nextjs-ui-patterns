"use client";

import React, { useState, useEffect } from "react";

export type FilterType = "All" | "Credits" | "Debits";

export default function AccountsTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [filter, setFilter] = useState<FilterType>("All");

  useEffect(() => {
    console.log("Accounts Template Mounted (Filter Reset to 'All')");
  }, []);

  return (
    <div className="space-y-6">
      {/* Transaction Filter Dropdown Controls */}
      <div className="p-4 rounded-xl border border-indigo-800/80 bg-indigo-950/30 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <label
            htmlFor="filter-select"
            className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5"
          >
            <span>🔍</span>
            <span>Transaction Filter:</span>
          </label>

          <select
            id="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value as FilterType)}
            className="bg-slate-950 text-slate-100 text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 cursor-pointer"
          >
            <option value="All">All Transactions</option>
            <option value="Credits">Credits Only (+)</option>
            <option value="Debits">Debits Only (-)</option>
          </select>

          <span className="text-xs text-slate-400 font-mono bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
            Active Filter: <strong className="text-indigo-300">{filter}</strong>
          </span>
        </div>

        <div className="text-xs text-slate-400 font-mono">
          State resets to &quot;All&quot; automatically on account context switch
        </div>
      </div>

      {/* Pass filter context or render children below filter dropdown */}
      <div>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<{ filter?: FilterType }>, {
              filter,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
}
