"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Lead } from "@/lib/db";

interface ApiResponse {
  success: boolean;
  data: Lead[];
  count: number;
  timestamp: string;
}

export default function ApiTesterPage(): React.JSX.Element {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"parsed" | "json">("parsed");

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    setError(null);
    const startTime = performance.now();

    try {
      const res = await fetch("/api/leads", {
        cache: "no-store", // ensure fresh fetch for simulation
      });
      setStatusCode(res.status);

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      const data: ApiResponse = await res.json();
      const endTime = performance.now();
      setLatency(Math.round(endTime - startTime));
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch API");
    } finally {
      setLoading(false);
    }
  }, []);

  // Standard useEffect hook simulating client-side / React Native API consumption
  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl border border-indigo-900/40 bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/30 shadow-lg">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-950 text-indigo-400 border border-indigo-800/60">
            <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
            Scenario 3: Route Handlers &amp; External Client Simulation
          </div>
          <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight">
            REST API Tester
          </h1>
          <p className="text-slate-400 text-sm max-w-xl">
            Simulating an external <strong className="text-indigo-300">React Native mobile app</strong> consuming your Next.js backend via <code className="text-indigo-300">useEffect</code> and <code className="text-indigo-300">fetch(&apos;/api/leads&apos;)</code>.
          </p>
        </div>

        <button
          onClick={fetchLeads}
          disabled={loading}
          className="px-4 py-2.5 rounded-xl font-semibold text-sm bg-indigo-600 hover:bg-indigo-500 text-white shadow-md hover:shadow-indigo-900/30 transition-all disabled:opacity-50 flex items-center gap-2 self-start md:self-auto"
        >
          <svg
            className={`w-4 h-4 ${loading ? "animate-spin" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {loading ? "Fetching..." : "Re-fetch /api/leads"}
        </button>
      </div>

      {/* API Console Header Bar */}
      <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 font-mono">
          <span className="px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 font-bold border border-indigo-800/60">
            GET
          </span>
          <span className="text-slate-300 font-medium">/api/leads</span>
        </div>

        <div className="flex items-center gap-4 text-slate-400 font-mono text-xs">
          {statusCode && (
            <span className="flex items-center gap-1.5">
              Status:{" "}
              <span className={`font-bold ${statusCode === 200 ? "text-emerald-400" : "text-red-400"}`}>
                {statusCode} OK
              </span>
            </span>
          )}
          {latency !== null && (
            <span className="flex items-center gap-1.5">
              Latency: <span className="font-bold text-amber-400">{latency} ms</span>
            </span>
          )}
        </div>
      </div>

      {/* Tabs & Content */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("parsed")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "parsed"
                  ? "bg-slate-800 text-indigo-400 border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Parsed UI View ({response?.data.length ?? 0})
            </button>
            <button
              onClick={() => setActiveTab("json")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "json"
                  ? "bg-slate-800 text-indigo-400 border border-slate-700"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Raw JSON Response
            </button>
          </div>

          <Link
            href="/leads/new"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            + Add lead to test real-time API changes
          </Link>
        </div>

        {/* Error Display */}
        {error && (
          <div className="p-4 rounded-xl border border-red-500/40 bg-red-950/40 text-red-300 text-sm">
            ❌ {error}
          </div>
        )}

        {/* Loading Spinner */}
        {loading && !response && (
          <div className="p-12 text-center rounded-2xl border border-slate-800 bg-slate-900/30 space-y-3">
            <div className="inline-block animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
            <p className="text-slate-400 text-sm">Executing client-side fetch(&apos;/api/leads&apos;)...</p>
          </div>
        )}

        {/* Tab 1: Parsed UI Cards */}
        {activeTab === "parsed" && response && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {response.data.map((lead) => (
              <div
                key={lead.id}
                className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-indigo-500/50 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    REST Client Record
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{lead.id}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-100">{lead.name}</h3>
                  <p className="text-slate-400 text-sm font-mono truncate">{lead.email}</p>
                </div>
                <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-500 flex justify-between">
                  <span>Created:</span>
                  <span>{new Date(lead.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Raw JSON Payload Preview */}
        {activeTab === "json" && response && (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs text-indigo-300 overflow-x-auto shadow-inner">
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Tech Architecture Comparison */}
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/30 space-y-3 text-sm text-slate-400">
        <h3 className="text-base font-semibold text-slate-200 flex items-center gap-2">
          <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Why Use Route Handlers?
        </h3>
        <p className="leading-relaxed">
          While <strong className="text-slate-200">Server Components</strong> and <strong className="text-slate-200">Server Actions</strong> handle standard web UI data flow within Next.js, <strong className="text-indigo-300">Route Handlers</strong> (<code className="text-indigo-300">app/api/*/route.ts</code>) provide public standard HTTP REST endpoints. They are ideal for React Native apps, mobile clients, webhooks, third-party integrations, and headless clients.
        </p>
      </div>
    </div>
  );
}
