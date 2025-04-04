"use client";
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about-us" className="bg-white text-black h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-start justify-evenly h-full">
        {/* Left Section: Title */}
        <div className="w-full mb-8 md:mb-0">
          <h3 className="text-md font-medium tracking-widest text-gray-500 uppercase mb-2 md:mb-8">
            About Us
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">
            Who we are: Our story and missioning
          </h2>
        </div>

        {/* Right Section: Content */}
        <div className="w-full flex justify-end">
          <div className="w-full md:w-1/2 text-gray-700 space-y-6 text-justify leading-6">
            <p>
              In a digital landscape where visibility is paramount, our SEO company Lungo was born
              out of a passion for guiding businesses towards online success.
            </p>
            <p>
              Our story begins with a small team of enthusiasts, united by a shared vision to
              revolutionize the way brands connect with their audience online. Fueled by innovation
              and driven by results, we embarked on a mission to empower businesses of all sizes to
              soar to new heights in the digital realm.
            </p>
            <p>
              Join us on this journey as we continue to elevate brands and redefine what&#39;s
              possible in the ever-evolving world of digital marketing. Together, let&#39;s reach
              new heights and make your digital dreams a reality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;