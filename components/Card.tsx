import { TAllProducts } from "@/types/types";
import { FormatToBdFont, FormatToBdFontDigits } from "./FormatToBdFont";

const unitBn: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "প্রতি পিস"
};

const Card = ({ data }: { data: TAllProducts }) => {

    const { nameBn, unit, image, today, change } = data;

    return (
        <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:shadow-md sm:p-5">

            <div className="flex items-center gap-3">
                <div className="relative text-4xl h-24 w-24 shrink-0 overflow-hidden sm:h-14 sm:w-14">{image}</div>
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold text-slate-900">
                        {nameBn}
                    </h3>
                    <p className="text-xs text-slate-500">
                        {unitBn[unit] ?? unit}
                    </p>
                </div>
            </div>


            <div className="mt-4 flex items-end justify-between gap-2">
                <div>
                    <p className="text-xs text-slate-500">আজকের দাম</p>
                    <p className="text-xl font-bold text-slate-900">
                        {FormatToBdFont(today)}{" "}
                        <span className="text-sm font-medium">টাকা</span>
                    </p>
                </div>

                <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${change?.dir === 'up' ? "bg-red-50 text-red-600" : change?.dir === 'down' ? "bg-green-50 text-green-700" : 'text-slate-700 bg-slate-100'}`}>
                    <span>{change?.dir === 'up' ? "▲" : change?.dir === 'down' ? "▼" : '—'}</span>
                    {FormatToBdFontDigits.format(Math.abs(change?.pct))}%
                </span>
            </div>
        </div>
    );
};

export default Card;