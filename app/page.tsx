import Link from "next/link";

export default function Home(): React.JSX.Element {
  return (
    <div className="space-y-12 py-4">
      {/* Hero Section */}
      <section className="space-y-4 border-b border-slate-800/80 pb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-slate-900 text-cyan-400 border border-slate-800">
          <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
          Next.js App Router Data Architecture
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50">
          Data Architecture Lab
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl leading-relaxed">
          Comparing the three core data fetching and mutation patterns in Next.js: Server Components, Server Actions, and REST Route Handlers.
        </p>
      </section>

      {/* Scenarios Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scenario 1: Server Fetching */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-cyan-500/50 transition-all group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center text-cyan-400 font-bold text-lg group-hover:scale-105 transition-transform">
              01
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                Server Fetching
              </span>
              <h2 className="text-xl font-bold text-slate-100">
                Direct Async RSC
              </h2>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Fetch data directly on the server inside Async Server Components without client JS overhead or API roundtrips.
            </p>
          </div>
          <Link
            href="/leads"
            className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-950/80 text-cyan-300 font-semibold text-xs border border-slate-700/60 transition-all"
          >
            <span>Explore /leads</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Scenario 2: Server Actions */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-emerald-500/50 transition-all group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-950/60 border border-emerald-800/50 flex items-center justify-center text-emerald-400 font-bold text-lg group-hover:scale-105 transition-transform">
              02
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Server Actions
              </span>
              <h2 className="text-xl font-bold text-slate-100">
                Mutations &amp; Revalidation
              </h2>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Mutate data directly via <code className="text-emerald-300">&quot;use server&quot;</code> actions connected to client forms with <code className="text-emerald-300">useActionState</code>.
            </p>
          </div>
          <Link
            href="/leads/new"
            className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-emerald-950/80 text-emerald-300 font-semibold text-xs border border-slate-700/60 transition-all"
          >
            <span>Create Lead (/leads/new)</span>
            <span>&rarr;</span>
          </Link>
        </div>

        {/* Scenario 3: Route Handlers */}
        <div className="p-6 rounded-2xl border border-slate-800/80 bg-slate-900/40 hover:border-indigo-500/50 transition-all group flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-950/60 border border-indigo-800/50 flex items-center justify-center text-indigo-400 font-bold text-lg group-hover:scale-105 transition-transform">
              03
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                Route Handlers
              </span>
              <h2 className="text-xl font-bold text-slate-100">
                REST API Endpoints
              </h2>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Expose HTTP JSON endpoints via <code className="text-indigo-300">NextResponse.json</code> for external clients (React Native apps, webhooks).
            </p>
          </div>
          <Link
            href="/api-tester"
            className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-indigo-950/80 text-indigo-300 font-semibold text-xs border border-slate-700/60 transition-all"
          >
            <span>Launch API Tester</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
