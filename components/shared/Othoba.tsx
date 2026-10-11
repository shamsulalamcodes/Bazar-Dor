const Othoba = ({ text = "অথবা" }: { text?: string }) => (
    <div className="flex items-center gap-4 py-2" role="separator" aria-label={text}>
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-sm text-slate-700">{text}</span>
        <span className="h-px flex-1 bg-slate-200" />
    </div>
);

export default Othoba;