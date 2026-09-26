"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const pathname = usePathname();
  const [mountedAt, setMountedAt] = useState<string>("");

  useEffect(() => {
    console.log("Tracking page view for:", pathname);
    const now = new Date();
    const formatted = `${now.toLocaleTimeString()}.${now
      .getMilliseconds()
      .toString()
      .padStart(3, "0")}`;
    setMountedAt(formatted);
  }, [pathname]);

  return (
    <div className="space-y-6">
      {/* Template Remount Banner */}
      <div className="p-4 rounded-lg border border-purple-800/80 bg-purple-950/40 flex items-center justify-between text-xs animate-in fade-in duration-200">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></span>
          <span className="text-slate-300">
            <strong>Template Remount Boundary:</strong> Active Route &mdash;{" "}
            <code className="text-purple-300 font-mono font-semibold">
              {pathname}
            </code>
          </span>
        </div>
        <div className="font-mono text-purple-300 bg-purple-900/60 px-3 py-1 rounded border border-purple-700/50 flex items-center gap-2">
          <span className="text-slate-400">Template Mounted At:</span>
          <span className="font-bold text-slate-100">
            {mountedAt || "Initializing..."}
          </span>
        </div>
      </div>

      {/* Template Child Content */}
      <div>{children}</div>
    </div>
  );
}
