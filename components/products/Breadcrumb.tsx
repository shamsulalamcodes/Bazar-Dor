import Link from "next/link";

type Crumb = { label: string; href?: string };

const Breadcrumb = ({ items }: { items: Crumb[] }) => (
    <nav className="text-xs text-slate-600 sm:text-sm">
        <ol aria-label="breadcrumb" className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {items.map((c, i) => {
                return <li key={i} className="flex items-center gap-2">
                    {c.href ? (
                        <Link href={c.href} className="hover:text-green-700">
                            {c.label}
                        </Link>
                    ) : (
                        <span className="font-medium text-slate-900" aria-current="page">
                            {c.label}
                        </span>
                    )}
                    {i < items.length - 1 && (
                        <span aria-hidden="true" className="text-slate-400">›</span>
                    )}
                </li>
            })}
        </ol>
    </nav>
);

export default Breadcrumb;