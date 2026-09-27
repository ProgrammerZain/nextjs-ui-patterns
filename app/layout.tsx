import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Data Architecture Lab",
  description: "Demonstrating Server Fetching, Server Actions, and Route Handlers in Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full dark">
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950`}>
        <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Data Arch Lab
            </Link>
            <nav className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium">
              <Link 
                href="/" 
                className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-all"
              >
                Home
              </Link>
              <Link 
                href="/leads" 
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-all flex items-center gap-1.5"
              >
                <span>Leads</span>
                <span className="hidden md:inline px-1.5 py-0.5 text-[10px] font-semibold bg-cyan-950 text-cyan-400 border border-cyan-800/50 rounded">
                  Server Fetch
                </span>
              </Link>
              <Link 
                href="/leads/new" 
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-emerald-400 hover:bg-slate-900/80 transition-all flex items-center gap-1.5"
              >
                <span>New Lead</span>
                <span className="hidden md:inline px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/50 rounded">
                  Server Action
                </span>
              </Link>
              <Link 
                href="/api-tester" 
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-indigo-400 hover:bg-slate-900/80 transition-all flex items-center gap-1.5"
              >
                <span>API Tester</span>
                <span className="hidden md:inline px-1.5 py-0.5 text-[10px] font-semibold bg-indigo-950 text-indigo-400 border border-indigo-800/50 rounded">
                  Route Handler
                </span>
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-8">
          {children}
        </main>

        <footer className="border-t border-slate-900/90 py-6 text-center text-xs text-slate-500 bg-slate-950/50">
          Next.js Data Architecture Lab &copy; {new Date().getFullYear()} &mdash; Server Components, Server Actions &amp; REST Route Handlers
        </footer>
      </body>
    </html>
  );
}
