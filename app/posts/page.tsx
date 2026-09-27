import { RevalidateButton } from "@/components/RevalidateButton";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostsPage(): Promise<React.JSX.Element> {
  const fetchedAt = new Date().toLocaleTimeString();

  // Native fetch call using Next.js Data Cache tag option
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=4", {
    next: { tags: ["posts"] },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }

  const posts: Post[] = await res.json();

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Page Header */}
      <section className="space-y-4 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Next.js Data Cache &amp; Revalidation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
          Tag-Based Cache Invalidation
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          This Server Component fetches posts using native <code className="text-cyan-400 font-mono">fetch()</code> tagged with <code className="text-cyan-400 font-mono">{`{ next: { tags: ['posts'] } }`}</code>.
        </p>
      </section>

      {/* Control Banner with Revalidate Client Button */}
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              Cache Status &amp; Controls
            </h2>
            <div className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-2">
              <span>Server Fetch Timestamp:</span>
              <strong className="text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                {fetchedAt}
              </strong>
            </div>
          </div>

          <RevalidateButton />
        </div>
      </div>

      {/* Rendered Fetched Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3 hover:border-slate-700 transition-all"
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                Post #{post.id}
              </span>
              <span className="text-cyan-400">Tag: &apos;posts&apos;</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 capitalize">
              {post.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed capitalize">
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
