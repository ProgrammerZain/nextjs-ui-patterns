import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Layers } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Parallel Routes & Error Boundaries Lab",
  description: "Next.js parallel route slots with independent streaming loading and error boundaries",
};

export default function RootLayout({
  children,
  analytics,
  notifications,
}: Readonly<{
  children: React.ReactNode;
  analytics: React.ReactNode;
  notifications: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased`}>
        {/* Navigation Header */}
        <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent flex items-center gap-2"
            >
              <Layers className="w-5 h-5 text-cyan-400" />
              <span>Parallel Routes Lab</span>
            </Link>
            <div className="flex items-center gap-3 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-full border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Slots: @analytics &bull; @notifications</span>
            </div>
          </div>
        </header>

        {/* Parallel Routes Grid Layout */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8 space-y-6">
          {/* Main User Feed (Children Slot) */}
          <div>{children}</div>

          {/* Parallel Slots Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="flex flex-col">{analytics}</section>
            <section className="flex flex-col">{notifications}</section>
          </div>
        </main>

        <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
          Parallel Routes &bull; Independent Loading &amp; Error Boundaries Demonstration
        </footer>
      </body>
    </html>
  );
}
