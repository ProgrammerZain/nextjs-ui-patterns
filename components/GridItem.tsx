"use client";

import { memo } from "react";

interface GridItemProps {
  id: number;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

function GridItemComponent({
  id,
  isHovered,
  onHover,
}: GridItemProps): React.JSX.Element {
  // Log every time this item component re-renders
  console.log("Rendered Item", id);

  return (
    <div
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      className={`p-4 rounded-xl border text-center font-mono text-xs font-semibold transition-all duration-200 select-none cursor-pointer ${
        isHovered
          ? "bg-cyan-500 border-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105 z-10 ring-2 ring-cyan-300/50"
          : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/80"
      }`}
    >
      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Item</div>
      <div className="text-base font-bold font-mono">#{id}</div>
      <div className="mt-2 text-[10px]">
        {isHovered ? (
          <span className="inline-block px-1.5 py-0.5 rounded bg-slate-950/80 text-cyan-300 font-medium">
            Active
          </span>
        ) : (
          <span className="text-slate-500">Idle</span>
        )}
      </div>
    </div>
  );
}

// React.memo prevents re-rendering if props (id, isHovered, onHover) have not changed
export const GridItem = memo(GridItemComponent);
