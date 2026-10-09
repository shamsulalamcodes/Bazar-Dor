"use client";

import { TCategoryProps } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";


const CategoryLink = ({ hr, label }: TCategoryProps) => {
    const pathname = usePathname();
    const isActive = pathname === hr || pathname.startsWith(hr + "/");

    return (
        <Link href={hr} aria-current={isActive ? "page" : undefined} className={`transition-colors ${isActive ? "bg-green-600 ps-5 pe-2 text-white py-2 rounded font-semibold" : "border-transparent hover:text-red-600"}`}>
            {label}
        </Link>
    );
};

export default CategoryLink;