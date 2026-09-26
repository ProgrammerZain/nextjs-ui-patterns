import Link from "next/link";

interface FeatureTech {
  name: string;
  version: string;
  role: string;
}

const techStack: FeatureTech[] = [
  { name: "Next.js", version: "15.x", role: "App Router & React Framework" },
  { name: "TypeScript", version: "5.x", role: "Static Typing & Developer Ergonomics" },
  { name: "Tailwind CSS", version: "4.x", role: "Utility-First Styling" },
  { name: "React", version: "19.x", role: "UI Library & Server Components" },
];

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-50">
          About Next.js Lifecycle Lab
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Project overview and technical stack specifications.
        </p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-sm leading-relaxed">
        <p>
          This repository serves as a workspace for testing UI patterns, state persistence, and lifecycle transitions in modern Next.js applications using TypeScript and Tailwind CSS.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-100">Tech Stack Overview</h2>
        <div className="divide-y divide-slate-800 border border-slate-800 rounded-lg overflow-hidden bg-slate-900/30">
          {techStack.map((item) => (
            <div key={item.name} className="p-4 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-200">{item.name}</span>
                <span className="ml-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  {item.version}
                </span>
              </div>
              <span className="text-xs text-slate-400">{item.role}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          &larr; Return to Lab Home
        </Link>
      </div>
    </div>
  );
}
