import { AllData } from "@/dataTerminal/AllData";
import { TAllProducts } from "@/types/types";
import Card from "./Card";

type TProps = { dir?: "up" | "down" | 'flat', title?: string };

const ParentCard = async ({ dir, title }: TProps) => {

    const all: TAllProducts[] = await AllData();
    const items = all.filter(p => p.change.dir === dir);

    if (items.length === 0) return null;

    return (
        <section className="container mt-5 mx-auto px-3 py-4 sm:px-4">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 sm:text-xl">
                <span className={`text-sm ${dir === "up" ? "text-red-600" : dir === 'down' ? "text-green-600" : 'text-slate-500'}`}>
                    {dir === "up" ? "▲" : dir === 'down' ? "▼" : "-"}
                </span>
                {title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {items.slice(0, 6).map((p, i) => (
                    <Card key={i} data={p} />
                ))}
            </div>
        </section>
    );
};

export default ParentCard;