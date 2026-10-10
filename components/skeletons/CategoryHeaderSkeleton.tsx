import Sk from "./Sk";

const CategoryHeaderSkeleton = () => (
    <div className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm sm:px-8 sm:py-5">
        <Sk className="h-6 w-24 sm:h-7" />
        <Sk className="mt-2 h-3 w-48 sm:h-4" />
    </div>
);

export default CategoryHeaderSkeleton;