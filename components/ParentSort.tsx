'use client'
import { useState } from 'react';
import { Sort } from './Sort';
import { TAllProducts } from '@/types/types';
import Card from './Card';

const ParentSort = ({ dat }: { dat: TAllProducts[] }) => {

    const [sort, setSort] = useState<"default" | "priceAsc" | "priceDesc">("default")
    const sortArr = [...dat]
    if (sort === 'priceAsc') sortArr.sort((a, b) => b.today - a.today)
    else if (sort === 'priceDesc') sortArr.sort((a, b) => a.today - b.today)
    else sortArr

    return (
        <div>
            <div className="mb-5 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm sm:px-8 sm:py-5">
                <Sort value={sort} onChange={setSort} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {sortArr.map((ct, i) => <Card key={i} data={ct} />)}
            </div>
        </div>
    );
};

export default ParentSort;