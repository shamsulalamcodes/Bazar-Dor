import AllProducts from "@/components/AllProducts";
import Banner from "@/components/banner/Banner";
import ParentCard from "@/components/shared/ParentCard";
import SectionSkeleton from "@/components/skeletons/SectionSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Banner />
      <Suspense fallback={<SectionSkeleton />}>
        <ParentCard dir="up" title="আজ দাম বেড়েছে" />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ParentCard dir="down" title="আজ দাম কমেছে" />
      </Suspense>

      <Suspense fallback={<SectionSkeleton count={9} />}>
        <AllProducts />
      </Suspense>
    </div>
  );
}