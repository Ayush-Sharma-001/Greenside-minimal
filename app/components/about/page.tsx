"use client";
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about-me" className="bg-[#FFFBDF] text-black h-full flex items-center">
      <div className="container relative mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start justify-evenly h-full py-14 md:py-24 space-y-8 md:space-y-0  ">
        {/* Left Section: Title */}
        <div className="w-full mb-8 md:mb-12">
          <h3 className="text-md font-medium tracking-widest text-[#FD4A6C] uppercase mb-4 md:mb-8">
          About Me
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 md:mb-12">
          Who I am: My story and purpose
          </h2>
        </div>
 
        {/* Right Section: Content */}
        <div className="w-full flex justify-end">
          <div className="w-full md:w-1/2 text-gray-700 space-y-6 text-justify leading-6">
            <p>
              In a digital landscape where visibility is paramount, our BORINGDESIGNER was born
              out of a passion for guiding businesses towards online success.
            </p>
            <p>
            What began as a creative passion turned into a full-fledged pursuit of combining logic and design. Through code and UI, I aim to bring clarity, usability, and personality into every digital product.
            </p>
            <p>
            Join me on this path of crafting work that not only functions well but feels right. Engage and experience the creations we can built together so  Let&#39;s build interfaces that connect, engage, and inspire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;