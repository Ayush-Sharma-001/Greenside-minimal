"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#FFFBDF] text-black h-full py-12 px-6 md:px-12 lg:px-24 flex flex-col justify-evenly">
      <div className="container mx-auto space-y-12 ">
        {/* Top Section */}
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center border-b border-gray-300 pb-8">
          <p className="text-center text-xl md:text-left text-gray-600 mb-8 md:mb-0">
            Stay updated on our latest developments, insights, and opportunities by following us on <span className='font-semibold text-[#FD4A6C]'>LinkedIn</span>.
          </p>
          <button className="border border-green-900 px-8 py-2 w-full md:w-2/3 hover:bg-[#FD4A6C] hover:text-white transition">
            Let&#39;s talk
          </button>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-12 md:py-30 py-0 md:mb-0">
          {/* Logo */}
          <div className="col-span-3 ">
            <h3 className="text-3xl font-bold">BORINGDESIGNER/</h3>
          </div>

          {/* Company Links */}
          <div className="col-span-1 md:text-right text-left">
            <h4 className="text-xl text-[#fd4a6bb7] font-semibold  mb-4">Company</h4>
            <ul className="space-y-2">
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
          </div>

          {/* Social Links */}
          <div className="col-span-1 md:text-right text-left">
            <h4 className="text-xl text-[#fd4a6bb7] font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li className="text-gray-700 hover:text-black cursor-pointer">Instagram</li>
              <li className="text-gray-700 hover:text-black cursor-pointer">Facebook</li>
              <li className="text-gray-700 hover:text-black cursor-pointer">X</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container h-full mx-auto flex flex-col md:flex-row justify-between items-center text-sm     text-gray-600">
        <p className="text-center md:text-left m-4 mt-6 md:mb-0">
          © 2025 developed by <a href="https://www.linkedin.com/in/ayush--sharma--?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Ayush Sharma</a> for  <span className="text-[#fd4a6bb7]">BORINGDESIGNER </span>. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-black">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-black">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;