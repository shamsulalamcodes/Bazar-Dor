import Sk from "./Sk";

export const PriceCardSkeleton = () => (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm sm:p-5">
        <div className="flex items-center gap-3">
            <Sk className="h-12 w-12 shrink-0 rounded-xl sm:h-14 sm:w-14" />
            <div className="space-y-2">
                <Sk className="h-4 w-28" />
                <Sk className="h-3 w-16" />
            </div>
        </div>

        <div className="mt-4 flex items-end justify-between gap-2">
            <div className="space-y-2">
                <Sk className="h-3 w-16" />
                <Sk className="h-6 w-24" />
            </div>
            <Sk className="h-6 w-16 rounded-full" />
        </div>
    </div>
);

export const PriceGridSkeleton = ({ count = 6 }: { count?: number }) => (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
            <PriceCardSkeleton key={i} />
        ))}
    </div>
);