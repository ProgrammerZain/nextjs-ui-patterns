import { OptimizedGrid } from "@/components/OptimizedGrid";

export default function Home(): React.JSX.Element {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-6">
      {/* Header section */}
      <section className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>React Performance Lab</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
          Re-render Optimization with <code className="text-emerald-400 font-mono">React.memo</code> &amp; <code className="text-emerald-400 font-mono">useCallback</code>
        </h1>
        <p className="text-slate-400 text-base max-w-3xl leading-relaxed">
          Hover over grid items below while observing your browser console. With <code className="text-slate-200 font-mono">useCallback</code> and <code className="text-slate-200 font-mono">React.memo</code> enabled, hovering an item only re-renders the affected target items rather than all 50 components.
        </p>
      </section>

      {/* Main Grid Component */}
      <OptimizedGrid />
    </div>
  );
}
