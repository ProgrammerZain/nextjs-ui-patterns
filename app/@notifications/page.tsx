"use client";

import React, { useState } from "react";
import { Bell, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function NotificationsSlot(): React.JSX.Element {
  const [hasError, setHasError] = useState<boolean>(false);

  if (hasError) {
    throw new Error("Notification service offline");
  }

  return (
    <div className="p-6 rounded-xl border border-indigo-800/80 bg-slate-900/40 space-y-4 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-base">
            <Bell className="w-5 h-5" />
            <span>Notifications Slot (@notifications)</span>
          </div>
          <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800">
            Active (Online)
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-200">Security Audit Passed</span>
              <p className="text-slate-400 text-[11px]">System scan finished with 0 critical issues.</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5 text-xs">
            <Bell className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-200">New Deployment Live</span>
              <p className="text-slate-400 text-[11px]">Build #402 deployed to production region.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800">
        <button
          onClick={() => setHasError(true)}
          className="w-full py-2.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Simulate Crash (Triggers @notifications/error.tsx)</span>
        </button>
      </div>
    </div>
  );
}
