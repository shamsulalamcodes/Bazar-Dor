"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    href: string;
    label: string;
};

const CategoryLink = ({ href, label }: Props) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`transition-colors ${isActive
                ? "bg-green-600 ps-5 pe-2 text-white py-2 rounded font-semibold"
                : "border-transparent hover:text-red-600"
                }`}
        >
            {label}
        </Link>
    );
};

export default CategoryLink;