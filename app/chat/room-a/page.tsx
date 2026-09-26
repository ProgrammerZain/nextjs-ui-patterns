import React from "react";
import Link from "next/link";

interface Message {
  id: string;
  sender: string;
  text: string;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "msg-1",
    sender: "Alex Rivera",
    text: "Welcome to Room A! Testing persistent socket connections across Next.js layout routes.",
    timestamp: "10:14 AM",
  },
  {
    id: "msg-2",
    sender: "Elena Vance",
    text: "Switch to Room B via the tab above — notice the top socket uptime counter doesn't reset!",
    timestamp: "10:15 AM",
  },
];

export default function RoomAPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono font-medium border border-emerald-800/50">
            Route: /chat/room-a
          </div>
          <span className="text-xs text-slate-500">Active Channel</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span>#general-discussion</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Room A live stream. The WebSocket connection was established when entering `/chat` and stays active without re-logging or dropping.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {initialMessages.map((msg) => (
            <div
              key={msg.id}
              className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 flex items-start gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-xs font-bold text-emerald-400 shrink-0">
                {msg.sender.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-slate-200">
                    {msg.sender}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {msg.timestamp}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <Link
            href="/chat/room-b"
            className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Switch to Room B (#engineering) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
