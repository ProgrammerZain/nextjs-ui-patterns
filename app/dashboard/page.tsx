import React, { Suspense } from "react";
import type { Metadata } from "next";
import StatsCard, { StatsData } from "./StatsCard";
import StatsSkeleton from "./StatsSkeleton";
import { LayoutDashboard, Zap, Sparkles } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const currentDate = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return {
    title: `Dashboard - ${currentDate}`,
    description: "Demonstrating React 19 use() hook with un-awaited streaming promises and Suspense",
  };
}

export default function DashboardPage(): React.JSX.Element {
  // 1. Initialize a slow promise on the server (3-second delay)
  // CRITICAL: Do NOT await it here on the server!
  const statsPromise: Promise<StatsData> = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        revenue: 5000,
        orders: 142,
        growth: "+18.5%",
      });
    }, 3000);
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Dashboard Page Header */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center font-bold">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-50">
                Executive Dashboard
              </h1>
              <p className="text-xs text-slate-400">
                React 19 <code className="text-cyan-400 font-mono">use(promise)</code> Data Streaming Pattern
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
            Dynamic Metadata Active
          </span>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 text-xs text-slate-300 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-cyan-400">
            <Zap className="w-4 h-4" />
            <span>How React 19 `use(promise)` Streaming Works:</span>
          </div>
          <p>
            1. The Server Component creates <code className="text-amber-300 font-mono">statsPromise</code> with a 3-second delay, but does <strong>NOT</strong> await it.
            <br />
            2. The page renders instantly and streams the un-awaited promise to the client inside <code className="text-slate-200 font-mono">&lt;Suspense fallback=&quot;...&quot;&gt;</code>.
            <br />
            3. The Client Component uses <code className="text-cyan-400 font-mono">use(promise)</code> to unwrap the value once resolved!
          </p>
        </div>
      </div>

      {/* Suspense Boundary wrapping Client Component that consumes un-awaited promise */}
      <Suspense fallback={<StatsSkeleton />}>
        <StatsCard promise={statsPromise} />
      </Suspense>
    </div>
  );
}
