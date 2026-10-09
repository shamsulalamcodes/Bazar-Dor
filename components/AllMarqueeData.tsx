import { AllData } from "@/dataTerminal/AllData";
import Marqueed from "./Marquee";

// "id": 1,
//     "slug": "sorno-machi-chal",
//     "nameBn": "স্বর্ণমাছি চাল",
//     "category": "chal",
//     "categoryNameBn": "চাল",
//     "categoryIcon": "🍚",
//     "unit": "kg",
//     "image": "🍚",
//     "today": 148,
//     "yesterday": 145,
//     "lastWeek": 142,
//     "lastMonth": 138,
//     "change": {
//       "dir": "up",
//       "pct": 2.1
//     },
const MarqueeGo = async () => {

    const allDatas = await AllData()

    return (
        <div>
            {allDatas.map((data, a) => <Marqueed data={data} key={a}>            </Marqueed>)}
        </div>
    );
};

export default MarqueeGo;