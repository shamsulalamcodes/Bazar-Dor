import img from '../../assets/down-arrows.png'
import { TAllProducts } from "@/types/types";
import Image from "next/image";
import { FormatToBdFont } from '../../shortcut/FormatToBdFont';
import Link from 'next/link';

const Marqueed = ({ data }: { data: TAllProducts }) => {

    const { nameBn, unit, today, change, id } = data

    let unitt = ''
    if (unit === "kg") unitt = 'কেজি'
    else if (unit === "litre") unitt = 'লিটার'
    else if (unit === "piece") unitt = 'পিস'
    else unitt = 'ডজন'

    const toBnNumber = FormatToBdFont(today);
    const toBnpct = FormatToBdFont(Math.abs(change.pct));

    return (
        <Link href={`/product/${id}`} className="px-7 hover:text-red-600 hover:underline text-sm py-2 flex gap-2 border-2 border-slate-100 items-center justify-center">
            {nameBn} {toBnNumber}টাকা/{unitt} {change.dir === 'up' ? <Image alt='' src={img} className='w-5 h-5' /> : change.dir === 'down' ? "🔺" : <p className='text-gray-600'>—</p>}{toBnpct}%
        </Link>
    );
};

export default Marqueed;