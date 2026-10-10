import AllProducts from "@/components/AllProducts";
import Banner from "@/components/banner/Banner";
import ParentCard from "@/components/shared/ParentCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <ParentCard dir="up" title="আজ দাম বেড়েছে" />
      <ParentCard dir="down" title="আজ দাম কমেছে" />
      <AllProducts />
    </div>
  );
}
