import { AllData } from "@/dataTerminal/AllData";
import { TAllProducts } from "@/types/types";
import Card from "./Card";

type Props = {
    dir: "up" | "down";
    title: string;
};

const ParentCard = async ({ dir, title }: Props) => {
    const all: TAllProducts[] = await AllData();
    const items = all.filter((p) => p.change.dir === dir);

    if (items.length === 0) return null;

    return (
        <section className="container mx-auto px-3 py-4 sm:px-4">
            <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-slate-900 sm:text-xl">
                <span
                    aria-hidden="true"
                    className={`text-sm ${dir === "up" ? "text-red-600" : "text-green-600"}`}
                >
                    {dir === "up" ? "▲" : "▼"}
                </span>
                {title}
            </h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {items.map((p, i) => (
                    <Card key={i} data={p} />
                ))}
            </div>
        </section>
    );
};

export default ParentCard;