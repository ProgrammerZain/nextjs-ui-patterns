"use client";

import { useTransition, useState } from "react";
import { revalidatePostsTag, revalidateSpecificPage, revalidateLayoutHierarchy } from "@/app/actions";

interface RevalidateTriggerProps {
  type: "tag" | "path-page" | "path-layout";
  target?: string;
  buttonText: string;
  badgeText: string;
  variant?: "cyan" | "emerald" | "purple";
}

export function RevalidateTrigger({
  type,
  target,
  buttonText,
  badgeText,
  variant = "cyan",
}: RevalidateTriggerProps): React.JSX.Element {
  const [isPending, startTransition] = useTransition();
  const [lastRevalidated, setLastRevalidated] = useState<string | null>(null);

  const colors = {
    cyan: {
      button: "bg-cyan-500 hover:bg-cyan-400 text-slate-950 border-cyan-400 shadow-cyan-500/20",
      badge: "text-cyan-400 bg-cyan-950/60 border-cyan-800/50",
    },
    emerald: {
      button: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-emerald-400 shadow-emerald-500/20",
      badge: "text-emerald-400 bg-emerald-950/60 border-emerald-800/50",
    },
    purple: {
      button: "bg-purple-500 hover:bg-purple-400 text-slate-950 border-purple-400 shadow-purple-500/20",
      badge: "text-purple-400 bg-purple-950/60 border-purple-800/50",
    },
  }[variant];

  const handleTrigger = () => {
    startTransition(async () => {
      let result;
      if (type === "tag") {
        result = await revalidatePostsTag(target || "posts");
      } else if (type === "path-page") {
        result = await revalidateSpecificPage(target || "/revalidate/path-page");
      } else {
        result = await revalidateLayoutHierarchy(target || "/revalidate/path-layout");
      }
      setLastRevalidated(result.revalidatedAt);
    });
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <button
        onClick={handleTrigger}
        disabled={isPending}
        className={`px-4 py-2.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-2 shadow-lg select-none cursor-pointer border ${
          isPending
            ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
            : colors.button
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${
            isPending ? "bg-amber-400 animate-spin" : "bg-slate-950"
          }`}
        />
        <span>{isPending ? "Revalidating..." : buttonText}</span>
      </button>

      {lastRevalidated && (
        <div className={`text-xs font-mono px-3 py-1.5 rounded-lg border flex items-center gap-2 ${colors.badge}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>{badgeText}: {new Date(lastRevalidated).toLocaleTimeString()}</span>
        </div>
      )}
    </div>
  );
}
