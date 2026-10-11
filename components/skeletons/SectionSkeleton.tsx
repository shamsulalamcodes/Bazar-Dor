
import { PriceGridSkeleton } from "./PriceCardSkeleton";
import Sk from "./Sk";

const SectionSkeleton = ({ count = 6 }: { count?: number }) => (
    <section
        className="container mx-auto mt-5 px-3 py-4 sm:px-4"
        aria-busy="true"
    >
        <Sk className="mb-3 h-6 w-40 sm:h-7" />
        <PriceGridSkeleton count={count} />
    </section>
);

export default SectionSkeleton;