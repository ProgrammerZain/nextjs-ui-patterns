import React from "react";
import Link from "next/link";

interface VisitorSegment {
  region: string;
  count: string;
  growth: string;
}

const mockVisitors: VisitorSegment[] = [
  { region: "North America", count: "124,500", growth: "+14.2%" },
  { region: "Europe", count: "89,100", growth: "+8.7%" },
  { region: "Asia Pacific", count: "65,400", growth: "+22.5%" },
];

export default function VisitorsPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950 text-purple-400 text-xs font-mono font-medium border border-purple-800/50">
            Route: /analytics/visitors
          </div>
          <span className="text-xs text-slate-500">Child Page 2</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Visitor Traffic</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            This is the Visitors page. Check the console — `Tracking page view for: /analytics/visitors` was triggered on template remount!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {mockVisitors.map((v) => (
            <div
              key={v.region}
              className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2"
            >
              <div className="text-xs text-slate-400 font-semibold">{v.region}</div>
              <div className="text-xl font-mono font-bold text-purple-400">{v.count}</div>
              <div className="text-[11px] text-emerald-400 font-medium">Growth: {v.growth}</div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href="/analytics/reports"
            className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            &larr; Switch back to Reports Page
          </Link>
        </div>
      </div>
    </div>
  );
}
