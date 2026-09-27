"use client";

import { useState, useRef, useLayoutEffect, ReactNode } from "react";

interface HoverBoxProps {
  children?: ReactNode;
  title?: string;
}

export function HoverBox({
  children,
  title = "Hoverable Element",
}: HoverBoxProps): React.JSX.Element {
  const targetRef = useRef<HTMLDivElement>(null);
  const [targetWidth, setTargetWidth] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [contentSize, setContentSize] = useState<"sm" | "md" | "lg">("md");

  // useLayoutEffect runs synchronously after DOM mutations but BEFORE the browser paints.
  // This guarantees the tooltip position is calculated without any visible layout flicker (FOUC).
  useLayoutEffect(() => {
    if (targetRef.current) {
      const width = targetRef.current.getBoundingClientRect().width;
      setTargetWidth(width);
    }
  }, [contentSize, children]);

  // Recalculate on window resize for responsiveness
  useLayoutEffect(() => {
    const handleResize = () => {
      if (targetRef.current) {
        setTargetWidth(targetRef.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Text content based on selected size option
  const contentText = {
    sm: "Short Label",
    md: "Interactive Dynamic Target Box",
    lg: "Extended Extra Wide Dynamic Container with Dynamic Content",
  }[contentSize];

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-900/60 border border-slate-800 rounded-2xl shadow-xl max-w-xl mx-auto backdrop-blur-md">
      {/* Interactive Controls */}
      <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Resize Container Content:
        </span>
        <div className="flex gap-2">
          {(["sm", "md", "lg"] as const).map((size) => (
            <button
              key={size}
              onClick={() => setContentSize(size)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                contentSize === size
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Target Container Wrapper with Relative Positioning for Tooltip */}
      <div className="relative inline-block my-12">
        {/* Dynamic Centered Tooltip */}
        {targetWidth !== null && (
          <div
            style={{
              left: `${targetWidth / 2}px`,
            }}
            className={`absolute -top-14 -translate-x-1/2 transition-opacity duration-200 pointer-events-none z-20 whitespace-nowrap ${
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative bg-cyan-950 border border-cyan-500/50 text-cyan-200 text-xs font-mono font-medium px-3 py-1.5 rounded-lg shadow-xl shadow-cyan-950/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>
                Center Offset: <strong>{(targetWidth / 2).toFixed(1)}px</strong>
              </span>
              <span className="text-slate-400">|</span>
              <span>
                Width: <strong>{targetWidth.toFixed(1)}px</strong>
              </span>
            </div>
            {/* Tooltip Arrow */}
            <div
              style={{ left: "50%" }}
              className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-cyan-950 border-r border-b border-cyan-500/50 rotate-45"
            />
          </div>
        )}

        {/* Target Div measured by useRef & useLayoutEffect */}
        <div
          ref={targetRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`px-6 py-4 rounded-xl border transition-all duration-300 cursor-pointer select-none text-center font-medium ${
            isHovered
              ? "bg-gradient-to-r from-cyan-950 via-slate-900 to-cyan-950 border-cyan-400 shadow-lg shadow-cyan-500/20 text-cyan-100 scale-[1.02]"
              : "bg-slate-800/80 border-slate-700 text-slate-200 hover:border-slate-600"
          }`}
        >
          {children || contentText}
        </div>
      </div>

      {/* Info Badge displaying measured width */}
      <div className="w-full mt-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400">Measured Ref Width (`getBoundingClientRect().width`):</span>
        <span className="text-cyan-400 font-bold bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-800/60">
          {targetWidth !== null ? `${targetWidth.toFixed(2)}px` : "Measuring..."}
        </span>
      </div>
    </div>
  );
}
