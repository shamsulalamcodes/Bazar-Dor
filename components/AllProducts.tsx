import { AllData } from "@/dataTerminal/AllData";
import { TAllProducts } from "@/types/types";
import Card from "./shared/Card";
import { FormatToBdFont } from "../shortcut/FormatToBdFont";


const AllProducts = async () => {
    const allProduct: TAllProducts[] = await AllData();

    if (allProduct.length === 0) return null;

    const nimber = FormatToBdFont(allProduct.length);

    return (
        <section id="সব-পণ্য" className="container mx-auto px-3 py-4 sm:px-4">
            <h2 className="mt-3 flex items-center gap-2 text-lg font-bold text-slate-900 sm:text-xl">সব পণ্য</h2>
            <p className="pb-5 text-slate-500">মোট {nimber}টি পণ্য দেখানো হচ্ছে</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {allProduct.map((p, i) => (
                    <Card key={i} data={p} />
                ))}
            </div>
        </section>
    );
};

export default AllProducts;