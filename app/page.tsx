import React from "react";
import type { Metadata } from "next";
import LabeledInput from "@/components/LabeledInput";
import { ShieldCheck, Sparkles, UserCheck, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility & useId Hook | Next.js Patterns",
  description: "SSR-safe unique ID generation for form accessibility using React useId hook",
};

export default function HomePage(): React.JSX.Element {
  return (
    <div className="space-y-10 text-center max-w-3xl mx-auto py-8">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-semibold border border-cyan-800/60">
          <Sparkles className="w-3.5 h-3.5" />
          <span>React 18/19 Pattern: useId Hook Accessibility</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50 leading-tight">
          Form Accessibility with <code className="text-cyan-400 font-mono">useId</code>
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Demonstrating SSR-safe unique ID generation for WAI-ARIA and label-input association. Prevents hydration mismatch bugs when rendering dynamic forms in Next.js App Router.
        </p>
      </div>

      {/* Form Card containing 3 LabeledInput instances */}
      <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-6 shadow-xl shadow-cyan-950/10">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-xs font-mono">
          <span className="text-slate-400 font-semibold flex items-center gap-1.5">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            <span>Accessible Form Registration</span>
          </span>
          <span className="text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/50">
            3 Unique useId Instances
          </span>
        </div>

        <form className="space-y-5">
          {/* LabeledInput Instance 1 */}
          <LabeledInput
            label="Email Address"
            type="email"
            placeholder="john.doe@acme.com"
            helperText="We will send your login confirmation link here."
            required
          />

          {/* LabeledInput Instance 2 */}
          <LabeledInput
            label="Account Username"
            type="text"
            placeholder="johndoe_dev"
            helperText="Unique username used for public profile URL."
            required
          />

          {/* LabeledInput Instance 3 */}
          <LabeledInput
            label="Security Password"
            type="password"
            placeholder="••••••••••••"
            helperText="Must be at least 12 characters with symbols."
            required
          />

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
            >
              Submit Registration Form
            </button>
          </div>
        </form>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-t border-slate-800/80 pt-8">
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>01. Hydration Mismatch Safety</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            <code className="text-slate-200 font-mono">useId</code> guarantees that server-rendered HTML IDs match client-hydrated DOM IDs, avoiding hydration errors.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-blue-400" />
            <span>02. Reusable Component Encapsulation</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every instance of <code className="text-slate-200 font-mono">&lt;LabeledInput&gt;</code> gets a scoped, prefix-aware unique string (e.g. <code className="text-cyan-400 font-mono">:r0:</code>, <code className="text-cyan-400 font-mono">:r1:</code>, <code className="text-cyan-400 font-mono">:r2:</code>).
          </p>
        </div>
      </div>
    </div>
  );
}
