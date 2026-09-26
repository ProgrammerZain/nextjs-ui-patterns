import Link from "next/link";

export default function Home(): React.JSX.Element {
  return (
    <div className="space-y-10">
      <section className="space-y-4 border-b border-slate-800 pb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
          Next.js Lifecycle Lab
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          A minimalist testing ground for exploring Next.js App Router lifecycle patterns, server components, and UI interactions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/50 transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 font-bold mb-4 group-hover:scale-105 transition-transform">
            01
          </div>
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            Component Lifecycle & State
          </h2>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Explore server component execution, client component hydration, and state persistence across route navigations.
          </p>
          <Link
            href="/labs"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Explore Labs &rarr;
          </Link>
        </div>

        <div className="p-6 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:border-blue-500/50 transition-colors group">
          <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/50 flex items-center justify-center text-blue-400 font-bold mb-4 group-hover:scale-105 transition-transform">
            02
          </div>
          <h2 className="text-xl font-semibold text-slate-100 mb-2">
            Routing & Architecture
          </h2>
          <p className="text-slate-400 text-sm mb-6 leading-relaxed">
            Demonstrates Next.js App Router nested layouts, dynamic routes, and page routing setup.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            About Project &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}

