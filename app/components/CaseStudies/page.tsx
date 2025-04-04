"use client";
import React from "react";

const CaseStudies: React.FC = () => {
  return (
    <section id="case-studies" className="bg-white lg:h-screen text-black flex items-center py-16  md:px-12  lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3  items-center">
        {/* Left Section: Case List */}
        <div className="flex flex-col lg:h-screen justify-between  md:py-24  px-6 col-span-1   ">
          <h3 className="text-md font-medium tracking-widest text-gray-500 uppercase mb-24 md:mb-6 ">
            Case Studies
          </h3>
          <ul className="space-y-4">
            <li className="text-lime-600 font-medium flex items-center">
         
              <span className="w-12 h-[2px] bg-lime-600 inline-block mr-3.5"></span>
                       Trendy Store
            </li>
            <li className="text-gray-700"><span className="w-1 h-[2px] bg-lime-600 inline-block mr-3.5"></span>ABC Plumbing</li>
            <li className="text-gray-700"><span className="w-1 h-[2px] bg-lime-600 inline-block mr-3.5"></span>Innovative Software</li>
            <li className="text-gray-700"><span className="w-1 h-[2px] bg-lime-600 inline-block mr-3.5"></span>City Health Clinics</li>
          </ul>
          <p className="text-gray-600 mt-20 md:mr-8  mb-8">
            Explore our case stories to see how our solutions create real impact
            and drive success for our clients.
          </p>
        </div>

        {/* Right Section: Case Details */}
        <div className="lg:h-screen bg-gradient-to-r from-black to-green-900 text-white p-8 flex flex-col  justify-between md:12 lg:p-24 col-span-2 ">
          <div className="flex justify-start gap-2.5 items-center mb-6 ">
            <button className="bg-white text-black p-3 md:p-5 ">
              Aa
            </button>
            <button className="bg-white text-black p-3 md:p-5 ">
              Bx
            </button>
          </div>
         <div className="flex flex-col justify-start items-start   ">
           <h2 className="text-3xl md:text-3xl lg:text-4xl leading-tight  mb-2 py-6">Trendy Store</h2>
          <p className="text-gray-300 mb-6 py-6 md:text-justify leading-6">
            Trendy Fashion Store, an online retailer specializing in women’s
            apparel, faced a significant drop in traffic and sales. After
            conducting a detailed SEO audit, we implemented a targeted keyword
            strategy and optimized product descriptions. As a result, organic
            traffic increased by 40% and sales by 25% within six months.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-8 text-sm w-full py-6">
            <div>
              <h4 className="text-gray-400 pb-2">Services</h4>
              <p className="pb-2">SEO Audits</p>
              <p>Keyword Research</p>
            </div>
            <div>
              <h4 className="text-gray-400 pb-2">Market & Industry</h4>
              <p className="pb-2">USA</p>
              <p>E-Commerce</p>
            </div>
            <div>
              <h4 className="text-gray-400 pb-2">Timescale</h4>
              <p className="pb-2">6 Months</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;