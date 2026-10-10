import React from 'react';

const Footer = () => {
    return (
        <div className="border-t border-separator max-w-7xl w-full mx-auto">
            <div className='bg-white p-2 sm:p-1 text-black flex  text-center md:flex-row flex-col container mx-auto justify-between py-3'>
                <p className='text-slate-500 text-sm'>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p className='text-slate-500 text-sm'> সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </div>
    );
};

export default Footer;