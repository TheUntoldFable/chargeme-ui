'use client'
import React from 'react'

interface NavigationListItemProps {
    isActive: boolean,
    link: string,
    text: string,
    isMobile?: boolean
}

const NavigationListItem: React.FC<NavigationListItemProps> = ({ isActive, link, text, isMobile }) => {
    return (
        <>
            {!isMobile ?
                <li className={`${isActive ? 'bg-gray-dark px-7' : 'px-7'}`}>
                    <a href={link} className="text-white text-l py-7 block font-medium tracking-widest">
                        {text}
                    </a>
                </li>
                : <li className={`${isActive ? 'bg-gray-dark px-5' : 'px-5'}`}>
                    <a href={link} className="text-white text-base py-6 block font-medium tracking-widest">
                        {text}
                    </a>
                </li>
            }
        </>
    )
}

export default NavigationListItem;
