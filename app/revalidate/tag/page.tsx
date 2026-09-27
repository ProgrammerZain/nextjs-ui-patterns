import Link from "next/link";
import { RevalidateTrigger } from "@/components/RevalidateTrigger";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function TagRevalidatePage(): Promise<React.JSX.Element> {
  const fetchTimestamp = new Date().toLocaleTimeString();

  // Native fetch tagged with 'posts'
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3", {
    next: { tags: ["posts"] },
  });

  const posts: Post[] = await res.json();

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Navigation back to Hub */}
      <div className="flex items-center justify-between">
        <Link
          href="/revalidate"
          className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
        >
          &larr; Back to Revalidation Hub
        </Link>
        <span className="text-xs font-mono text-slate-500">Option 1 of 3</span>
      </div>

      {/* Page Header */}
      <section className="space-y-4 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <span>Option 1</span>
          <span>•</span>
          <span>revalidateTag(tag, profile)</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-50">
          Tag-Based Cache Revalidation
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          Purges cached data tagged with a specific string label across any route or component in your application.
        </p>
      </section>

      {/* Interactive Trigger Section */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-400 font-mono">
              Fetch Time: <strong className="text-cyan-400">{fetchTimestamp}</strong>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              Tag: <code className="text-cyan-300 font-bold">&apos;posts&apos;</code>
            </div>
          </div>

          <RevalidateTrigger
            type="tag"
            target="posts"
            buttonText="Trigger revalidateTag('posts', 'max')"
            badgeText="Tag Invalidated"
            variant="cyan"
          />
        </div>
      </div>

      {/* Code Signature & Technical Details */}
      <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs text-slate-300">
        <h3 className="text-sm font-bold text-slate-100 font-sans">
          Signature &amp; Arguments Breakdown
        </h3>
        <pre className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 overflow-x-auto">
{`// 1. Fetching with tag:
fetch('https://api.example.com/posts', {
  next: { tags: ['posts'] }
})

// 2. Invalidation in Server Action:
revalidateTag('posts', 'max')`}
        </pre>
        <ul className="space-y-2 list-disc list-inside text-slate-400 font-sans text-xs">
          <li>
            <strong className="text-slate-200">1st Argument (`tag`):</strong> A string identifier (e.g. <code className="text-cyan-400">&apos;posts&apos;</code>, <code className="text-cyan-400">&apos;user:42&apos;</code>) assigned to `fetch` calls.
          </li>
          <li>
            <strong className="text-slate-200">2nd Argument (`profile`):</strong> A cache lifetime profile string (e.g. <code className="text-cyan-400">&apos;max&apos;</code>) or expiration config object.
          </li>
          <li>
            <strong className="text-slate-200">When &amp; Why:</strong> Best used when the same data source is shared across multiple unrelated routes (e.g., updating user avatar invalidates header, settings, and profile pages simultaneously).
          </li>
        </ul>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
            <div className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded w-max">
              Tag: &apos;posts&apos;
            </div>
            <h4 className="text-sm font-bold text-slate-200 capitalize truncate">{post.title}</h4>
            <p className="text-xs text-slate-400 line-clamp-2 capitalize">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
