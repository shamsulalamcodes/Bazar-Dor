'use client'
import { Button } from "@heroui/react";

const BannerBtn = () => {

    const handleClick = () => {
        document.getElementById('সব-পণ্য')?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div>
            <Button onClick={handleClick} className="mt-5 rounded-lg bg-green-600 text-white shadow-md sm:mt-6">সব পণ্য দেখুন</Button>
        </div>
    );
};

export default BannerBtn;