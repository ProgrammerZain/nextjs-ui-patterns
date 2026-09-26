import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowLeft, Trash2 } from "lucide-react";

export default function PhotoNotFound(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6">
      <div className="max-w-md w-full p-8 rounded-2xl border border-rose-800/80 bg-rose-950/30 text-center space-y-6 shadow-2xl shadow-rose-950/40">
        <div className="w-16 h-16 rounded-full bg-rose-950 border border-rose-800 flex items-center justify-center text-rose-400 mx-auto">
          <Trash2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950 text-rose-400 text-xs font-mono font-medium border border-rose-800/60">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>404 Not Found Boundary</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-50">
            Photo has been deleted
          </h1>
          <p className="text-slate-400 text-xs leading-relaxed">
            The requested photograph ID does not exist or has been permanently removed from the catalog.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/feed"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-rose-500/20"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Photo Feed</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
