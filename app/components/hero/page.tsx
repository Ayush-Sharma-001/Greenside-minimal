"use client";
import React from 'react';
// import './globals.css';


// bg-gradient-to-r from-black to-green-900
// bg-gradient-to-r from-black via-gray-800 to-black


// pink gradient - to-[#FD4A6C]
// button bg-[#FD4A6C]
// mini-  text-[#fd4a6bb7]
const Hero: React.FC = () => {
  return (
    <section 
      id="hero"
      className=" 
    bg-gradient-to-r from-black to-[#fd4a6bd2]
    text-white w-full flex items-end pb-24 relative overflow-hidden"
    >
      {/* Background texture layer */}
      <div
        className="absolute inset-0 bg-[url('/texture2.jpg')] bg-cover bg-center opacity-10 pointer-events-none z-0"
      ></div>

      {/* Main content layer */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-end justify-between relative space-y-8 md:space-y-0 z-10  md:mt-86 mt-48">
        {/* Left Content */}
        <div>
          <h1 className="text-[2.1rem] md:text-5xl lg:text-6xl text-[#FFFBDF] leading-tight  mt-8 ">
            Build your vision with me <br />
            and explore the art <br />
            of digital creation
          </h1>
        </div>

        {/* Right Content */}
        <div className="mt-8 md:mt-0 ">
          <p className="text-gray-300 mb-6 max-w-sm  ">
            From concept to deployment, I bring ideas to life
            with precision, creativity, and a user-first mindset
          </p>
          <a href="#projects"><button  className="bg-[#fb2e54f3] text-white font-medium px-6 py-3  hover:shadow-lg  hover:bg-[#fb2e54] transition w-full mb-2 md:mb-0 rounded-md shadow-md">
            View My Work
          </button></a>

        </div>
      </div>
    </section>

  );
};

export default Hero;