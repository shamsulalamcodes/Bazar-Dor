"use client";

import { Button, Dropdown, toast } from "@heroui/react";
import imglogo from '../../assets/logo-icon.png';
import Image from "next/image";
import { todayDate } from '../../shortcut/Today';
import Link from 'next/link';
import { authClient } from '@/app/lib/auth-client';
import img from '../../assets/logo-icon.png'
import { redirect } from "next/navigation";

export default function Navbar() {

    const { data } = authClient.useSession()

    const signOutt = async () => {
        await authClient.signOut()
        toast.danger('Successfully signed out!!');
        redirect('/signIn')
    }
    const avater = data?.user?.image ?? img;

    return (
        <div className="max-w-7xl mx-auto w-full border-b border-separator">
            <div className="flex py-2 justify-between items-center">

                <Link href='/' className="flex gap-2">
                    <div className="bg-green-600 rounded-lg p-3">
                        <Image src={imglogo} alt='logo' className='w-7 h-7' />
                    </div>
                    <div className="">
                        <p className='font-bold'>বাজার দর</p>
                        <p className='font-light text-sm text-slate-500'>{todayDate}</p>
                    </div>
                </Link>

                {data?.session?.token ?
                    <Dropdown>
                        <Button aria-label="Menu" className=' bg-white'>
                            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                                <Image width={40} height={40} className="rounded-lg" src={avater} alt={data?.user?.name} />
                                <p className="text-black font-bold">{data?.user?.name} ▾</p>
                            </div>
                        </Button>
                        <Dropdown.Popover className='p-3'>
                            <div className="">
                                <p className="text-xl">{data?.user?.name}</p>
                                <p className="text-slate-600">{data?.user?.email}</p>
                            </div>
                            <Button className='bg-white text-black'>👤 আমার প্রোফাইল</Button>
                            <Button onClick={signOutt} className='bg-white text-black'>↩ সাইন আউট</Button>
                        </Dropdown.Popover>
                    </Dropdown>
                    :
                    <div className="flex gap-2">
                        <Link href='/signIn'>
                            <Button className='hover:text-green-600 text-black bg-white rounded-lg'>সাইন ইন</Button>
                        </Link>
                        <Link href='/signUp'>
                            <Button className='hover:text-red-600 bg-green-600 rounded-lg'>সাইন আপ</Button>
                        </Link>
                    </div>}

            </div>
        </div>
    );
}