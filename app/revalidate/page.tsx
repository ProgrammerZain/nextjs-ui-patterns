import Link from "next/link";

export default function RevalidateHubPage(): React.JSX.Element {
  return (
    <div className="max-w-6xl mx-auto space-y-10 py-6">
      {/* Header section */}
      <section className="space-y-4 border-b border-slate-800 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Next.js Cache Revalidation Master Reference</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
          How Revalidation Works in Next.js
        </h1>
        <p className="text-slate-400 text-base max-w-3xl leading-relaxed">
          Next.js provides multiple mechanisms for purging cached data on-demand. Learn how each function works, their signatures, arguments, invalidation radius, and best use cases.
        </p>
      </section>

      {/* Comparison Grid Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Option 1: revalidateTag */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-cyan-500/50 transition-all group flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
              01
            </div>
            <h2 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              revalidateTag
            </h2>
            <div className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
              revalidateTag(tag, profile)
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Invalidates all <code className="text-slate-300 font-mono">fetch</code> cache entries tagged with a matching string, across any route in the application.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <div className="text-[11px] font-mono text-slate-400">
              <strong>Scope:</strong> Global (Cross-route)
            </div>
            <Link
              href="/revalidate/tag"
              className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Test Tag Revalidation &rarr;
            </Link>
          </div>
        </div>

        {/* Option 2: revalidatePath ('page') */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-emerald-500/50 transition-all group flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
              02
            </div>
            <h2 className="text-xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
              revalidatePath (Page)
            </h2>
            <div className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/60">
              revalidatePath(path, &apos;page&apos;)
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Invalidates cached data for a single specific route URL path without affecting sub-routes.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <div className="text-[11px] font-mono text-slate-400">
              <strong>Scope:</strong> Specific Single Route
            </div>
            <Link
              href="/revalidate/path-page"
              className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Test Page Revalidation &rarr;
            </Link>
          </div>
        </div>

        {/* Option 3: revalidatePath ('layout') */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 hover:border-purple-500/50 transition-all group flex flex-col justify-between">
          <div className="space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-800 flex items-center justify-center text-purple-400 font-mono font-bold text-xs">
              03
            </div>
            <h2 className="text-xl font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
              revalidatePath (Layout)
            </h2>
            <div className="text-xs font-mono text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded border border-purple-800/60">
              revalidatePath(path, &apos;layout&apos;)
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Invalidates cached data for a layout route path and ALL nested child pages beneath it.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <div className="text-[11px] font-mono text-slate-400">
              <strong>Scope:</strong> Layout + All Child Sub-routes
            </div>
            <Link
              href="/revalidate/path-layout"
              className="inline-flex items-center gap-1 text-xs font-bold text-purple-400 hover:text-purple-300 transition-colors"
            >
              Test Layout Revalidation &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Deep Dive Summary Comparison Table */}
      <section className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-6">
        <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
          <span className="text-cyan-400">📊</span> Revalidation Options Comparison Matrix
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                <th className="p-3 font-semibold">Function</th>
                <th className="p-3 font-semibold">Arguments</th>
                <th className="p-3 font-semibold">Target Scope</th>
                <th className="p-3 font-semibold">Primary Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-cyan-400">revalidateTag</td>
                <td className="p-3">
                  1. <code className="text-slate-200">tag: string</code><br />
                  2. <code className="text-slate-200">profile: string | object</code>
                </td>
                <td className="p-3">Cross-route matching tag</td>
                <td className="p-3 text-slate-400">Shared entity updates (e.g. products, user profile, cart)</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-emerald-400">revalidatePath (&apos;page&apos;)</td>
                <td className="p-3">
                  1. <code className="text-slate-200">path: string</code><br />
                  2. <code className="text-slate-200">type?: &apos;page&apos;</code>
                </td>
                <td className="p-3">Single specific URL page</td>
                <td className="p-3 text-slate-400">Single route updates (e.g. post editing, single item details)</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-purple-400">revalidatePath (&apos;layout&apos;)</td>
                <td className="p-3">
                  1. <code className="text-slate-200">path: string</code><br />
                  2. <code className="text-slate-200">type: &apos;layout&apos;</code>
                </td>
                <td className="p-3">Layout + all nested sub-routes</td>
                <td className="p-3 text-slate-400">Section-wide updates (e.g. dashboard sidebar, section permissions)</td>
              </tr>
              <tr className="hover:bg-slate-800/30">
                <td className="p-3 font-bold text-amber-400">updateTag</td>
                <td className="p-3">
                  1. <code className="text-slate-200">tag: string</code>
                </td>
                <td className="p-3">Immediate request context</td>
                <td className="p-3 text-slate-400">Read-your-own-writes in Server Actions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
