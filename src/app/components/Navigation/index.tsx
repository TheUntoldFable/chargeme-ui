'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation';
import Image from "next/image";
import NavigationListItem from './NavigationListItem';

const menuRoutes = [
    {
        link: '/en/about-us',
        text: 'ABOUT US'
    },
    {
        link: '/en/technology',
        text: 'TECHNOLOGY'
    },
    {
        link: '/en/demo',
        text: 'DEMO'
    },
<<<<<<< HEAD
=======
    {
        link: '/en/shop',
        text: 'SHOP',
        mobileOnly: true,
    },
>>>>>>> main
]

export function Navigation() {
    const activeRoute = usePathname();
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    return (
        <>
            {/* Desktop navigation */}

            <nav className="bg-gray sm:hidden lg:block px-4">
                <ul className="flex justify-between items-center max-w-screen-xl mx-auto">
                    <li>
                        <a href='/en'>
                            <img src="/logo.png" width={175} height={45} className="object-cover w-full h-10 max-w-44" />
                        </a>
                    </li>
                    <li>
                        <ul className="flex space-x-4">
                            {menuRoutes.map((page, index) => {
                                return <NavigationListItem key={index} {...page} isActive={page.link === activeRoute} />
                            })}
                        </ul>
                    </li>
                    <li className={`${activeRoute === '/en/shop' ? 'bg-gray-dark' : ''}`}>
                        <a href='/en/shop' className="text-white text-l block font-medium tracking-widest flex items-center gap-5">
                            SHOP
                            <Image
                                src="/assets/svg/bag.svg"
                                alt="logo"
                                width={22}
                                height={30} />
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Mobile navigation */}
            <nav className="bg-gray px-4 lg:hidden relative z-50">
                <ul className="flex justify-between items-center max-w-screen-xl mx-auto py-4">
                    <li>
                        <a href='/en'>
                            <img src="/logo.png" width={175} height={45} className="object-cover w-full h-10 max-w-44" />
                        </a>
                    </li>
                    <button className="navbar-burger flex items-center text-white" onClick={() => setOpenMobileMenu((prev) => !prev)}>
                        <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </ul>
                <ul className={`${openMobileMenu ? 'flex absolute bg-gray flex-col top-108 w-full left-0 z-1000' : 'h-0 invisible'}`}>
                    {menuRoutes.map((page, index) => {
                        return <NavigationListItem key={index} {...page} isActive={page.link === activeRoute} isMobile={true} />
                    })}
                    <li className={`${activeRoute === '/en/shop' ? 'bg-gray-dark px-5' : 'px-5'}`}>
                        <a href='/en/shop' className="text-white text-base py-6 block font-medium tracking-widest flex items-start gap-2">
                            SHOP
                            <Image
                                src="/assets/svg/bag.svg"
                                alt="logo"
                                width={17}
                                height={26} />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
