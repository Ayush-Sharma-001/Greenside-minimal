"use client";

import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);

      if (window.innerWidth < 768) {
        setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-24 py-2 md:py-4 transition-all duration-300
        ${isScrolled ? "bg-black" : "bg-transparent"}
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        text-[#FFFBDF]`}
      >
        <div className="container mx-auto flex items-center justify-between py-2">
          {/* Logo */}
          <div className="text-xl font-bold cursor-pointer">
            <a href="#hero">BORINGDESIGNER/</a>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex md:space-x-10 lg:space-x-16 xl:space-x-20 text-sm font-medium text-[#FFFBDF]">
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="#about-me">About Me</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="#process">Process</a>
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Hamburger */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none" onClick={toggleMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (OUTSIDE nav!) */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black text-[#FFFBDF]transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-10 right-10 text-gray-400 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="h-full w-full flex flex-col justify-center space-y-5 p-20 text-3xl">
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="#about-me" onClick={toggleMobileMenu}>
            About Me
            </a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="#skills" onClick={toggleMobileMenu}>
            Skills
            </a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="#projects" onClick={toggleMobileMenu}>
           Projects
            </a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="#process" onClick={toggleMobileMenu}>
            Process
            </a>
          </li>
          <li className="hover:text-gray-400 cursor-pointer">
            <a href="#contact" onClick={toggleMobileMenu}>
            Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Overlay (also outside nav!) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMobileMenu}></div>
      )}
    </>
  );
};

export default Navbar;
