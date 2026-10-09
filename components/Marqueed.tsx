import img from '../assets/down-arrows.png'
import { TAllProducts } from "@/types/types";
import Image from "next/image";
import { FormatToBdFont } from './FormatToBdFont';

const Marqueed = ({ data }: { data: TAllProducts }) => {

    let unitt = ''
    const { nameBn, unit, today, change } = data
    if (unit === "kg") unitt = 'কেজি'
    else if (unit === "litre") unitt = 'লিটার'
    else if (unit === "piece") unitt = 'পিস'
    else unitt = 'ডজন'

    const toBnNumber = FormatToBdFont(today);
    const toBnpct = FormatToBdFont(Math.abs(change.pct));

    return (
        <div className="px-7 text-sm py-2 flex gap-2 border-2 border-slate-100 items-center justify-center">
            {nameBn} {toBnNumber}টাকা/{unitt} {change.dir === 'up' ? <Image alt='' src={img} className='w-5 h-5' /> : "🔺"}{toBnpct}%
        </div>
    );
};

export default Marqueed;