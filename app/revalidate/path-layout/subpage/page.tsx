export default async function PathLayoutSubpage(): Promise<React.JSX.Element> {
  const fetchTimestamp = new Date().toLocaleTimeString();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="text-base font-bold text-slate-100">
          Nested Child Subpage: <code className="text-purple-400 font-mono">/revalidate/path-layout/subpage</code>
        </h2>
        <span className="text-xs font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/60">
          Rendered: {fetchTimestamp}
        </span>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">
        This is a nested child route beneath the layout hierarchy. Because layout revalidation was used with <code className="text-purple-300 font-mono">&apos;layout&apos;</code>, invalidating the parent layout path also invalidates this child subpage automatically!
      </p>
    </div>
  );
}
