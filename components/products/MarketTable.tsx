import { FormatToBdFont, marketAvg } from "@/shortcut/FormatToBdFont";
import { TMarketPrice } from "@/types/types";

const MarketTable = ({ markets }: { markets: TMarketPrice[] }) => (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70">
        {/* scrolls sideways on narrow screens */}
        <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-600">
                    <tr>
                        <th className="px-4 py-3 font-medium sm:px-5">বাজার</th>
                        <th className="px-4 py-3 font-medium sm:px-5">বিভাগ</th>
                        <th className="px-4 py-3 text-right font-medium sm:px-5">সর্বনিম্ন</th>
                        <th className="px-4 py-3 text-right font-medium sm:px-5">সর্বাধিক</th>
                        <th className="px-4 py-3 text-right font-medium sm:px-5">গড়</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {markets?.map((m, i) => (
                        <tr key={i} className="transition-colors hover:bg-green-50/60">
                            <td className="px-4 py-3 text-slate-900 sm:px-5">{m.market}</td>
                            <td className="px-4 py-3 text-slate-700 sm:px-5">{m.division}</td>
                            <td className="px-4 py-3 text-right text-slate-700 sm:px-5">
                                {FormatToBdFont(m.min)} টাকা
                            </td>
                            <td className="px-4 py-3 text-right text-slate-700 sm:px-5">
                                {FormatToBdFont(m.max)} টাকা
                            </td>
                            <td className="px-4 py-3 text-right font-bold text-slate-900 sm:px-5">
                                {FormatToBdFont(marketAvg(m))} টাকা
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default MarketTable;