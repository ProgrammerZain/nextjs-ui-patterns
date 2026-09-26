"use client";

import React, { use } from "react";
import { useRouter, notFound } from "next/navigation";
import { getPhotoById } from "../../../lib/photos";
import { X, MapPin, User, Camera, Sparkles } from "lucide-react";

interface InterceptedPhotoProps {
  params: Promise<{ id: string }>;
}

export default function InterceptedPhotoModal({
  params,
}: InterceptedPhotoProps): React.JSX.Element {
  const { id } = use(params);
  const router = useRouter();
  const photo = getPhotoById(id);

  if (!photo || Number(id) > 3) {
    notFound();
  }

  const handleDismiss = () => {
    router.back();
  };

  return (
    <div
      onClick={handleDismiss}
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
    >
      {/* Modal Dialog Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden shadow-2xl space-y-0 relative animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-slate-300 hover:text-white border border-white/10 backdrop-blur flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Header */}
        <div
          className={`h-64 sm:h-72 w-full bg-gradient-to-tr ${photo.gradient} p-6 flex flex-col justify-between relative`}
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-950/70 text-slate-100 border border-white/10 backdrop-blur">
              Modal Overlay &bull; Intercepted Route
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-white/90 mb-1">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{photo.location}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight drop-shadow-md">
              {photo.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4 bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <User className="w-4 h-4 text-cyan-400" />
              <span>
                By <strong className="text-slate-100">{photo.author}</strong>
              </span>
            </div>
            <span className="text-[11px] text-cyan-400 font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> URL: /photo/{photo.id}
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {photo.description}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 text-cyan-400" /> 35mm F/1.4 Lens
            </span>
            <button
              onClick={handleDismiss}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              Close Overlay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
