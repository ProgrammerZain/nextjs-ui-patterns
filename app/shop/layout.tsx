"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartCount] = useState<number>(3);
  const pathname = usePathname();

  useEffect(() => {
    console.log("Shop Layout Mounted");
  }, []);

  return (
    <div className="relative min-h-[600px] flex flex-col space-y-6">
      {/* Navigation Header & Cart Toggle */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 backdrop-blur flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link
            href="/shop/shoes"
            className="text-lg font-bold text-slate-100 tracking-tight hover:text-cyan-400 transition-colors"
          >
            E-Commerce Store
          </Link>
          <nav className="flex items-center gap-3 text-sm">
            <Link
              href="/shop/shoes"
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                pathname === "/shop/shoes"
                  ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Shoes Category
            </Link>
            <Link
              href="/shop/shirts"
              className={`px-3.5 py-1.5 rounded-lg font-medium transition-colors ${
                pathname === "/shop/shirts"
                  ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Shirts Category
            </Link>
          </nav>
        </div>

        {/* Cart Toggle Button */}
        <button
          onClick={() => setIsCartOpen((prev) => !prev)}
          className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2.5 transition-all ${
            isCartOpen
              ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 ring-2 ring-cyan-400"
              : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
          }`}
        >
          <span>🛒 Cart</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-extrabold ${
              isCartOpen
                ? "bg-slate-950 text-cyan-400"
                : "bg-cyan-950 text-cyan-400 border border-cyan-800"
            }`}
          >
            {cartCount} items
          </span>
          <span className="text-xs opacity-80">
            ({isCartOpen ? "Close Drawer" : "Open Drawer"})
          </span>
        </button>
      </div>

      {/* Workspace Area: Catalog + Persistent Cart Drawer */}
      <div className="flex-1 flex gap-6 relative min-h-[450px]">
        {/* Main Product Catalog View */}
        <div className="flex-1">{children}</div>

        {/* Stateful Cart Drawer */}
        {isCartOpen && (
          <aside className="w-80 rounded-xl border border-slate-800 bg-slate-900/90 backdrop-blur p-5 flex flex-col justify-between shrink-0 shadow-2xl shadow-cyan-950/40 animate-in fade-in slide-in-from-right-4 duration-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h2 className="font-bold text-slate-100 flex items-center gap-2">
                  <span>Shopping Cart</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                </h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-slate-100 text-xs px-2 py-1 rounded bg-slate-800/80"
                >
                  &times; Close
                </button>
              </div>

              <div className="text-xs text-emerald-400 bg-emerald-950/50 p-2.5 rounded-lg border border-emerald-800/50 leading-relaxed">
                ⚡ <strong>Drawer State Preserved:</strong> Switch between Shoes and Shirts using the menu links — this cart drawer stays open!
              </div>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-slate-200">
                      Urban Cushion Runner
                    </div>
                    <div className="text-slate-500">Size 10 &bull; Stealth Black</div>
                  </div>
                  <div className="font-mono text-cyan-400 font-bold">$129.00</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-slate-200">
                      Classic Linen Button-Down
                    </div>
                    <div className="text-slate-500">Medium &bull; Olive</div>
                  </div>
                  <div className="font-mono text-cyan-400 font-bold">$65.00</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-slate-200">
                      Performance Tech Tee
                    </div>
                    <div className="text-slate-500">Large &bull; Slate Grey</div>
                  </div>
                  <div className="font-mono text-cyan-400 font-bold">$45.00</div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-3 mt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Total:</span>
                <span className="font-mono font-bold text-slate-50 text-base">
                  $239.00
                </span>
              </div>
              <button className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors">
                Checkout ($239.00)
              </button>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
