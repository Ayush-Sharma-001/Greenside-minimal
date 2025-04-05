"use client";
import React from "react";


const CaseStudies: React.FC = () => {
  return (
    <section id="projects" className="bg-[#FFFBDF] lg:h-screen text-black flex items-center py-16  md:px-12  lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  items-center">
        {/* Left Section: Case List */}
        <div className="flex flex-col lg:h-screen justify-between  md:py-24  px-6 col-span-1   ">
          <h3 className="text-md font-medium tracking-widest text-[#FD4A6C] uppercase mb-24 md:mb-6 ">
          Projects
          </h3>
          <ul className="space-y-4">
            <li className="text-[#FD4A6C] font-medium flex items-center">
         
              <span className="w-12 h-[2px] bg-[#FD4A6C] inline-block mr-3.5"></span>
              Portfolio Site
            </li>
            <li className="text-gray-700"><span className="w-1 h-[2px] bg-[#fd4a6bb7] inline-block mr-3.5"></span>GreenTech Solutions</li>
            <li className="text-gray-700"><span className="w-1 h-[2px] bg-[#fd4a6bb7] inline-block mr-3.5"></span>DevLaunch Platform </li>
            <li className="text-gray-700"><span className="w-1 h-[2px] bg-[#fd4a6bb7] inline-block mr-3.5"></span>WellNest Health

</li>
          </ul>
          <p className="text-gray-600 mt-20 md:mr-8  mb-8">
          Explore real case studies of how I transformed ideas into polished websites and functional experiences.
          </p>
        </div>

        {/* Right Section: Case Details */}
        <div className="relative lg:h-screen bg-gradient-to-r from-black to-[#fd4a6bd2] text-white p-8 flex flex-col justify-between md:12 lg:p-24 col-span-2 overflow-hidden">
  {/* Texture Layer */}
  <div className="absolute inset-0 bg-[url('/texture1.jpg')] bg-cover bg-center opacity-10 pointer-events-none z-0" />

  {/* Content Layer */}
  <div className="relative z-10">
    <div className="flex justify-start gap-2.5 items-center mb-6">
      <button className="bg-[#FFFBDF] text-black p-3 md:p-5">Aa</button>
      <button className="bg-[#FFFBDF] text-black p-3 md:p-5">Bx</button>
    </div>

    <div className="flex flex-col justify-start items-start">
      <h2 className="text-3xl md:text-3xl lg:text-4xl leading-tight mb-2 py-6">Portfolio Site</h2>
      <p className="text-gray-300 mb-6 py-6 md:text-justify leading-6">
      A personal portfolio site built from scratch to showcase my best work, development skills, and design thinking. The site features a clean, modern interface, optimized performance, and a mobile-first responsive layout. Each section is thoughtfully crafted to provide smooth navigation and an engaging user experience from start to finish.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm w-full py-6">
        <div>
          <h4 className="text-gray-400 pb-2">What I did</h4>
          <p className="pb-2">Frontend Development</p>
          <p>UI/UX Design</p>
        </div>
        <div>
          <h4 className="text-gray-400 pb-2">Industry</h4>
          <p className="pb-2">Creative / Tech</p>
          <p>India</p>
        </div>
        <div>
          <h4 className="text-gray-400 pb-2">Timeline</h4>
          <p className="pb-2">3 Weeks</p>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default CaseStudies;