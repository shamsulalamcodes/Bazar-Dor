import { Chip } from '@heroui/react';
import img from '../assets/bazar-hero.png'
import { todayDate } from './Today';
import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="container mx-auto px-3 sm:px-4 py-4">
            <div className="flex bg-white flex-col-reverse items-center gap-6 rounded-3xl border border-slate-200 p-5 shadow-sm sm:p-8 md:flex-row md:justify-between md:gap-10 md:p-10">
                <div className="w-full md:max-w-2xl">
                    <Chip
                        size="sm"
                        variant="soft"
                        className="mb-3 px-3 py-1 bg-slate-200 font-semibold text-green-600"
                    >
                        {todayDate}
                    </Chip>

                    <h1 className="text-2xl font-extrabold leading-snug text-slate-900 sm:text-3xl lg:text-4xl">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
                        বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
                    </p>

                    <Link
                        href="/products"
                        className="mt-5 inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-900/20 transition hover:bg-green-800 active:scale-95 sm:mt-6"
                    >
                        সব পণ্য দেখুন
                    </Link>
                </div>

                <Image className='max-w-2xl h-60' alt="Image" src={img} />
            </div>
        </section>
    );
};

export default Banner;