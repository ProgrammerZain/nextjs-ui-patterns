"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const pathname = usePathname();

  useEffect(() => {
    console.log("Dashboard Layout Mounted");
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Session Timer Header */}
      <div className="p-4 rounded-xl border border-cyan-800/60 bg-gradient-to-r from-cyan-950/60 to-slate-900/80 backdrop-blur flex items-center justify-between shadow-lg shadow-cyan-950/20">
        <div className="flex items-center gap-4">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-cyan-400 font-bold">
              Persistent Session Timer
            </div>
            <div className="text-2xl font-mono font-bold text-slate-50 tracking-tight flex items-baseline gap-2">
              <span>{formatTime(timeLeft)}</span>
              <span className="text-xs font-sans text-slate-400 font-normal">
                ({timeLeft}s remaining)
              </span>
            </div>
          </div>
        </div>

        <div className="text-right text-xs text-slate-400 max-w-sm hidden md:block">
          <span className="text-emerald-400 font-semibold">State Preservation Demo:</span>{" "}
          Layout state is preserved across route changes (`/dashboard/transfer` &amp; `/dashboard/statement`).
        </div>
      </div>

      {/* Sub-Navigation Bar */}
      <nav className="border-b border-slate-800 flex items-center gap-6">
        <Link
          href="/dashboard/transfer"
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            pathname === "/dashboard/transfer"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          Transfer Money
        </Link>
        <Link
          href="/dashboard/statement"
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors ${
            pathname === "/dashboard/statement"
              ? "border-cyan-400 text-cyan-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          Account Statement
        </Link>
      </nav>

      {/* Child Route Container */}
      <div>{children}</div>
    </div>
  );
}
