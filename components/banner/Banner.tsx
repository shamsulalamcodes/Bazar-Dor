import { Chip } from '@heroui/react';
import img from '../../assets/bazar-hero.png'
import { todayDate } from '../../shortcut/Today';
import Image from 'next/image';
import BannerBtn from './BannerBtn';

const Banner = () => {
    return (
        <section className="container mx-auto px-3 py-4">
            <div className="flex bg-white flex-col-reverse items-center gap-6 rounded-3xl border border-slate-200 p-2 shadow-sm sm:p-5 md:flex-row md:justify-between md:gap-10 md:p-8">
                <div className="w-full md:max-w-2xl">
                    <Chip className="mb-3 px-3 py-1 bg-green-100 font-semibold text-green-600">
                        {todayDate}
                    </Chip>

                    <h1 className="text-2xl font-extrabold text-slate-900 sm:text-3xl lg:text-4xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-3 text-slate-600 sm:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                        বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <BannerBtn />
                </div>

                <Image className='md:max-w-2xl h-full' alt="Image" src={img} />
            </div>
        </section>
    );
};

export default Banner;