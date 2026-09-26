"use client";

import React, { useState, useEffect } from "react";

export default function PatientsTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [quickNote, setQuickNote] = useState<string>("");

  useEffect(() => {
    console.log("Patient Template Mounted (Fresh Form State Created)");
  }, []);

  return (
    <div className="space-y-6">
      {/* Quick Notes Draft Box (State isolated to Template) */}
      <div className="p-5 rounded-xl border border-rose-800/80 bg-rose-950/30 space-y-3">
        <div className="flex items-center justify-between">
          <label
            htmlFor="quick-notes"
            className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2"
          >
            <span>📝</span>
            <span>Quick Notes Draft (Unsaved Doctor Notes)</span>
          </label>
          <span className="text-[11px] text-slate-400 bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800 font-mono">
            State resets automatically on patient route change
          </span>
        </div>

        <textarea
          id="quick-notes"
          value={quickNote}
          onChange={(e) => setQuickNote(e.target.value)}
          placeholder="Type temporary notes here (e.g. 'needs blood test')... When switching to another patient, this form state resets automatically!"
          rows={3}
          className="w-full p-3 text-sm bg-slate-950 border border-slate-800 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors font-sans resize-y"
        />

        <div className="flex items-center justify-between text-xs text-slate-400">
          <div>
            Draft Status:{" "}
            {quickNote.trim() ? (
              <span className="text-amber-400 font-medium">
                Unsaved Draft Active ({quickNote.length} chars)
              </span>
            ) : (
              <span className="text-slate-500">Empty (No Draft)</span>
            )}
          </div>
          {quickNote.trim() && (
            <button
              onClick={() => setQuickNote("")}
              className="text-xs text-slate-400 hover:text-slate-200 underline"
            >
              Clear Draft
            </button>
          )}
        </div>
      </div>

      {/* Render Patient Medical Record Page */}
      <div>{children}</div>
    </div>
  );
}
