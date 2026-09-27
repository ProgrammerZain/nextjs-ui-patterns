export default async function PathLayoutMainPage(): Promise<React.JSX.Element> {
  const fetchTimestamp = new Date().toLocaleTimeString();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="text-base font-bold text-slate-100">
          Parent Page: <code className="text-purple-400 font-mono">/revalidate/path-layout</code>
        </h2>
        <span className="text-xs font-mono text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/60">
          Rendered: {fetchTimestamp}
        </span>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed">
        This is the main parent route inside the layout tree. When <code className="text-purple-300 font-mono">revalidatePath(&apos;/revalidate/path-layout&apos;, &apos;layout&apos;)</code> is called, both this page AND the child subpage are invalidated simultaneously.
      </p>
    </div>
  );
}
