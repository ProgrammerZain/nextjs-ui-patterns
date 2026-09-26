"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [uptime, setUptime] = useState<number>(0);
  const [status, setStatus] = useState<"Connecting" | "Connected">("Connecting");
  const pathname = usePathname();

  useEffect(() => {
    console.log("Connecting to WebSocket server...");
    
    // Simulate connection delay
    const connectTimeout = setTimeout(() => {
      setStatus("Connected");
    }, 500);

    const intervalId = setInterval(() => {
      setUptime((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Disconnecting WebSocket server...");
      clearTimeout(connectTimeout);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="space-y-6">
      {/* WebSocket Status Header Banner */}
      <div className="p-4 rounded-xl border border-emerald-800/60 bg-gradient-to-r from-emerald-950/60 via-slate-900/80 to-slate-950/90 backdrop-blur flex items-center justify-between shadow-lg shadow-emerald-950/20">
        <div className="flex items-center gap-4">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-extrabold">
                WebSocket Status:
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-semibold">
                {status} (wss://chat.lab/v1)
              </span>
            </div>
            <div className="text-xl font-mono font-bold text-slate-50 tracking-tight mt-1 flex items-baseline gap-2">
              <span>Connected for {uptime} seconds</span>
            </div>
          </div>
        </div>

        <div className="text-right text-xs text-slate-400 max-w-sm hidden md:block leading-relaxed">
          <span className="text-emerald-400 font-semibold">Layout Socket Persistence:</span>{" "}
          Navigating between rooms keeps the socket active &amp; counter ticking without reconnecting!
        </div>
      </div>

      {/* Room Selection Sub-Navigation */}
      <nav className="border-b border-slate-800 flex items-center gap-6">
        <Link
          href="/chat/room-a"
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
            pathname === "/chat/room-a"
              ? "border-emerald-400 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <span>💬</span>
          <span>Room A (#general)</span>
        </Link>
        <Link
          href="/chat/room-b"
          className={`pb-3 text-sm font-semibold border-b-2 transition-colors flex items-center gap-2 ${
            pathname === "/chat/room-b"
              ? "border-emerald-400 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <span>🚀</span>
          <span>Room B (#engineering)</span>
        </Link>
      </nav>

      {/* Active Room View */}
      <div>{children}</div>
    </div>
  );
}
