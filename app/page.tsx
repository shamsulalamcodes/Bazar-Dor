import Banner from "@/components/Banner";
import ParentCard from "@/components/ParentCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <ParentCard dir="up" title="আজ দাম বেড়েছে" />
      <ParentCard dir="down" title="আজ দাম কমেছে" />
    </div>
  );
}
