'use client'
import imglogo from '../assets/logo-icon.png'
import { Button } from "@heroui/react";
import Image from "next/image";
import { todayDate } from './Today';

export default function Navbar() {

    return (
        <div className="max-w-7xl mx-auto w-full border-b border-separator">
            <div className="flex py-2 justify-between items-center">

                <div className="flex gap-2">
                    <div className="bg-green-600 rounded-lg p-3">
                        <Image src={imglogo} alt='logo' className='w-7 h-7' />
                    </div>
                    <div className="">
                        <p className='font-bold'>বাজার দর</p>
                        <p className='font-light text-sm text-slate-500'>{todayDate}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Button className='hover:font-bold text-black bg-white rounded-lg'>সাইন ইন</Button>
                    <Button className='hover:font-bold bg-green-600 rounded-lg'>সাইন আপ</Button>
                </div>

            </div>
        </div>
    );
}