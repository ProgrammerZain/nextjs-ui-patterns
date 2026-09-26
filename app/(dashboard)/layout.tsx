import React from "react";
import Link from "next/link";
import { LayoutDashboard, BarChart3, User, Home, Shield } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className="h-screen flex bg-slate-950 text-slate-100 overflow-hidden">
      {/* Dashboard Left Sidebar Layout */}
      <aside className="w-64 border-r border-slate-800/80 bg-slate-950 p-6 flex flex-col justify-between shrink-0">
        <div className="space-y-8">
          {/* Dashboard Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
              <LayoutDashboard className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="font-bold text-slate-100 tracking-tight text-base leading-none">
                App Dashboard
              </div>
              <span className="text-[10px] text-cyan-400 font-mono">
                Route Group `(dashboard)`
              </span>
            </div>
          </div>

          {/* Sidebar Menu Links */}
          <div className="space-y-1">
            <div className="px-3 text-[10px] uppercase font-bold text-slate-500 tracking-wider mb-2">
              Main Menu
            </div>
            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-slate-50 hover:bg-slate-900 transition-colors"
            >
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span>Analytics</span>
            </Link>
            <Link
              href="/dashboard/settings/profile"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-slate-50 hover:bg-slate-900 transition-colors"
            >
              <User className="w-4 h-4 text-blue-400" />
              <span>Profile Settings</span>
            </Link>
          </div>
        </div>

        {/* Bottom Sidebar Action */}
        <div className="pt-6 border-t border-slate-900 space-y-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
            <Shield className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="text-[11px] leading-snug">
              Dashboard Sidebar Layout Scope
            </span>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors w-full"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Marketing Root</span>
          </Link>
        </div>
      </aside>

      {/* Main Workspace Area (Hosts Template + Pages) */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <div className="p-8 max-w-5xl w-full mx-auto space-y-6">
          {children}
        </div>
      </main>
    </div>
  );
}
