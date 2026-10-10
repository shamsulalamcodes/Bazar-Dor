import { TProductDetail } from "@/types/types";
import Breadcrumb from "@/components/products/Breadcrumb";
import ProductHeader from "@/components/products/ProductHeader";
import PriceSummary from "@/components/products/PriceSummary";
import { unitShort } from "@/shortcut/FormatToBdFont";
import MarketTable from "@/components/products/MarketTable";
import { SingleProduct } from "@/dataTerminal/AllData";
import NotFound from "@/app/not-found";


export default async function ProductsDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const p: TProductDetail = await SingleProduct(Number(id));

    if (!p.categoryNameBn) return <NotFound />;

    return (
        <main className="container mx-auto space-y-4 px-3 py-4 sm:space-y-5 sm:px-4">
            <Breadcrumb items={[
                { label: "হোম", href: "/" },
                { label: p.categoryNameBn, href: `/category/${p.category}` },
                { label: p.nameBn },
            ]} />

            <ProductHeader p={p} />

            <section className="space-y-5 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm sm:p-8">
                <div className="space-y-3">
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                        দামের সারসংক্ষেপ
                    </h2>
                    <PriceSummary markets={p.markets} unitLabel={unitShort[p.unit] ?? p.unit} />
                </div>

                <div className="space-y-3">
                    <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                        বাজারভিত্তিক আজকের দাম
                    </h2>
                    <MarketTable markets={p.markets} />
                </div>
            </section>
        </main>
    );
}
