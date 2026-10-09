import { TAllProducts } from "@/types/types";
import Image from "next/image";

const bn = new Intl.NumberFormat("bn-BD");
const bnPct = new Intl.NumberFormat("bn-BD", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
});

const unitBn: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস",
};

const Card = ({ data }: { data: TAllProducts }) => {
    const { nameBn, unit, image, today, change } = data;
    const isUp = change.dir === "up";

    return (
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:shadow-md sm:p-5">
            {/* Top: image + name */}
            <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:h-14 sm:w-14">
                    {image &&
                        <Image
                            src={image}
                            alt={nameBn}
                            fill
                            sizes="56px"
                            className="object-cover"
                        />
                    }
                </div>
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-slate-900">
                        {nameBn}
                    </h3>
                    <p className="text-xs text-slate-500">
                        {unitBn[unit] ?? unit}
                    </p>
                </div>
            </div>

            {/* Bottom: price + change badge */}
            <div className="mt-4 flex items-end justify-between gap-2">
                <div>
                    <p className="text-xs text-slate-500">আজকের দাম</p>
                    <p className="text-xl font-bold text-slate-900">
                        {bn.format(today)}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                    </p>
                </div>

                <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${isUp
                        ? "bg-red-50 text-red-600"
                        : "bg-green-50 text-green-700"
                        }`}
                >
                    <span aria-hidden="true">{isUp ? "▲" : "▼"}</span>
                    {bnPct.format(Math.abs(change.pct))}%
                </span>
            </div>
        </div>
    );
};

export default Card;