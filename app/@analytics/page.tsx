import React from "react";
import { BarChart3, TrendingUp, Users } from "lucide-react";

export default async function AnalyticsSlot(): Promise<React.JSX.Element> {
  // Simulate a slow 3-second network fetch
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className="p-6 rounded-xl border border-blue-800/80 bg-slate-900/40 space-y-4 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-base">
            <BarChart3 className="w-5 h-5" />
            <span>Analytics Slot (@analytics)</span>
          </div>
          <span className="text-[10px] font-mono bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
            Loaded (3s delay)
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[11px] text-slate-400">Total Views</div>
            <div className="text-xl font-mono font-bold text-slate-100 mt-1">
              48,210
            </div>
            <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-0.5 mt-1">
              <TrendingUp className="w-3 h-3" /> +12.4%
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800">
            <div className="text-[11px] text-slate-400">Active Users</div>
            <div className="text-xl font-mono font-bold text-blue-400 mt-1">
              1,420
            </div>
            <div className="text-[10px] text-slate-400 flex items-center gap-0.5 mt-1">
              <Users className="w-3 h-3" /> Live stream
            </div>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
          ⚡ Analytics data finished streaming in after 3 seconds without blocking the User Feed or Notifications!
        </div>
      </div>
    </div>
  );
}
