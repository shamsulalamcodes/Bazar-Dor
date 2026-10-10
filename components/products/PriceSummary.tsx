import { FormatToBdFont } from "@/shortcut/FormatToBdFont";
import { TMarketPrice } from "@/types/types";

type Props = { markets: TMarketPrice[]; unitLabel: string };

const PriceSummary = ({ markets, unitLabel }: Props) => {
    if (!markets || markets?.length === 0) return null;

    const min = Math.min(...markets?.map((m) => m.min));
    const max = Math.max(...markets?.map((m) => m.max));
    const avg = Math.round(
        markets.reduce((s, m) => s + (m.min + m.max) / 2, 0) / markets.length
    );

    const minMarket = markets.find((m) => m.min === min);
    const maxMarket = markets.find((m) => m.max === max);

    const stats = [
        { label: "সর্বনিম্ন দাম", value: min, note: minMarket?.market ?? "সবচেয়ে কম দামের বাজার", color: "text-green-700" },
        { label: "সর্বাধিক দাম", value: max, note: maxMarket?.market ?? "সবচেয়ে বেশি দামের বাজার", color: "text-red-600" },
        { label: "গড় দাম", value: avg, note: `প্রতি ${unitLabel}-এর হিসাবে`, color: "text-green-700" },
    ];

    return (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-slate-200 bg-white/70 px-5 py-4">
                    <p className="text-xs text-slate-600">{s.label}</p>
                    <p className={`mt-1 text-2xl font-extrabold ${s.color}`}>
                        {FormatToBdFont(s.value)} <span className="text-sm font-medium">টাকা</span>
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{s.note}</p>
                </div>
            ))}
        </div>
    );
};

export default PriceSummary;