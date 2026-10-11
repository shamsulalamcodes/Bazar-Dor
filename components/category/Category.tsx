"use client";

import { TCategoryProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


const CategoryLink = ({ hr, label, icon }: TCategoryProps) => {
    const pathname = usePathname();
    const isActive = pathname === hr || pathname.startsWith(hr + "/");

    return (
        <Link href={hr} aria-current={isActive ? "page" : undefined} className={`py-2 sm:ps-5 sm:pe-2 ${isActive ? "bg-green-600 text-center text-white rounded font-semibold" : "border-transparent hover:text-red-600"}`}>
            {icon} {label}
        </Link>
    );
};

export default CategoryLink;