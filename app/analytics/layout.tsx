import React from "react";
import Link from "next/link";

export default function AnalyticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className="space-y-6">
      {/* Layout Header & Navigation */}
      <div className="p-4 rounded-xl border border-purple-800/60 bg-gradient-to-r from-purple-950/60 via-slate-900/80 to-slate-950/90 backdrop-blur flex items-center justify-between shadow-lg shadow-purple-950/20">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📊</span>
          <div>
            <h1 className="text-lg font-bold text-slate-100 tracking-tight">
              Analytics Hub
            </h1>
            <p className="text-xs text-purple-400 font-medium">
              Next.js Template Remount Boundary Demonstration
            </p>
          </div>
        </div>

        <div className="text-right text-xs text-slate-400 max-w-sm hidden md:block leading-relaxed">
          <span className="text-purple-400 font-semibold">Shared Layout:</span>{" "}
          Navigating between routes keeps this layout intact while `template.tsx` remounts on every route change!
        </div>
      </div>

      {/* Shared Navigation Links */}
      <nav className="border-b border-slate-800 flex items-center gap-6">
        <Link
          href="/analytics/reports"
          className="pb-3 text-sm font-semibold border-b-2 border-transparent hover:border-purple-400 hover:text-purple-400 text-slate-300 hover:text-slate-100 transition-colors flex items-center gap-2"
        >
          <span>📈</span>
          <span>Reports Page</span>
        </Link>
        <Link
          href="/analytics/visitors"
          className="pb-3 text-sm font-semibold border-b-2 border-transparent hover:border-purple-400 hover:text-purple-400 text-slate-300 hover:text-slate-100 transition-colors flex items-center gap-2"
        >
          <span>👥</span>
          <span>Visitors Page</span>
        </Link>
      </nav>

      {/* Render Template & Pages */}
      <div>{children}</div>
    </div>
  );
}
