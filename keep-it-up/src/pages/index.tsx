// src/pages/index.tsx
import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Logo from '../../public/icons/logo/logo-full-text.svg';
import { clsx } from 'clsx';
import { SignIn } from '@/components/sign-in';

export default function Home() {
    const [scrolled, setScrolled] = useState(false);
    const scrollDiv = useRef<HTMLDivElement | null>(null);

    const buttonScrollThreshold = 20;

    const handleScroll = () => {
        if (scrollDiv?.current?.scrollTop > buttonScrollThreshold) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <div className="flex h-screen overflow-y-hidden bg-primaryRed p-4 md:p-8">
            <Head>
                <title>KeepItUp</title>
                <meta name="description" content="Habit tracker homepage" />
                <link rel="icon" href="/icons/logo/logo-initials-only.svg" />
            </Head>
            <Header className={'relative z-10'} />
            <div
                ref={scrollDiv}
                className="absolute left-0 top-0 flex h-full max-h-full w-full flex-col overflow-y-scroll"
                onScroll={handleScroll}
            >
                <div className="relative min-h-screen w-full items-center justify-center">
                    <div
                        className={`relative h-[calc(100dvh+200px)] w-full lg:h-[calc(100vh+200px)]`}
                    >
                        <div className="sticky top-0 flex h-dvh min-h-0 w-full flex-col items-center justify-center lg:h-screen">
                            <div className="relative flex flex-col items-center">
                                <h1 className="text text-nowrap font-logo text-5xl tracking-wide text-pink-light">
                                    Welcome to
                                </h1>
                                <Logo className="-m-8 h-36 fill-white stroke-white" />
                                <div
                                    className={clsx(
                                        'absolute left-0 right-0 top-full transition duration-200',
                                        {
                                            'translate-y-[125px] opacity-0':
                                                !scrolled,
                                            'translate-y-0 opacity-100':
                                                scrolled,
                                        },
                                    )}
                                >
                                    <div className="flex justify-around p-4">
                                        <SignIn />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
