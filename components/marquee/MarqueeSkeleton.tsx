import Sk from "../skeletons/Sk";


const MarqueeItemSkeleton = () => (
    <div className="flex shrink-0 items-center justify-center gap-3 border-2 border-slate-100 px-7 py-2">
        <Sk className="h-5 w-5 rounded-full" />   {/* emoji */}
        <Sk className="h-4 w-20" />               {/* name */}
        <Sk className="h-4 w-24" />               {/* price/unit */}
        <Sk className="h-4 w-12" />               {/* change % */}
    </div>
);

const MarqueeSkeleton = ({ count = 8 }: { count?: number }) => (
    <div className="flex w-full overflow-hidden" aria-busy="true" aria-label="Loading prices">
        {Array.from({ length: count }).map((_, i) => (
            <MarqueeItemSkeleton key={i} />
        ))}
    </div>
);

export default MarqueeSkeleton;