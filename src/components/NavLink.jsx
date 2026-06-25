"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children,className }) => {
    const pathName = usePathname()
    // console.log(pathName)
    const isActive = pathName == href;
    return (
        <div>
            <Link href={href}  className={`${isActive ? "border-b-2 border-pink-500 pb-0.5" : ""}`}>{children}</Link>
        </div>
    );
};

export default NavLink;