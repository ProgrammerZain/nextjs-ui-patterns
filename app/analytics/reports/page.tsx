import React from "react";
import Link from "next/link";

interface ReportItem {
  id: string;
  name: string;
  views: string;
  bounceRate: string;
}

const mockReports: ReportItem[] = [
  { id: "rep-1", name: "Q3 Performance Overview", views: "14,250", bounceRate: "32.4%" },
  { id: "rep-2", name: "User Conversion Funnel", views: "8,920", bounceRate: "28.1%" },
  { id: "rep-3", name: "API Endpoint Latency", views: "45,100", bounceRate: "12.0%" },
];

export default function ReportsPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-950 text-purple-400 text-xs font-mono font-medium border border-purple-800/50">
            Route: /analytics/reports
          </div>
          <span className="text-xs text-slate-500">Child Page 1</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Analytics Reports</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            This is the Reports page. Switch to Visitors page — notice how the template above unmounts and remounts, updating the timestamp and firing the tracking log!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {mockReports.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2"
            >
              <div className="text-xs text-slate-400 font-semibold">{item.name}</div>
              <div className="text-xl font-mono font-bold text-purple-400">{item.views} views</div>
              <div className="text-[11px] text-slate-500">Bounce rate: {item.bounceRate}</div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href="/analytics/visitors"
            className="inline-flex items-center gap-2 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
          >
            Switch to Visitor Traffic &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
