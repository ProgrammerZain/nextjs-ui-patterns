import React from "react";
import Link from "next/link";
import { PHOTOS } from "../lib/photos";
import { Camera, Sparkles, ExternalLink, AlertTriangle } from "lucide-react";

export default function PhotoFeedPage(): React.JSX.Element {
  return (
    <div className="space-y-8">
      {/* Feed Header */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 backdrop-blur flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-cyan-500/20">
            <Camera className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-50">
              Interactive Photo Feed
            </h1>
            <p className="text-xs text-slate-400">
              Next.js Intercepting Routes <code className="text-cyan-400 font-mono">(..)photo/[id]</code> Modal Pattern
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/photo/999"
            className="px-3 py-1.5 rounded-lg bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-800/50 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Test Deleted Photo (/photo/999)</span>
          </Link>
        </div>
      </div>

      {/* Instructions Banner */}
      <div className="p-4 rounded-xl border border-cyan-800/60 bg-cyan-950/30 text-xs text-slate-300 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Intercepting Routes Demo:</strong> Click any photo below to open it inside an intercepted Modal over this feed. Refreshing the browser while the modal is open will load the full-screen standalone page!
          </span>
        </div>
      </div>

      {/* Photos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PHOTOS.map((photo) => (
          <Link
            key={photo.id}
            href={`/photo/${photo.id}`}
            className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
          >
            {/* Visual Photo Card Canvas */}
            <div className={`h-52 w-full bg-gradient-to-tr ${photo.gradient} p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-950/70 text-slate-200 border border-white/10 backdrop-blur">
                  ID: #{photo.id}
                </span>
                <span className="w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-white/90 drop-shadow">
                  {photo.location}
                </span>
                <h2 className="text-lg font-bold text-white tracking-tight drop-shadow-md">
                  {photo.title}
                </h2>
              </div>
            </div>

            {/* Card Content Footer */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>By <strong>{photo.author}</strong></span>
              <span className="text-cyan-400 group-hover:translate-x-0.5 transition-transform font-medium">
                View Photo &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
