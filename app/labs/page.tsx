import Link from "next/link";

interface LabItem {
  id: string;
  title: string;
  description: string;
  status: "Active" | "Planned" | "Experimental";
}

const labs: LabItem[] = [
  {
    id: "server-client-boundary",
    title: "Server & Client Boundaries",
    description: "Observing data flow and hydration between React Server Components and Client Components.",
    status: "Active",
  },
  {
    id: "suspense-streaming",
    title: "Suspense & Streaming",
    description: "Testing asynchronous data fetching with streaming UI fallbacks.",
    status: "Active",
  },
  {
    id: "route-cache-lifecycle",
    title: "Route Cache Lifecycle",
    description: "Inspecting router cache behavior and revalidation strategies.",
    status: "Planned",
  },
];

export default function LabsPage(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-50">
            Lifecycle Experiments
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Interactive laboratories for Next.js patterns.
          </p>
        </div>
        <Link
          href="/"
          className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors border border-slate-800 rounded-lg px-3 py-1.5"
        >
          &larr; Back to Home
        </Link>
      </div>

      <div className="grid gap-4">
        {labs.map((lab) => (
          <div
            key={lab.id}
            className="p-5 rounded-lg border border-slate-800/80 bg-slate-900/30 flex items-start justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-base font-semibold text-slate-200">
                  {lab.title}
                </h2>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                    lab.status === "Active"
                      ? "bg-emerald-950/50 text-emerald-400 border-emerald-800/60"
                      : lab.status === "Planned"
                      ? "bg-amber-950/50 text-amber-400 border-amber-800/60"
                      : "bg-purple-950/50 text-purple-400 border-purple-800/60"
                  }`}
                >
                  {lab.status}
                </span>
              </div>
              <p className="text-sm text-slate-400">{lab.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
