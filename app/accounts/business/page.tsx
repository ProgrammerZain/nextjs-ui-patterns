"use client";

import React from "react";
import Link from "next/link";
import { FilterType } from "../template";

interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: string;
  type: "Credits" | "Debits";
}

const businessTransactions: Transaction[] = [
  { id: "tx-b1", date: "Sep 26, 2026", description: "Enterprise SaaS Invoice #1042", category: "Client Payment", amount: "+$18,500.00", type: "Credits" },
  { id: "tx-b2", date: "Sep 25, 2026", description: "AWS Cloud Infrastructure", category: "Hosting", amount: "-$1,240.50", type: "Debits" },
  { id: "tx-b3", date: "Sep 23, 2026", description: "Office Equipment Order", category: "Supplies", amount: "-$650.00", type: "Debits" },
  { id: "tx-b4", date: "Sep 20, 2026", description: "Stripe Payout Settlement", category: "Revenue", amount: "+$7,420.00", type: "Credits" },
];

export default function BusinessAccountPage({
  filter = "All",
}: {
  filter?: FilterType;
}): React.JSX.Element {
  const filteredList = businessTransactions.filter((tx) => {
    if (filter === "Credits") return tx.type === "Credits";
    if (filter === "Debits") return tx.type === "Debits";
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-400 text-xs font-mono font-medium border border-indigo-800/50">
            Account Route: /accounts/business
          </div>
          <span className="text-xs text-slate-500">Business Checking</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Business Account Ledger</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Notice that the Transaction Filter dropdown above reset back to &quot;All&quot; when switching to this Business account!
          </p>
        </div>

        {/* Transactions Table */}
        <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-950">
          <div className="p-3 bg-slate-900/60 border-b border-slate-800 text-xs font-semibold text-slate-400 grid grid-cols-4">
            <span>Date</span>
            <span>Description</span>
            <span>Category</span>
            <span className="text-right">Amount</span>
          </div>
          <div className="divide-y divide-slate-800/60">
            {filteredList.length > 0 ? (
              filteredList.map((tx) => (
                <div key={tx.id} className="p-3 text-xs grid grid-cols-4 items-center">
                  <span className="text-slate-400">{tx.date}</span>
                  <span className="font-medium text-slate-200">{tx.description}</span>
                  <span className="text-slate-500">{tx.category}</span>
                  <span
                    className={`text-right font-mono font-semibold ${
                      tx.type === "Credits" ? "text-emerald-400" : "text-slate-300"
                    }`}
                  >
                    {tx.amount}
                  </span>
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-slate-500">
                No transactions match the selected filter ({filter}).
              </div>
            )}
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/accounts/personal"
            className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            &larr; Switch to Personal Account
          </Link>
        </div>
      </div>
    </div>
  );
}
