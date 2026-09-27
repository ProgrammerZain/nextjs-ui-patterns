"use client";

import { useTransition, useState } from "react";
import { revalidatePosts } from "@/app/actions";

export function RevalidateButton(): React.JSX.Element {
  const [isPending, startTransition] = useTransition();
  const [lastRevalidated, setLastRevalidated] = useState<string | null>(null);

  const handleRevalidate = () => {
    startTransition(async () => {
      const result = await revalidatePosts();
      setLastRevalidated(result.revalidatedAt);
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <button
        onClick={handleRevalidate}
        disabled={isPending}
        className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 shadow-lg select-none cursor-pointer ${
          isPending
            ? "bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"
            : "bg-cyan-500 hover:bg-cyan-400 text-slate-950 border border-cyan-400 shadow-cyan-500/20 active:scale-95"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isPending ? "bg-amber-400 animate-spin" : "bg-slate-950"
          }`}
        />
        <span>{isPending ? "Revalidating Cache..." : "Trigger revalidateTag('posts')"}</span>
      </button>

      {lastRevalidated && (
        <div className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/50 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Last Revalidated: {new Date(lastRevalidated).toLocaleTimeString()}</span>
        </div>
      )}
    </div>
  );
}
