"use client";

import React, { useState, forwardRef, useImperativeHandle } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ShieldCheck } from "lucide-react";

export interface ModalHandle {
  openModal: () => void;
  closeModal: () => void;
}

interface ModalProps {
  title?: string;
  children?: React.ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { title = "Imperative Accessible Modal", children },
  ref
) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Expose ONLY openModal() and closeModal() methods to parent ref; internal isOpen state remains encapsulated
  useImperativeHandle(
    ref,
    (): ModalHandle => ({
      openModal() {
        setIsOpen(true);
      },
      closeModal() {
        setIsOpen(false);
      },
    }),
    []
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 space-y-6 shadow-2xl shadow-cyan-950/40 relative"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2 text-slate-100 font-bold text-lg">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{title}</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="text-slate-300 text-sm leading-relaxed space-y-3">
              {children || (
                <p>
                  This modal is controlled imperatively from the parent component using <code className="text-cyan-400 font-mono">modalRef.current.openModal()</code>. The internal <code className="text-slate-400 font-mono">isOpen</code> state is completely hidden!
                </p>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Encapsulated Handle</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md shadow-cyan-500/20"
              >
                Close Modal
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default Modal;
