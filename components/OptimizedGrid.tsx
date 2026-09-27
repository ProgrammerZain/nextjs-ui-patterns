"use client";

import { useState, useCallback } from "react";
import { GridItem } from "./GridItem";

export function OptimizedGrid(): React.JSX.Element {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [useOptimization, setUseOptimization] = useState<boolean>(true);
  const [unrelatedCount, setUnrelatedCount] = useState<number>(0);

  // Generate 50 items array
  const items = Array.from({ length: 50 }, (_, i) => i + 1);

  // Optimized hover handler using useCallback (stable function reference)
  const handleHoverCallback = useCallback((id: number | null) => {
    setHoveredId(id);
  }, []);

  // Unoptimized hover handler (new inline reference created on every render)
  const handleHoverUnoptimized = (id: number | null) => {
    setHoveredId(id);
  };

  const currentHandler = useOptimization
    ? handleHoverCallback
    : handleHoverUnoptimized;

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Control panel and state overview */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              Performance Control Panel
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Open your browser developer console (<code className="text-cyan-400 font-mono">F12</code>) to watch <code className="text-cyan-400 font-mono">&quot;Rendered Item&quot;</code> log output.
            </p>
          </div>

          {/* Toggle between useCallback optimization and unoptimized */}
          <div className="flex items-center gap-3 bg-slate-950 p-2 rounded-xl border border-slate-800">
            <span className="text-xs font-medium text-slate-300">
              Optimization Mode:
            </span>
            <button
              onClick={() => setUseOptimization(!useOptimization)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                useOptimization
                  ? "bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20"
                  : "bg-rose-500 text-slate-950 shadow-md shadow-rose-500/20"
              }`}
            >
              {useOptimization ? "useCallback ENABLED" : "DISABLED (Re-renders all)"}
            </button>
          </div>
        </div>

        {/* State Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">Hovered Item</div>
            <div className="text-lg font-mono font-bold text-cyan-400 mt-1">
              {hoveredId !== null ? `#${hoveredId}` : "None"}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400 uppercase font-semibold">Optimization Technique</div>
            <div className="text-xs font-mono text-emerald-400 mt-1">
              React.memo + useCallback
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
            <div>
              <div className="text-xs text-slate-400 uppercase font-semibold">Parent State Trigger</div>
              <div className="text-xs text-slate-300 mt-0.5">Count: {unrelatedCount}</div>
            </div>
            <button
              onClick={() => setUnrelatedCount((c) => c + 1)}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-md transition-colors"
            >
              Re-render Parent
            </button>
          </div>
        </div>
      </div>

      {/* 50 Grid Items */}
      <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-10 gap-3">
        {items.map((id) => (
          <GridItem
            key={id}
            id={id}
            isHovered={hoveredId === id}
            onHover={currentHandler}
          />
        ))}
      </div>
    </div>
  );
}
