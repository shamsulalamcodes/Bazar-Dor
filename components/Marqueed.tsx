import img from '../assets/down-arrows.png'
import { TAllProducts } from "@/types/types";
import Image from "next/image";

const Marqueed = ({ data }: { data: TAllProducts }) => {

    let unitt = ''
    const { nameBn, unit, today, change } = data
    if (unit === "kg") unitt = 'কেজি'
    else if (unit === "litre") unitt = 'লিটার'
    else unitt = 'ডজন'

    const bn = new Intl.NumberFormat("bn-BD");
    const toBnNumber = bn.format(today);
    const toBnpct = bn.format(Math.abs(change.pct));

    return (
        <div className="px-7 py-2 flex gap-2 border-2 border-slate-100 items-center justify-center">
            {nameBn} {toBnNumber}টাকা/{unitt} {change.dir === 'up' ? <Image alt='' src={img} className='w-5 h-5' /> : "🔺"}{toBnpct}
        </div>
    );
};

export default Marqueed;