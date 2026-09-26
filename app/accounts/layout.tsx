import React from "react";
import Link from "next/link";

export default function AccountsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className="space-y-6">
      {/* Layout Header */}
      <div className="p-4 rounded-xl border border-indigo-800/60 bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-slate-950/90 backdrop-blur flex items-center justify-between shadow-lg shadow-indigo-950/20">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💳</span>
          <div>
            <h1 className="text-lg font-bold text-slate-100 tracking-tight">
              Fintech Accounts &amp; Banking
            </h1>
            <p className="text-xs text-indigo-400 font-medium">
              Context-Switching Filter Reset Demo via `template.tsx`
            </p>
          </div>
        </div>

        <div className="text-right text-xs text-slate-400 max-w-sm hidden md:block leading-relaxed">
          <span className="text-indigo-400 font-semibold">Context Safety:</span>{" "}
          Navigating between Personal and Business accounts unmounts `template.tsx`, resetting local filter state back to &quot;All&quot;.
        </div>
      </div>

      {/* Account Context Switch Navigation */}
      <nav className="border-b border-slate-800 flex items-center gap-6">
        <Link
          href="/accounts/personal"
          className="pb-3 text-sm font-semibold border-b-2 border-transparent hover:border-indigo-400 text-slate-300 hover:text-indigo-300 transition-colors flex items-center gap-2"
        >
          <span>👤</span>
          <span>Personal Account</span>
        </Link>
        <Link
          href="/accounts/business"
          className="pb-3 text-sm font-semibold border-b-2 border-transparent hover:border-indigo-400 text-slate-300 hover:text-indigo-300 transition-colors flex items-center gap-2"
        >
          <span>💼</span>
          <span>Business Account</span>
        </Link>
      </nav>

      {/* Render Template & Pages */}
      <div>{children}</div>
    </div>
  );
}
