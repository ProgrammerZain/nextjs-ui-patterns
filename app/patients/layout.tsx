import React from "react";
import Link from "next/link";

export default function PatientsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <div className="space-y-6">
      {/* Healthcare Portal Header */}
      <div className="p-4 rounded-xl border border-rose-800/60 bg-gradient-to-r from-rose-950/60 via-slate-900/80 to-slate-950/90 backdrop-blur flex items-center justify-between shadow-lg shadow-rose-950/20">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏥</span>
          <div>
            <h1 className="text-lg font-bold text-slate-100 tracking-tight">
              Healthcare Medical Records
            </h1>
            <p className="text-xs text-rose-400 font-medium">
              State Bleeding Prevention Demonstration via `template.tsx`
            </p>
          </div>
        </div>

        <div className="text-right text-xs text-slate-400 max-w-sm hidden md:block leading-relaxed">
          <span className="text-rose-400 font-semibold">HIPAA / Privacy Protection:</span>{" "}
          Navigating between patients destroys the previous template instance, preventing draft notes from bleeding over.
        </div>
      </div>

      {/* Patient Record Navigation */}
      <nav className="border-b border-slate-800 flex items-center gap-6">
        <Link
          href="/patients/1"
          className="pb-3 text-sm font-semibold border-b-2 border-transparent hover:border-rose-400 text-slate-300 hover:text-rose-300 transition-colors flex items-center gap-2"
        >
          <span>👤</span>
          <span>Patient 1 (John Doe)</span>
        </Link>
        <Link
          href="/patients/2"
          className="pb-3 text-sm font-semibold border-b-2 border-transparent hover:border-rose-400 text-slate-300 hover:text-rose-300 transition-colors flex items-center gap-2"
        >
          <span>👩</span>
          <span>Patient 2 (Jane Smith)</span>
        </Link>
      </nav>

      {/* Template & Child Page Container */}
      <div>{children}</div>
    </div>
  );
}
