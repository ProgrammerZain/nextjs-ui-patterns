import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className="min-h-full flex flex-col bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Centered Public Marketing Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
              <Sparkles className="w-5 h-5 text-slate-950" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Acme Marketing
            </span>
          </div>

          <nav className="flex items-center gap-8 text-sm font-medium">
            <Link
              href="/"
              className="text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Public Home
            </Link>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Marketing Layout Scope</span>
            </div>
            <Link
              href="/dashboard/analytics"
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Enter Dashboard</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Marketing View Content */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col justify-center">
        {children}
      </main>

      <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
        Public Marketing Layout &bull; Route Group `(marketing)`
      </footer>
    </div>
  );
}
