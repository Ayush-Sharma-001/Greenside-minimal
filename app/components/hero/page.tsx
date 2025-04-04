"use client";
import React from 'react';
// import './globals.css';


// bg-gradient-to-r from-black to-green-900
// bg-gradient-to-r from-black via-gray-800 to-black
const Hero: React.FC = () => {
  return (
    <section id='hero' className="
    



bg-gradient-to-r from-black to-green-900
    text-white min-h-screen flex items-end pb-24"
>
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-end justify-between">
        {/* Left Content */}
        <div className="   ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl  leading-tight">
            Begin this journey with us <br />
            and immerse yourself in <br />
            limitless inspiration
          </h1>
        </div>

        {/* Right Content */}
        <div className="mt-8 md:mt-0 ">
          <p className="text-gray-300 mb-6 max-w-sm">
            Join us in crafting a digital experience that truly distinguishes you from others
          </p>
          <button className="
          
         
          
           bg-lime-500
          
          text-black font-medium px-6 py-3  hover:bg-lime-600 transition w-full">
            Our services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;