"use client";

import React, { useId, useState } from "react";
import { Check, Hash, Sparkles } from "lucide-react";

interface LabeledInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
}

export default function LabeledInput({
  label,
  type = "text",
  placeholder = "",
  helperText,
  required = false,
}: LabeledInputProps): React.JSX.Element {
  // Generate a unique, SSR-safe accessibility ID for binding label and input
  const id = useId();
  const [value, setValue] = useState<string>("");

  return (
    <div className="space-y-2 text-left">
      <div className="flex items-center justify-between">
        {/* Label linked via htmlFor */}
        <label
          htmlFor={id}
          className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
        >
          <span>{label}</span>
          {required && <span className="text-rose-400">*</span>}
        </label>

        {/* Display generated useId string for inspection */}
        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50 flex items-center gap-1">
          <Hash className="w-3 h-3" />
          <span>useId: <strong className="text-slate-100">{id}</strong></span>
        </span>
      </div>

      <div className="relative">
        {/* Input bound via id */}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-slate-950 text-slate-100 placeholder-slate-500 text-sm px-4 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors font-sans"
        />
        {value.trim() && (
          <Check className="w-4 h-4 text-emerald-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
        )}
      </div>

      {helperText && (
        <p className="text-[11px] text-slate-400 leading-snug">
          {helperText}
        </p>
      )}
    </div>
  );
}
