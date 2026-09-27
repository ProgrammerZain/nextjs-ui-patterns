import Link from "next/link";
import { RevalidateTrigger } from "@/components/RevalidateTrigger";

export default async function PathPageRevalidatePage(): Promise<React.JSX.Element> {
  const fetchTimestamp = new Date().toLocaleTimeString();

  // Fetching data specific to this page
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache",
  });
  const post = await res.json();

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Navigation back to Hub */}
      <div className="flex items-center justify-between">
        <Link
          href="/revalidate"
          className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
        >
          &larr; Back to Revalidation Hub
        </Link>
        <span className="text-xs font-mono text-slate-500">Option 2 of 3</span>
      </div>

      {/* Page Header */}
      <section className="space-y-4 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-mono font-medium">
          <span>Option 2</span>
          <span>•</span>
          <span>revalidatePath(path, &apos;page&apos;)</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-50">
          Page-Specific Path Revalidation
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Purges cached data for a specific URL route path without affecting child routes or other pages.
        </p>
      </section>

      {/* Interactive Trigger Section */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400 font-mono">
              Fetch Timestamp: <strong className="text-emerald-400">{fetchTimestamp}</strong>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              Target Path: <code className="text-emerald-300 font-bold">&apos;/revalidate/path-page&apos;</code>
            </div>
          </div>

          <RevalidateTrigger
            type="path-page"
            target="/revalidate/path-page"
            buttonText="Trigger revalidatePath('/revalidate/path-page', 'page')"
            badgeText="Page Path Invalidated"
            variant="emerald"
          />
        </div>
      </div>

      {/* Signature Breakdown */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs text-slate-300">
        <h3 className="text-sm font-bold text-slate-100 font-sans">
          Signature &amp; Arguments Breakdown
        </h3>
        <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-emerald-300 overflow-x-auto">
{`// Purge cache for a specific page URL route:
revalidatePath('/revalidate/path-page', 'page')`}
        </pre>
        <ul className="space-y-2 list-disc list-inside text-slate-400 font-sans text-xs">
          <li>
            <strong className="text-slate-200">1st Argument (`path`):</strong> Exact URL string path to invalidate (e.g. <code className="text-emerald-400">&apos;/revalidate/path-page&apos;</code>).
          </li>
          <li>
            <strong className="text-slate-200">2nd Argument (`type`):</strong> Explicitly set to <code className="text-emerald-400">&apos;page&apos;</code> to target only this single route page.
          </li>
          <li>
            <strong className="text-slate-200">When &amp; Why:</strong> Use when an action only updates content on a single specific page route (e.g. submitting a comment on a blog post).
          </li>
        </ul>
      </div>

      {/* Page Content Card */}
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
        <div className="text-xs font-mono text-emerald-400">Target Route Content:</div>
        <h3 className="text-base font-bold text-slate-100 capitalize">{post.title}</h3>
        <p className="text-sm text-slate-400 capitalize">{post.body}</p>
      </div>
    </div>
  );
}
