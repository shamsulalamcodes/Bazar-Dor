import Sk from "./Sk";

const ProductPageSkeleton = () => (
    <main
        className="container mx-auto space-y-4 px-3 py-4 sm:space-y-5 sm:px-4"
        aria-busy="true"
    >
        {/* Breadcrumb */}
        <div className="flex items-center gap-3">
            <Sk className="h-3 w-10" />
            <Sk className="h-3 w-12" />
            <Sk className="h-3 w-24" />
        </div>

        {/* Header card */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm sm:p-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 sm:gap-5">
                <Sk className="h-16 w-16 shrink-0 rounded-2xl sm:h-24 sm:w-24 md:h-24 md:w-24" />
                <div className="space-y-2">
                    <Sk className="h-6 w-40 sm:h-8 sm:w-60" />
                    <Sk className="h-3 w-28" />
                    <Sk className="h-3 w-48" />
                </div>
            </div>

            <div className="flex flex-col items-center gap-2 rounded-2xl bg-slate-100/80 px-6 py-4 md:min-w-40">
                <Sk className="h-3 w-16" />
                <Sk className="h-9 w-14" />
                <Sk className="h-3 w-20" />
                <Sk className="h-3 w-12" />
            </div>
        </div>

        {/* Summary + table */}
        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm sm:p-8">
            <div className="space-y-3">
                <Sk className="h-5 w-32" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="space-y-2 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4"
                        >
                            <Sk className="h-3 w-20" />
                            <Sk className="h-7 w-24" />
                            <Sk className="h-3 w-32" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="space-y-3">
                <Sk className="h-5 w-48" />
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="overflow-x-auto">
                        <div className="min-w-140">
                            <div className="bg-slate-50 px-5 py-3">
                                <Sk className="h-4 w-full" />
                            </div>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="border-t border-slate-100 px-5 py-3"
                                >
                                    <Sk className="h-4 w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
);

export default ProductPageSkeleton;