'use client'
import imglogo from '../assets/logo-icon.png'
import { Button, Link } from "@heroui/react";
import Image from "next/image";

export default function Navbar() {

    const date = new Date().toLocaleDateString('bn-BD', { dateStyle: 'full' })

    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator">
            <div className="flex py-2 justify-between items-center container mx-auto">

                <div className="flex gap-2">
                    <div className="bg-green-700 rounded-lg p-3">
                        <Image src={imglogo} alt='logo' className='w-7 h-7' />
                    </div>
                    <div className="">
                        <p className='font-bold'>বাজার দর</p>
                        <p className='font-light text-sm text-slate-500'>{date}</p>
                    </div>
                </div>

                <div className="font-semibold">
                    <Button className='bg-white text-black'>সাইন ইন</Button>
                    <Button className='bg-green-700 rounded-lg'>সাইন আপ</Button>
                </div>

            </div>
        </nav>
    );
}