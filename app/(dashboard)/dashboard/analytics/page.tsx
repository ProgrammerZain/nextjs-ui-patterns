import React from "react";
import Link from "next/link";
import { BarChart3, TrendingUp, Users, Activity, ArrowRight } from "lucide-react";

export default function DashboardAnalyticsPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-medium border border-cyan-800/50">
            Route: /dashboard/analytics
          </div>
          <span className="text-xs text-slate-500 font-mono">Dashboard Module 1</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-cyan-400" />
            <span>Executive Analytics</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            This is the Dashboard Analytics view. Click the link below to navigate to <strong>Settings &gt; Profile</strong> &mdash; watch the breadcrumb bar above slide and fade in via Framer Motion, proving `template.tsx` remounts!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Total Visitors</span>
              <Users className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-slate-100">128,450</div>
            <div className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>+18.4% this month</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>System Throughput</span>
              <Activity className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-slate-100">99.98%</div>
            <div className="text-[11px] text-slate-400">Zero downtime detected</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Active Sessions</span>
              <BarChart3 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-mono font-bold text-emerald-400">4,120</div>
            <div className="text-[11px] text-slate-400">Realtime websocket active</div>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/dashboard/settings/profile"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors shadow-md shadow-cyan-500/20"
          >
            <span>Navigate to Profile Settings</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
