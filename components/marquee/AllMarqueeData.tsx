import { AllData } from "@/dataTerminal/AllData";
import { TAllProducts } from "@/types/types";
import Marqueed from "./Marqueed";
// import 'react-fast-marquee/dist/styles.css'
import Marquee from "react-fast-marquee";

const AllMarqueeData = async () => {

    const allDatas: TAllProducts[] = await AllData()

    return (
        <Marquee speed={100}>
            {allDatas.map((data, a) => <Marqueed data={data} key={a} />)}
        </Marquee>
    );
};

export default AllMarqueeData;