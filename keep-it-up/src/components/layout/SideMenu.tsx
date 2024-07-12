import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Logo from '../../../public/icons/logo/logo-initials-only.svg';

export default function SideMenu({ isOpen, closeMenu }) {
    return (
        <div
            className={`fixed left-0 top-0 flex h-full w-full transform flex-col bg-primaryRed text-white md:w-1/3 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <div className="flex h-full flex-col items-center justify-start">
                <Logo className="m-20 h-28 fill-white stroke-white md:m-10 md:h-16" />
            </div>
            <nav className="-4xl flex flex-col items-center justify-center space-y-8 md:space-y-6 md:text-xl">
                <Link href={'/habit-tracker/dashboard'}>Dashboard</Link>
                <Link href={'/habit-tracker/statistics'}>Statistics</Link>
                <Link href={'/habit-tracker/settings'}>Settings</Link>
                <Link href={'/habit-tracker/archive'}>Archive</Link>
                <Link href={'/guest/about'}>About</Link>
                <Link href={'/guest/contact'}>Contact</Link>
            </nav>
            <div className="m-14 flex h-full items-end justify-center">
                <XMarkIcon
                    onClick={closeMenu}
                    className="shrink-10 h-16 transform cursor-pointer justify-self-center fill-white align-middle transition-transform hover:scale-90 hover:fill-pink md:h-8"
                />
            </div>
        </div>
    );
}
