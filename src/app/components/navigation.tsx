import React from 'react'

export default function Navigation() {
    return (
        <nav className="bg-gray-dark">
            <ul className="flex justify-between items-center max-w-screen-xl mx-auto">
                <li>
                    <a href="/">
                        <img src="/logo.png" width={218} height={57} className="object-cover w-full h-14"/>
                    </a>
                </li>
                <li>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="/" className="text-white text-xl pt-9 pb-9 block font-medium">
                                ABOUT US
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-white text-xl pt-9 pb-9 block font-medium">
                                TECHNOLOGY
                            </a>
                        </li>
                        <li>
                            <a href="/" className="text-white text-xl pt-9 pb-9 block font-medium">
                                THE APP
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="/shop" className="text-white text-xl pt-9 pb-9 block font-medium">
                        SHOP
                    </a>
                </li>
            </ul>
        </nav>
    )
}
