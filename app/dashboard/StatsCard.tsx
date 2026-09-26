"use client";

import React, { use } from "react";
import { DollarSign, TrendingUp, ShoppingBag, Sparkles } from "lucide-react";

export interface StatsData {
  revenue: number;
  orders?: number;
  growth?: string;
}

export default function StatsCard({
  promise,
}: {
  promise: Promise<StatsData>;
}): React.JSX.Element {
  // Unwrap the pending RSC promise on the client using React 19's use() API
  const stats = use(promise);

  return (
    <div className="p-6 rounded-2xl border border-cyan-800/80 bg-gradient-to-tr from-cyan-950/60 via-slate-900/80 to-slate-950/90 space-y-6 shadow-xl shadow-cyan-950/20 animate-in fade-in zoom-in-95 duration-300">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
          <Sparkles className="w-4 h-4" />
          <span>React 19 use(promise) Unwrapped Result</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50">
          Streamed &amp; Unwrapped (3s delay)
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Total Revenue</span>
            <DollarSign className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-mono font-extrabold text-slate-50">
            ${stats.revenue.toLocaleString()}
          </div>
          <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>{stats.growth || "+18.5%"} vs last month</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Completed Orders</span>
            <ShoppingBag className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-mono font-extrabold text-slate-50">
            {stats.orders ?? 142}
          </div>
          <div className="text-[11px] text-slate-400">
            Automated fulfillment active
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <span>Stream Method</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-base font-bold text-cyan-400 mt-1">
            React 19 `use()`
          </div>
          <div className="text-[11px] text-slate-400 leading-snug">
            Server promise unwrapped on client via Suspense
          </div>
        </div>
      </div>
    </div>
  );
}
