"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 text-black" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link className=" ml-6 md:ml-1" href="#home">
              <span className="text-black  font-bold">TK</span>
              <span className="text-[#9e795c] font-bold ml-1">Group</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="#about"
                className="text-gray-800 hover:text-[#9e795c] px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="#catalogs"
                className="text-gray-800 hover:text-[#9e795c] px-3 py-2 rounded-md text-sm font-medium"
              >
                Catalogs
              </Link>
              <Link
                href="#contact"
                className="text-gray-800 hover:text-[#9e795c] px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#9e795c] focus:outline-none focus:text-[#9e795c]"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#about"
              className="block text-gray-800 ml-6 hover:text-[#9e795c] px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="#catalogs"
              className="block text-gray-800 ml-6 hover:text-[#9e795c] px-3 py-2 rounded-md text-base font-medium"
            >
              Catalogs
            </Link>
            <Link
              href="#contact"
              className="block text-gray-800 ml-6 hover:text-[#9e795c] px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
