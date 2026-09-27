import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeProvider";

interface AppData {
  app: {
    name: string;
    version: string;
    environment: string;
  };
  user: {
    name: string;
    email: string;
    role: string;
    preferences: {
      notifications: boolean;
      autoSave: boolean;
      defaultTheme: string;
    };
  };
  settings: {
    apiEndpoint: string;
    timeoutMs: number;
    maxRetries: number;
  };
}

export default async function SettingsPage(): Promise<React.JSX.Element> {
  // Read data.json directly from disk in this Server Component
  const filePath = path.join(process.cwd(), "data.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const data: AppData = JSON.parse(fileContent);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-mono font-medium mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>React Server Component (RSC)</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-50">
            Application Settings
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Fetched directly on Node.js server from <code className="text-cyan-400 font-mono">data.json</code>
          </p>
        </div>

        {/* Client Theme Toggle rendered inside RSC */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/"
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
          >
            &larr; Back Home
          </Link>
        </div>
      </div>

      {/* Grid of Settings Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Profile Card */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-cyan-400">👤</span> User Profile
          </h2>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Name:</span>
              <span className="text-slate-200 font-semibold">{data.user.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Email:</span>
              <span className="text-cyan-400">{data.user.email}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Role:</span>
              <span className="text-slate-200">{data.user.role}</span>
            </div>
          </div>
        </div>

        {/* User Preferences Card */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-cyan-400">⚙️</span> Preferences
          </h2>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Notifications:</span>
              <span className={data.user.preferences.notifications ? "text-emerald-400" : "text-rose-400"}>
                {data.user.preferences.notifications ? "Enabled" : "Disabled"}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Auto Save:</span>
              <span className={data.user.preferences.autoSave ? "text-emerald-400" : "text-rose-400"}>
                {data.user.preferences.autoSave ? "Enabled" : "Disabled"}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-800/50">
              <span className="text-slate-400">Default Theme:</span>
              <span className="text-amber-400">{data.user.preferences.defaultTheme}</span>
            </div>
          </div>
        </div>

        {/* App System Info */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4 md:col-span-2">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-3">
            <span className="text-cyan-400">🚀</span> System Architecture &amp; Config
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <div className="text-slate-400">App Name</div>
              <div className="text-slate-100 font-bold mt-1">{data.app.name}</div>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <div className="text-slate-400">API Endpoint</div>
              <div className="text-cyan-400 font-bold mt-1 truncate">{data.settings.apiEndpoint}</div>
            </div>
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
              <div className="text-slate-400">Environment</div>
              <div className="text-emerald-400 font-bold mt-1 uppercase">{data.app.environment}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
