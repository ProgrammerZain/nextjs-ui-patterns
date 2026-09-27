"use client";

import React, { useRef } from "react";
import Modal, { ModalHandle } from "@/components/Modal";
import { Sparkles, ExternalLink, Shield, Layers } from "lucide-react";

export default function HomePage(): React.JSX.Element {
  const modalRef = useRef<ModalHandle>(null);

  const handleOpenModal = () => {
    modalRef.current?.openModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.closeModal();
  };

  return (
    <div className="space-y-10 text-center max-w-3xl mx-auto py-12">
      {/* Header Banner */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-400 text-xs font-mono font-semibold border border-cyan-800/60">
          <Sparkles className="w-3.5 h-3.5" />
          <span>React Pattern: forwardRef + useImperativeHandle</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-50 leading-tight">
          Imperative Modal Control
        </h1>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Demonstrating custom accessible modal architecture using React&apos;s <code className="text-cyan-400 font-mono">useImperativeHandle</code> hook. The parent component controls modal visibility imperatively via a ref without exposing internal component state.
        </p>
      </div>

      {/* Trigger Button & Code Snippet Box */}
      <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/50 space-y-6 shadow-xl shadow-cyan-950/10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleOpenModal}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-base flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Open Modal via Ref (openModal)</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-left space-y-2 text-xs font-mono">
          <div className="text-slate-500 flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>Parent Imperative Execution Snippet:</span>
          </div>
          <pre className="text-cyan-300 bg-slate-900/80 p-3 rounded-lg overflow-x-auto">
{`const modalRef = useRef<ModalHandle>(null);

// Triggered by button click:
modalRef.current?.openModal();`}
          </pre>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-t border-slate-800/80 pt-8">
        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <Layers className="w-4 h-4" />
            <span>01. Strict Encapsulation</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            The internal <code className="text-slate-200 font-mono">isOpen</code> state remains completely hidden inside <code className="text-slate-200 font-mono">&lt;Modal&gt;</code>. Only <code className="text-cyan-400 font-mono">openModal()</code> and <code className="text-cyan-400 font-mono">closeModal()</code> are exposed to the parent.
          </p>
        </div>

        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30 space-y-2">
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-1.5">
            <Sparkles className="w-4 h-4" />
            <span>02. Spring Physics Animations</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Framer Motion handles backdrop fade-in and modal body spring scale-in with smooth exit transitions on backdrop click or close.
          </p>
        </div>
      </div>

      {/* Custom Modal Instance with attached Ref */}
      <Modal ref={modalRef} title="Imperative Ref Modal Demo">
        <div className="space-y-3">
          <p>
            This modal was triggered by calling <code className="text-cyan-400 font-mono">modalRef.current?.openModal()</code> from the parent page component.
          </p>
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-400 font-mono">
            Exposed Methods: openModal(), closeModal()
          </div>
          <button
            onClick={handleCloseModal}
            className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors cursor-pointer border border-slate-700"
          >
            Programmatically Call closeModal() via Ref
          </button>
        </div>
      </Modal>
    </div>
  );
}
