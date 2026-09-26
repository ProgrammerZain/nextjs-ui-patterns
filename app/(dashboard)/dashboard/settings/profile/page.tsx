import React from "react";
import Link from "next/link";
import { User, Shield, Key, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function DashboardProfilePage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 text-xs font-mono font-medium border border-blue-800/50">
            Route: /dashboard/settings/profile
          </div>
          <span className="text-xs text-slate-500 font-mono">Dashboard Module 2</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <User className="w-6 h-6 text-blue-400" />
            <span>Profile Settings</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            This is the Profile Settings view nested deep under `/dashboard/settings/profile`. Notice how the breadcrumbs above automatically updated to <code className="text-cyan-400">Dashboard &gt; Settings &gt; Profile</code> with Framer Motion slide-in animation!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Account Identity</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="font-semibold text-slate-200">Alex Vance (Senior Engineer)</div>
            <div className="text-xs text-slate-400 font-mono">alex.vance@acme.dev</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Security Status</span>
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="font-semibold text-slate-200 flex items-center gap-2">
              <Key className="w-3.5 h-3.5 text-amber-400" />
              <span>Two-Factor Authentication Active</span>
            </div>
            <div className="text-xs text-slate-400">Hardware key hardware-sec-01</div>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/dashboard/analytics"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-semibold text-sm transition-colors border border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Analytics</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
