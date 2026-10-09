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
            className={`pb-1 border-b-2 transition-colors ${isActive
                    ? "border-red-600 text-red-600 font-semibold"
                    : "border-transparent hover:text-red-600"
                }`}
        >
            {label}
        </Link>
    );
};

export default CategoryLink;