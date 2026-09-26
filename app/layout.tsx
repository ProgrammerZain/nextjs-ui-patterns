import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Lifecycle Lab",
  description: "Minimalist lab for testing Next.js lifecycle methods and route groups",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
