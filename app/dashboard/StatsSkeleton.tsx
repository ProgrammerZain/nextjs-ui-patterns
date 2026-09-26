import React from "react";
import { Loader2 } from "lucide-react";

export default function StatsSkeleton(): React.JSX.Element {
  return (
    <div className="p-6 rounded-2xl border border-cyan-800/40 bg-slate-900/30 space-y-6 animate-pulse">
      <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
        <div className="flex items-center gap-2 text-cyan-400/80 font-semibold text-sm">
          <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
          <span>Streaming Promise via Suspense Fallback...</span>
        </div>
        <div className="w-36 h-6 rounded-full bg-cyan-950/60 border border-cyan-800/40"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 space-y-3">
          <div className="w-20 h-3 rounded bg-slate-800"></div>
          <div className="w-32 h-8 rounded bg-slate-800"></div>
          <div className="w-24 h-3 rounded bg-slate-800"></div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 space-y-3">
          <div className="w-24 h-3 rounded bg-slate-800"></div>
          <div className="w-20 h-8 rounded bg-slate-800"></div>
          <div className="w-28 h-3 rounded bg-slate-800"></div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/60 space-y-3">
          <div className="w-24 h-3 rounded bg-slate-800"></div>
          <div className="w-28 h-6 rounded bg-slate-800"></div>
          <div className="w-32 h-3 rounded bg-slate-800"></div>
        </div>
      </div>
    </div>
  );
}
