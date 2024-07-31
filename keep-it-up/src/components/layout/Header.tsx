import React, { useState } from 'react';
import { Bars4Icon } from '@heroicons/react/24/solid';
import SideMenu from '@/components/layout/SideMenu';

export default function Header(props: { className: string }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={props.className}>
            <Bars4Icon
                className="h-14 transform cursor-pointer self-center fill-white transition-transform hover:scale-90 hover:fill-pink md:h-10"
                onClick={toggleMenu}
            />
            <SideMenu isOpen={menuOpen} closeMenu={toggleMenu} />
        </div>
    );
}
