import CategoryHeaderSkeleton from "@/components/skeletons/CategoryHeaderSkeleton";
import { PriceGridSkeleton } from "@/components/skeletons/PriceCardSkeleton";

export default function Loading() {
    return (
        <main className="container mx-auto space-y-4 px-3 py-4 sm:px-4">
            <CategoryHeaderSkeleton />
            <PriceGridSkeleton />
        </main>
    );
}