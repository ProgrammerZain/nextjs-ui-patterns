import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhotoById } from "../../lib/photos";
import { ArrowLeft, MapPin, User, Camera, Share2 } from "lucide-react";

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function FullScreenPhotoPage({
  params,
}: PhotoPageProps): Promise<React.JSX.Element> {
  const { id } = await params;
  const photo = getPhotoById(id);

  // If ID > 3 or photo not found, trigger Next.js notFound()
  if (!photo || Number(id) > 3) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 sm:p-12 space-y-8">
      {/* Header bar */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between">
        <Link
          href="/feed"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-sm font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Photo Feed</span>
        </Link>
        <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/50">
          Full-Screen Route: /photo/{id}
        </span>
      </div>

      {/* Large Full-Screen Photo Display Container */}
      <div className="max-w-5xl mx-auto w-full flex-1 rounded-3xl border border-slate-800/80 bg-slate-900/60 overflow-hidden shadow-2xl flex flex-col">
        <div
          className={`h-[380px] sm:h-[450px] w-full bg-gradient-to-tr ${photo.gradient} p-8 flex flex-col justify-between relative`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-950/70 text-slate-100 border border-white/10 backdrop-blur">
              Photo Record #{photo.id}
            </span>
            <div className="flex items-center gap-2 text-xs font-medium text-white/90 bg-slate-950/50 px-3 py-1 rounded-full backdrop-blur">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{photo.location}</span>
            </div>
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg mb-2">
              {photo.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <User className="w-4 h-4 text-cyan-400" />
              <span>
                Captured by <strong>{photo.author}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-4 bg-slate-950">
          <h2 className="text-lg font-bold text-slate-200">
            Photograph Specifications
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            {photo.description}
          </p>
          <div className="pt-4 flex items-center gap-6 text-xs text-slate-400 border-t border-slate-900">
            <span className="flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-cyan-400" /> 35mm F/1.4 Lens
            </span>
            <span className="flex items-center gap-1.5">
              <Share2 className="w-4 h-4 text-blue-400" /> RAW Master File
            </span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500">
        Standalone Page View &bull; Refreshing or direct navigation loads this full page.
      </div>
    </div>
  );
}
