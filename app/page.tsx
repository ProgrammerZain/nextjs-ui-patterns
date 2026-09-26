import React from "react";
import { Rss, Heart, MessageSquare, Share2 } from "lucide-react";

interface FeedPost {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
}

const mockPosts: FeedPost[] = [
  {
    id: "post-1",
    author: "Sarah Jenkins",
    avatar: "SJ",
    time: "Just now",
    content: "Deploying our new Next.js parallel routes layout architecture! Notice how independent slots handle slow data fetching and error boundaries simultaneously.",
    likes: 24,
    comments: 5,
  },
  {
    id: "post-2",
    author: "Marcus Chen",
    avatar: "MC",
    time: "15 minutes ago",
    content: "React Server Components + Parallel Slots = unmatched user experience. No whole-page blocking spinners!",
    likes: 42,
    comments: 11,
  },
];

export default function UserFeedPage(): React.JSX.Element {
  return (
    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center font-bold">
            <Rss className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-100">Live User Feed</h1>
            <p className="text-xs text-slate-400">
              Main content rendered instantly via standard <code className="text-cyan-400 font-mono">children</code> slot.
            </p>
          </div>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800/50">
          Status: Ready (0ms delay)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
        {mockPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-cyan-900 text-cyan-300 font-bold text-xs flex items-center justify-center border border-cyan-700">
                  {post.avatar}
                </div>
                <span className="text-xs font-semibold text-slate-200">
                  {post.author}
                </span>
              </div>
              <span className="text-[10px] text-slate-500">{post.time}</span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {post.content}
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-900">
              <span className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <Heart className="w-3.5 h-3.5" /> {post.likes}
              </span>
              <span className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5" /> {post.comments}
              </span>
              <span className="flex items-center gap-1 hover:text-cyan-400 cursor-pointer ml-auto">
                <Share2 className="w-3.5 h-3.5" /> Share
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
