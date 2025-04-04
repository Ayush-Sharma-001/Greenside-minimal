"use client";
import React, { useRef, useEffect, useState } from "react";

const How: React.FC = () => {
  const leftLineRef = useRef<HTMLDivElement>(null);
  const rightLineRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  // Intersection Observers for both lines
  useEffect(() => {
    const leftObserver = new IntersectionObserver(
      ([entry]) => setLeftVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const rightObserver = new IntersectionObserver(
      ([entry]) => setRightVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (leftLineRef.current) leftObserver.observe(leftLineRef.current);
    if (rightLineRef.current) rightObserver.observe(rightLineRef.current);

    return () => {
      if (leftLineRef.current) leftObserver.unobserve(leftLineRef.current);
      if (rightLineRef.current) rightObserver.unobserve(rightLineRef.current);
    };
  }, []);

  return (
    <section
      id="pricing"
      className="bg-white text-black py-16 px-6 md:px-12 lg:px-24 h-full overflow-hidden"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-left w-full leading-tight mb-12">
          The project life cycle section delineates the pivotal phases a project traverses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-20 md:gap-0">
          {/* Discovery Phase (LEFT) */}
          <div className="flex justify-end">
            <div className="relative md:w-1/2 md:p-14">
              {/* Left Line */}
              <div
                ref={leftLineRef}
                className={`
                  absolute left-0 top-0 h-full w-1 bg-lime-600
                  transition-transform duration-[1500ms] ease-in-out
                  origin-top
                  ${leftVisible ? "scale-y-100" : "scale-y-0"}
                `}
              ></div>

              <div className="pl-8">
                <h4 className="text-sm font-medium text-lime-600 mb-4">2 HOURS</h4>
                <h3 className="text-3xl md:text-5xl mb-12">Discovery Phase</h3>
                <p className="text-gray-700 mb-6">
                  In this initial stage, we conduct a comprehensive analysis of your business, target
                  audience, and industry landscape to understand your unique needs and objectives.
                </p>
                <ul className="space-y-8">
                  <li className="flex items-center">
                    <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-lime-600 rounded-full mr-4"></span>
                    Conduct comprehensive business analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-lime-600 rounded-full mr-4"></span>
                    Identify unique needs and objectives
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dot Connector */}
          <div className="hidden md:flex items-center w-full justify-center my-2">
            <span className="w-8 h-8 rounded-full border-4 border-lime-600 bg-white ml-1"></span>
          </div>

          {/* Strategy Development (RIGHT) */}
          <div className="flex justify-start ml-2">
            <div className="relative md:w-1/2 md:p-14">
              {/* Right Line */}
              <div
                ref={rightLineRef}
                className={`
                  absolute right-0 top-0 h-full w-1 bg-lime-600
                  transition-transform duration-[1500ms] ease-in-out
                  origin-top
                  ${rightVisible ? "scale-y-100" : "scale-y-0"}
                `}
              ></div>

              <div className="pr-8">
                <h4 className="text-sm font-medium text-lime-600 mb-4">1 WEEK</h4>
                <h3 className="text-3xl md:text-5xl mb-12">Strategy Development</h3>
                <p className="text-gray-700 mb-6">
                  Based on the insights gathered during the discovery phase, we develop a tailored SEO
                  strategy that outlines the specific tactics and approaches to be implemented to
                  achieve your goals.
                </p>
                <ul className="space-y-8">
                  <li className="flex items-center">
                    <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-lime-600 rounded-full mr-4"></span>
                    Create a tailored SEO strategy based on insights
                  </li>
                  <li className="flex items-center">
                    <span className="w-4 h-4 md:w-5 md:h-5 border-2 border-lime-600 rounded-full mr-4"></span>
                    Outline specific tactics and approaches
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
