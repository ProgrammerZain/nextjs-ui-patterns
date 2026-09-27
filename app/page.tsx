import { fetchItemsPage } from "@/app/actions";
import { InfiniteScrollList } from "@/components/InfiniteScrollList";

export default async function Home(): Promise<React.JSX.Element> {
  // Fetch initial Page 1 (10 items) on Node.js Server Component
  const initialData = await fetchItemsPage(1, 10);

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-6">
      {/* Header section */}
      <section className="space-y-4 border-b border-slate-800 pb-6 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>React 19 &amp; Next.js Server Actions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-50">
          Paginated Infinite Scroll with <code className="text-cyan-400 font-mono">IntersectionObserver</code>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl leading-relaxed">
          The initial 10 items are rendered on the server. As you scroll down, an <code className="text-slate-200 font-mono">IntersectionObserver</code> attached to a <code className="text-slate-200 font-mono">useRef</code> detects when the loading target enters the viewport and calls a Server Action to load the next 10 items from <code className="text-slate-200 font-mono">data.json</code>.
        </p>
      </section>

      {/* Infinite Scroll List Client Component */}
      <InfiniteScrollList
        initialItems={initialData.items}
        initialHasMore={initialData.hasMore}
      />
    </div>
  );
}
