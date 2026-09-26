import React from "react";
import { BarChart3 } from "lucide-react";

export default function AnalyticsLoading(): React.JSX.Element {
  return (
    <div className="p-6 rounded-xl border border-blue-800/40 bg-slate-900/30 space-y-4 h-full animate-pulse">
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-3">
        <div className="flex items-center gap-2 text-blue-400/70 font-semibold text-sm">
          <BarChart3 className="w-5 h-5" />
          <span>Loading Chart Data...</span>
        </div>
        <div className="w-24 h-5 rounded bg-blue-950/60 border border-blue-800/40"></div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800/60 space-y-2">
          <div className="w-16 h-3 rounded bg-slate-800"></div>
          <div className="w-24 h-6 rounded bg-slate-800"></div>
        </div>
        <div className="p-4 rounded-lg bg-slate-950/80 border border-slate-800/60 space-y-2">
          <div className="w-16 h-3 rounded bg-slate-800"></div>
          <div className="w-24 h-6 rounded bg-slate-800"></div>
        </div>
      </div>

      <div className="h-12 rounded-lg bg-slate-950/60 border border-slate-800/40"></div>
    </div>
  );
}
