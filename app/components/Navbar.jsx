"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`sticky top-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="#home">
                            <span className="text-black font-bold">TK</span><span className="text-blue-500 font-bold ml-1">Group</span>
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="#hero" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Hero</Link>
                            <Link href="#about" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">About</Link>
                            <Link href="#catalog1" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Catalog 1</Link>
                            <Link href="#catalog2" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Catalog 2</Link>
                            <Link href="#contact" className="text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-800 hover:text-blue-500 focus:outline-none focus:text-blue-500"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="#hero" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Hero</Link>
                        <Link href="#about" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">About</Link>
                        <Link href="#catalog1" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Catalog 1</Link>
                        <Link href="#catalog2" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Catalog 2</Link>
                        <Link href="#contact" className="block text-gray-800 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
