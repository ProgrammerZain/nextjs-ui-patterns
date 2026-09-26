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
    id: "msg-101",
    sender: "David Chen",
    text: "Welcome to Room B! The socket connection created in layout.tsx is still running continuously.",
    timestamp: "10:16 AM",
  },
  {
    id: "msg-102",
    sender: "Sarah Jenkins",
    text: "Check your developer console logs — 'Connecting to WebSocket server...' was printed only ONCE when you entered the chat layout!",
    timestamp: "10:17 AM",
  },
];

export default function RoomBPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono font-medium border border-emerald-800/50">
            Route: /chat/room-b
          </div>
          <span className="text-xs text-slate-500">Active Channel</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
            <span>#engineering-channel</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Room B live stream. You switched routes without closing or re-opening the WebSocket connection.
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
            href="/chat/room-a"
            className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            &larr; Switch back to Room A (#general)
          </Link>
        </div>
      </div>
    </div>
  );
}
