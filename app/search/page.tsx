import React from "react";
import type { Metadata } from "next";
import SearchFilter from "./SearchFilter";
import { Search, Zap, Layers, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "High Performance Search Filter | useDeferredValue",
  description: "Optimizing 10,000 item client search with React 18/19 useDeferredValue and useMemo",
};

export default function SearchPage(): React.JSX.Element {
  // Generate a dummy array of 10,000 strings in this Server Component
  const categories = [
    "React Server Component",
    "Next.js App Router",
    "Tailwind CSS Layout",
    "TypeScript Strict Interface",
    "Prisma Database Model",
    "Server Action Mutation",
    "GraphQL Subscriptions",
    "System Telemetry Log",
    "State Management Store",
    "WebSocket Stream Event",
  ];

  const topics = [
    "Performance Optimization",
    "Cache Revalidation Strategy",
    "Parallel Routes Isolation",
    "Intercepting Routes Modal",
    "Optimistic UI Transition",
    "Context Switching Reset",
    "Hydration Boundary Audit",
    "Layout State Preservation",
    "Deferred Filtering Compute",
    "Security Token Verification",
  ];

  const items: string[] = Array.from({ length: 10000 }, (_, i) => {
    const cat = categories[i % categories.length];
    const top = topics[(i * 3) % topics.length];
    return `Record #${i + 1} &bull; ${cat} &mdash; ${top} (ID_${1000 + i})`;
  });

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Search Demo Page Header */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center font-bold">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-50">
                10,000 Item Search Filter
              </h1>
              <p className="text-xs text-slate-400">
                React <code className="text-cyan-400 font-mono">useDeferredValue</code> + <code className="text-cyan-400 font-mono">useMemo</code> Optimization
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
            10,000 Server Records
          </span>
        </div>

        <div className="p-4 rounded-xl border border-slate-800 bg-slate-950 text-xs text-slate-300 space-y-2 leading-relaxed">
          <div className="flex items-center gap-2 font-bold text-cyan-400">
            <Zap className="w-4 h-4" />
            <span>Why `useDeferredValue` is Essential Here:</span>
          </div>
          <p>
            Filtering 10,000 strings on every keystroke normally causes severe input lag and frame drops. By passing the input query into <code className="text-amber-300 font-mono">useDeferredValue</code> and filtering via <code className="text-cyan-400 font-mono">useMemo</code> on the deferred query, the text input stays 100% responsive while React computes the filtered list in the background!
          </p>
        </div>
      </div>

      {/* Render Client Component SearchFilter with 10,000 items */}
      <SearchFilter items={items} />
    </div>
  );
}
