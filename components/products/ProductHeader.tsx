import Image from "next/image";
import { TProductDetail } from "@/types/types";
import { FormatToBdFont, FormatToBdFontDigits, unitPer, unitShort } from "@/shortcut/FormatToBdFont";

const ProductHeader = ({ p }: { p: TProductDetail }) => {
    const isUp = p?.change?.dir === "up";
    const isDown = p?.change?.dir === "down";
    const diff = Math.abs(p?.today - p?.yesterday);

    const word = isUp ? "বেড়েছে" : isDown ? "কমেছে" : "অপরিবর্তিত";
    const color = isUp ? "text-red-600" : isDown ? "text-green-700" : "text-slate-500";
    const symbol = isUp ? "▲" : isDown ? "▼" : "–";

    return (
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm sm:p-8 md:flex-row md:items-center md:justify-between">
            {/* Left: image + text */}
            <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-3xl sm:h-24 sm:w-24 sm:text-5xl md:h-[88px] md:w-[88px]">
                    {p.image}
                </div>

                <div className="min-w-0">
                    <h1 className="text-xl font-extrabold leading-tight text-slate-900 sm:text-3xl">
                        {p.nameBn}
                    </h1>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                        {unitPer[p.unit] ?? p.unit} · {p.categoryNameBn}
                    </p>
                    {diff > 0 && (
                        <p className="mt-2 text-xs text-slate-700 sm:text-sm">
                            গতকালের তুলনায় আজ দাম{" "}
                            <strong className="font-bold text-slate-900">{word}</strong>{" "}
                            · {FormatToBdFont(diff)} টাকা
                        </p>
                    )}
                </div>
            </div>

            {/* Right: today's price box */}
            <div className="flex flex-col items-center rounded-2xl bg-slate-100/80 px-6 py-4 text-center md:min-w-[150px]">
                <span className="text-xs text-slate-600 sm:text-sm">আজকের দাম</span>
                <span className="text-4xl font-extrabold text-slate-900">
                    {FormatToBdFont(p.today)}
                </span>
                <span className="text-xs text-slate-600">
                    টাকা / {unitShort[p.unit] ?? p.unit}
                </span>
                <span className={`mt-1 text-xs font-semibold ${color}`}>
                    {symbol} {FormatToBdFontDigits.format(Math.abs(p?.change?.pct))}%
                </span>
            </div>
        </div>
    );
};

export default ProductHeader;