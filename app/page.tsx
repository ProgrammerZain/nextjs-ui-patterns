import { HoverBox } from "@/components/HoverBox";

export default function Home(): React.JSX.Element {
  return (
    <div className="max-w-4xl mx-auto space-y-10 py-6">
      {/* Header section */}
      <section className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>React 19 Hooks Demo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
          Dynamic Tooltip with <code className="text-cyan-400 font-mono">useLayoutEffect</code>
        </h1>
        <p className="text-slate-400 text-base max-w-2xl leading-relaxed">
          Hover over the target container below. The tooltip position is dynamically calculated by measuring the target element&apos;s exact bounding width synchronously before browser repainting.
        </p>
      </section>

      {/* Main Interactive Demo */}
      <section className="space-y-6">
        <HoverBox />
      </section>

      {/* Concept Breakdown Card */}
      <section className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-4">
        <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
          <span className="text-cyan-400">#</span> How <code className="text-cyan-400 font-mono text-base">useLayoutEffect</code> Works Here
        </h2>
        <ul className="space-y-3 text-sm text-slate-300 leading-relaxed list-disc list-inside">
          <li>
            <strong className="text-slate-100">Synchronous Execution:</strong> Unlike <code className="text-cyan-300 font-mono">useEffect</code> (which runs asynchronously after the browser paints), <code className="text-cyan-300 font-mono">useLayoutEffect</code> fires synchronously right after DOM mutations but <em>before</em> the browser renders pixels on screen.
          </li>
          <li>
            <strong className="text-slate-100">Flicker-Free Layout Calculations:</strong> Measuring <code className="text-cyan-300 font-mono">ref.current.getBoundingClientRect().width</code> inside <code className="text-cyan-300 font-mono">useLayoutEffect</code> guarantees the tooltip position is set before the frame is drawn, preventing visual repositioning glitches.
          </li>
        </ul>
      </section>
    </div>
  );
}
