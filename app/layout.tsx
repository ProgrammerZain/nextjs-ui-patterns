import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Lifecycle Lab",
  description: "Minimalist lab for testing Next.js lifecycle methods and UI patterns",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased`}>
        <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-lg font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
            >
              Lifecycle Lab
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link 
                href="/" 
                className="text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/patients/1" 
                className="text-rose-400 hover:text-rose-300 font-semibold transition-colors"
              >
                Patients Demo
              </Link>
              <Link 
                href="/labs" 
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Labs
              </Link>
              <Link 
                href="/about" 
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
          Next.js Lifecycle Lab &copy; {new Date().getFullYear()} &mdash; Strictly Typed App Router
        </footer>
      </body>
    </html>
  );
}

