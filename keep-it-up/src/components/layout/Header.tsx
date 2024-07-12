import React, { useState } from 'react';
import Link from 'next/link';
import { Bars4Icon } from '@heroicons/react/24/solid';
import SideMenu from '@/components/layout/SideMenu';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className="flex h-24 rounded-b-lg bg-primaryRed text-white md:h-20">
                {menuOpen ? (
                    <SideMenu isOpen={menuOpen} closeMenu={toggleMenu} />
                ) : (
                    <Bars4Icon
                        className="m-3 h-14 transform cursor-pointer self-center transition-transform hover:scale-90 hover:fill-pink md:h-10"
                        onClick={toggleMenu}
                    />
                )}
            </div>
            <SideMenu isOpen={menuOpen} closeMenu={toggleMenu} />
        </div>
    );
}
