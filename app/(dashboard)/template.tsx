"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Home, LayoutDashboard } from "lucide-react";

export default function DashboardTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  const pathname = usePathname();

  // Generate breadcrumb items dynamically from pathname segments
  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { label, href, isLast: index === segments.length - 1 };
  });

  return (
    <div className="space-y-6">
      {/* Animated Breadcrumbs Container using Framer Motion */}
      <motion.div
        key={pathname}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="p-3.5 rounded-xl border border-cyan-900/60 bg-slate-900/60 backdrop-blur flex items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2 text-xs font-medium overflow-x-auto py-0.5">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors shrink-0"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Root</span>
          </Link>

          {breadcrumbs.map((crumb) => (
            <React.Fragment key={crumb.href}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              {crumb.isLast ? (
                <span className="text-cyan-400 font-semibold font-mono bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/50 shrink-0">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors shrink-0"
                >
                  {crumb.label}
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-cyan-400 font-mono bg-cyan-950/40 px-2.5 py-1 rounded-md border border-cyan-800/40 shrink-0">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Template Animation Active</span>
        </div>
      </motion.div>

      {/* Child Page View */}
      <div>{children}</div>
    </div>
  );
}
