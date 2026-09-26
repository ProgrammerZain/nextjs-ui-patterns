import React from "react";
import Link from "next/link";

export default function TransferPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-medium border border-cyan-800/50">
            Route: /dashboard/transfer
          </div>
          <span className="text-xs text-slate-500">Child Page 1</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Transfer Money</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            This is the Transfer child route. Notice how the 60-second countdown timer in the layout above remains uninterrupted as you navigate to Statement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-500">From Account</div>
            <div className="font-semibold text-slate-200">Checking Account (*4821)</div>
            <div className="text-sm font-mono text-emerald-400">$12,450.00 USD</div>
          </div>
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-500">To Account</div>
            <div className="font-semibold text-slate-200">Savings Vault (*9104)</div>
            <div className="text-sm font-mono text-cyan-400">$45,210.00 USD</div>
          </div>
        </div>

        <div className="pt-2 flex items-center gap-4">
          <Link
            href="/dashboard/statement"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors"
          >
            Switch to Account Statement &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
