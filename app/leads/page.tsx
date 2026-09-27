import type { Metadata } from "next";
import Link from "next/link";
import { getLeads, Lead } from "@/lib/db";

export const metadata: Metadata = {
  title: "Leads Grid | Server Fetching Demo",
  description: "Demonstrating Async Server Component data fetching directly from storage",
};

export default async function LeadsPage(): Promise<React.JSX.Element> {
  // Direct server call inside async Server Component
  const leads: Lead[] = await getLeads();
  const fetchedAt = new Date().toLocaleTimeString();

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-cyan-900/40 bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/30 shadow-lg relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/60">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Scenario 1: Direct Server Fetching
          </div>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            Leads Directory
          </h1>
          <p className="text-slate-400 text-sm max-w-xl">
            This page is an <strong className="text-cyan-300">Async Server Component</strong>. It accesses <code className="text-cyan-300">getLeads()</code> directly on the server without client-side fetches, API roundtrips, or exposed endpoints.
          </p>
        </div>

        <div className="flex items-center gap-3 relative z-10">
          <Link
            href="/leads/new"
            className="px-4 py-2.5 rounded-xl font-semibold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md hover:shadow-emerald-900/30 transition-all flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add Lead (Server Action)
          </Link>
        </div>
      </div>

      {/* Info Card / Stats */}
      <div className="flex items-center justify-between px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/60 text-xs text-slate-400">
        <div>
          Total Leads Rendered: <span className="font-semibold text-cyan-400">{leads.length}</span>
        </div>
        <div>
          Server Render Timestamp: <span className="font-mono text-slate-300">{fetchedAt}</span>
        </div>
      </div>

      {/* UI Grid of Leads */}
      {leads.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-slate-800/80 bg-slate-900/30 space-y-4">
          <p className="text-slate-400">No leads recorded yet.</p>
          <Link
            href="/leads/new"
            className="inline-block px-4 py-2 rounded-lg text-sm bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
          >
            Create Your First Lead
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leads.map((lead) => {
            const formattedDate = new Date(lead.createdAt).toLocaleString(undefined, {
              dateStyle: "medium",
              timeStyle: "short",
            });

            return (
              <div
                key={lead.id}
                className="group relative p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all shadow-md flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center font-bold text-cyan-400 text-lg group-hover:scale-105 transition-transform">
                      {lead.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                      {lead.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {lead.name}
                    </h3>
                    <p className="text-slate-400 text-sm font-mono truncate">
                      {lead.email}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Direct RSC Data
                  </span>
                  <span>{formattedDate}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Data Architecture Insights */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-3 text-sm text-slate-400">
        <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
          <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Architecture Note: Direct Server Component Fetching
        </h3>
        <p className="leading-relaxed">
          In Next.js App Router, Server Components run strictly on the server during request or build time. When fetching data from internal services or databases (like <code className="text-slate-200">lib/db.ts</code>), you can invoke backend functions directly inside the component without needing a REST endpoint or HTTP client overhead.
        </p>
      </div>
    </div>
  );
}
