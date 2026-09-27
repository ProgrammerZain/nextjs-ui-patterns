import Link from "next/link";
import { RevalidateTrigger } from "@/components/RevalidateTrigger";

export default function LayoutPathRevalidateLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  const layoutFetchTimestamp = new Date().toLocaleTimeString();

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Navigation back to Hub */}
      <div className="flex items-center justify-between">
        <Link
          href="/revalidate"
          className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-1"
        >
          &larr; Back to Revalidation Hub
        </Link>
        <span className="text-xs font-mono text-slate-500">Option 3 of 3</span>
      </div>

      {/* Page Header */}
      <section className="space-y-4 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-purple-400 text-xs font-mono font-medium">
          <span>Option 3</span>
          <span>•</span>
          <span>revalidatePath(path, &apos;layout&apos;)</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-50">
          Layout Hierarchy Path Revalidation
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Purges cached data for a layout <strong className="text-purple-300">and all nested child routes</strong> beneath it.
        </p>
      </section>

      {/* Interactive Trigger Section */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400 font-mono">
              Layout Render Timestamp: <strong className="text-purple-400">{layoutFetchTimestamp}</strong>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              Target Layout Path: <code className="text-purple-300 font-bold">&apos;/revalidate/path-layout&apos;</code>
            </div>
          </div>

          <RevalidateTrigger
            type="path-layout"
            target="/revalidate/path-layout"
            buttonText="Trigger revalidatePath('/revalidate/path-layout', 'layout')"
            badgeText="Layout Tree Invalidated"
            variant="purple"
          />
        </div>

        {/* Sub-route switcher navigation */}
        <div className="flex items-center gap-4 pt-3 border-t border-slate-800/80 text-xs font-mono">
          <span className="text-slate-400">Nested Sub-Routes:</span>
          <Link
            href="/revalidate/path-layout"
            className="px-3 py-1 rounded-md bg-purple-950/60 text-purple-300 border border-purple-800/60 hover:bg-purple-900/50"
          >
            /path-layout (Parent)
          </Link>
          <Link
            href="/revalidate/path-layout/subpage"
            className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 hover:bg-slate-700"
          >
            /path-layout/subpage (Child)
          </Link>
        </div>
      </div>

      {/* Signature Breakdown */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs text-slate-300">
        <h3 className="text-sm font-bold text-slate-100 font-sans">
          Signature &amp; Arguments Breakdown
        </h3>
        <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-purple-300 overflow-x-auto">
{`// Purge layout and ALL nested child routes underneath:
revalidatePath('/revalidate/path-layout', 'layout')`}
        </pre>
        <ul className="space-y-2 list-disc list-inside text-slate-400 font-sans text-xs">
          <li>
            <strong className="text-slate-200">1st Argument (`path`):</strong> Root layout URL path string (e.g. <code className="text-purple-400">&apos;/revalidate/path-layout&apos;</code>).
          </li>
          <li>
            <strong className="text-slate-200">2nd Argument (`type`):</strong> Explicitly set to <code className="text-purple-400">&apos;layout&apos;</code> to invalidate the layout AND all child pages beneath it.
          </li>
          <li>
            <strong className="text-slate-200">When &amp; Why:</strong> Use when updating data shared across an entire section of your app (e.g. updating dashboard sidebar data or team workspace settings).
          </li>
        </ul>
      </div>

      {/* Child Route Content */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800">
        {children}
      </div>
    </div>
  );
}
