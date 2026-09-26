import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutDashboard, Layers, Zap } from "lucide-react";

export default function MarketingPage(): React.JSX.Element {
  return (
    <div className="space-y-12 text-center max-w-3xl mx-auto">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-semibold border border-cyan-800/60">
          <Zap className="w-3.5 h-3.5" />
          <span>Route Group: (marketing) &bull; Path: /</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-50 leading-tight">
          Next.js Route Groups &amp; Template Animations
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          You are currently viewing the <strong className="text-slate-200">Public Marketing Layout</strong>. Notice the centered navbar above. Click below to enter the <strong className="text-cyan-400">Dashboard Root Group</strong>, which swaps the root layout to a sidebar layout and triggers Framer Motion animated breadcrumbs!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/dashboard/analytics"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-cyan-500/25"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Launch Dashboard App</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 text-left border-t border-slate-800/80">
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>01. Route Isolation</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            `(marketing)` and `(dashboard)` route groups isolate layout structures without affecting clean URL paths.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <Zap className="w-4 h-4" />
            <span>02. Animated Breadcrumbs</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            `template.tsx` inside `(dashboard)` triggers Framer Motion entry animations on every sub-route change.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/40 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            <span>03. Remounting Proof</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Navigating between Analytics and Profile inside the dashboard proves `template.tsx` remounts on navigation.
          </p>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}
