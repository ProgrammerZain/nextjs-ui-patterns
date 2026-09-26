import React from "react";
import Link from "next/link";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  type: "credit" | "debit";
}

const mockTransactions: Transaction[] = [
  { id: "tx-1", date: "Sep 26, 2026", description: "Direct Deposit - Payroll", amount: "+$3,500.00", type: "credit" },
  { id: "tx-2", date: "Sep 25, 2026", description: "Cloud Infrastructure", amount: "-$42.50", type: "debit" },
  { id: "tx-3", date: "Sep 24, 2026", description: "Developer Tools License", amount: "-$19.00", type: "debit" },
];

export default function StatementPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-950 text-blue-400 text-xs font-mono font-medium border border-blue-800/50">
            Route: /dashboard/statement
          </div>
          <span className="text-xs text-slate-500">Child Page 2</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Account Statement</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            This is the Statement child route. The layout timer above did not reset or pause when navigating here.
          </p>
        </div>

        <div className="mt-4 border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
          <div className="p-3 bg-slate-900/60 border-b border-slate-800 text-xs font-semibold text-slate-400 grid grid-cols-3">
            <span>Date</span>
            <span>Description</span>
            <span className="text-right">Amount</span>
          </div>
          <div className="divide-y divide-slate-800/60">
            {mockTransactions.map((tx) => (
              <div key={tx.id} className="p-3 text-xs grid grid-cols-3 items-center">
                <span className="text-slate-400">{tx.date}</span>
                <span className="font-medium text-slate-200">{tx.description}</span>
                <span className={`text-right font-mono font-semibold ${tx.type === "credit" ? "text-emerald-400" : "text-slate-300"}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-center gap-4">
          <Link
            href="/dashboard/transfer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold text-sm transition-colors"
          >
            &larr; Switch to Transfer
          </Link>
        </div>
      </div>
    </div>
  );
}
