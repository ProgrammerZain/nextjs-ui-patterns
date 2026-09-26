"use client";

import React from "react";
import { AlertOctagon, RefreshCw } from "lucide-react";

export default function NotificationsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}): React.JSX.Element {
  return (
    <div className="p-6 rounded-xl border border-rose-800 bg-rose-950/40 space-y-4 h-full flex flex-col justify-between animate-in fade-in duration-200">
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-rose-400 font-bold text-base">
          <AlertOctagon className="w-5 h-5" />
          <span>Notification Slot Error Boundary</span>
        </div>

        <div className="p-3.5 rounded-lg bg-slate-950 border border-rose-900/60 text-xs space-y-1">
          <div className="font-semibold text-rose-300">
            Caught Error: {error.message || "Notification service offline"}
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Only the @notifications slot crashed! The main User Feed and Analytics slot remain fully functional and visible.
          </p>
        </div>
      </div>

      <div className="pt-2">
        <button
          onClick={() => reset()}
          className="w-full py-2.5 rounded-lg bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md shadow-rose-500/20"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Retry Service (Reset Slot Error Boundary)</span>
        </button>
      </div>
    </div>
  );
}
