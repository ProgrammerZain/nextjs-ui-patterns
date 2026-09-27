"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createLeadAction, LeadActionState } from "@/app/actions/leadActions";

const initialState: LeadActionState = {
  success: false,
};

export default function NewLeadPage(): React.JSX.Element {
  const [state, formAction, isPending] = useActionState(
    createLeadAction,
    initialState
  );

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl border border-emerald-900/40 bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/30 shadow-lg space-y-2">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          Scenario 2: Server Actions
        </div>
        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
          Create New Lead
        </h1>
        <p className="text-slate-400 text-sm">
          Submit form data directly to a <strong className="text-emerald-300">Server Action</strong> using React 19&apos;s <code className="text-emerald-300">useActionState</code> hook.
        </p>
      </div>

      {/* Success Notification */}
      {state.success && (
        <div className="p-5 rounded-xl border border-emerald-500/40 bg-emerald-950/40 text-emerald-200 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
              ✓
            </div>
            <div>
              <h3 className="font-semibold text-emerald-300">Success!</h3>
              <p className="text-xs text-emerald-300/80">{state.message}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/leads"
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              View All Leads &rarr;
            </Link>
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/60 shadow-xl space-y-6">
        <form action={formAction} className="space-y-6">
          {/* Full Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-slate-200">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="e.g. Maya Lin"
              disabled={isPending}
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                state.errors?.name
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-emerald-500"
              } disabled:opacity-50`}
            />
            {state.errors?.name && (
              <p className="text-xs text-red-400 font-medium">{state.errors.name}</p>
            )}
          </div>

          {/* Email Address Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="e.g. maya@example.com"
              disabled={isPending}
              className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all ${
                state.errors?.email
                  ? "border-red-500/80 focus:border-red-500"
                  : "border-slate-800 focus:border-emerald-500"
              } disabled:opacity-50`}
            />
            {state.errors?.email && (
              <p className="text-xs text-red-400 font-medium">{state.errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <Link
              href="/leads"
              className="text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              &larr; Back to Leads
            </Link>

            <button
              type="submit"
              disabled={isPending}
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-md hover:shadow-emerald-900/30 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing (1s delay)...</span>
                </>
              ) : (
                <span>Submit Lead</span>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Tech Details */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-3 text-sm text-slate-400">
        <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Server Action Execution Flow
        </h3>
        <ul className="list-disc list-inside space-y-1.5 text-xs text-slate-400">
          <li>Client submits form data directly to <code className="text-slate-200">createLeadAction</code>.</li>
          <li>Server Action validates data, introduces simulated 1-second latency, and writes lead to <code className="text-slate-200">leads.json</code>.</li>
          <li>Calls <code className="text-slate-200">revalidatePath(&apos;/leads&apos;)</code> to purge stale RSC cache without full page reloads.</li>
          <li>Returns form state feedback managed seamlessly by <code className="text-slate-200">useActionState</code>.</li>
        </ul>
      </div>
    </div>
  );
}
