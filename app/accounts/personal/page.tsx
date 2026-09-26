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

const personalTransactions: Transaction[] = [
  { id: "tx-p1", date: "Sep 26, 2026", description: "Direct Deposit - Salary", category: "Income", amount: "+$4,850.00", type: "Credits" },
  { id: "tx-p2", date: "Sep 25, 2026", description: "Whole Foods Market", category: "Groceries", amount: "-$142.80", type: "Debits" },
  { id: "tx-p3", date: "Sep 24, 2026", description: "Netflix Subscription", category: "Entertainment", amount: "-$19.99", type: "Debits" },
  { id: "tx-p4", date: "Sep 22, 2026", description: "Freelance Cashback Bonus", category: "Bonus", amount: "+$120.00", type: "Credits" },
];

export default function PersonalAccountPage({
  filter = "All",
}: {
  filter?: FilterType;
}): React.JSX.Element {
  const filteredList = personalTransactions.filter((tx) => {
    if (filter === "Credits") return tx.type === "Credits";
    if (filter === "Debits") return tx.type === "Debits";
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-indigo-950 text-indigo-400 text-xs font-mono font-medium border border-indigo-800/50">
            Account Route: /accounts/personal
          </div>
          <span className="text-xs text-slate-500">Personal Checking</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">Personal Account Ledger</h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Select &quot;Debits&quot; in the filter dropdown above. Then switch to Business Account &mdash; notice the dropdown resets automatically back to &quot;All&quot;!
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
            href="/accounts/business"
            className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Switch to Business Account &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
