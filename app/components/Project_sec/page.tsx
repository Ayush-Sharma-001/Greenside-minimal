
"use client";
import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Portfolio Site",
    description:
      "A personal portfolio site built from scratch to showcase my best work, development skills, and design thinking. The site features a clean, modern interface, optimized performance, and a mobile-first responsive layout. Each section is thoughtfully crafted to provide smooth navigation and an engaging user experience from start to finish.",
    whatIDid: ["Frontend Development", "UI/UX Design"],
    industry: ["Creative / Tech", "India"],
    timeline: "3 Weeks",
    liveLink: "https://yourportfolio.live",
    githubLink: "https://github.com/yourportfolio",
  },
  {
    title: "GreenTech Solutions",
    description:
      "Website for a sustainable energy firm with a focus on speed and user clarity. Built with responsive grids, clean layouts, and SEO-focused structure. Optimized for both desktop and mobile. Helped increase online visibility significantly.",
    whatIDid: ["Web Design", "SEO Optimization"],
    industry: ["Renewable Energy", "India"],
    timeline: "4 Weeks",
    liveLink: "https://greentech.live",
    githubLink: "https://github.com/greentech",
  },
  {
    title: "DevLaunch Platform",
    description:
      "A SaaS platform for developers to test and launch apps efficiently. Built dashboards, secure auth, and real-time analytics tools. Responsive and scalable architecture. UI focused on clarity and quick access to tools.",
    whatIDid: ["React Development", "API Integration"],
    industry: ["Tech", "Global"],
    timeline: "6 Weeks",
    liveLink: "https://devlaunch.live",
    githubLink: "https://github.com/devlaunch",
  },
  {
    title: "WellNest Health",
    description:
      "Mental health startup website with a clean, calming UI. Features appointment booking, blog integration, and accessibility-first design. Built using modern frontend stack. Ensures smooth experience for all users.",
    whatIDid: ["Frontend Dev", "CMS Integration"],
    industry: ["Healthcare", "India"],
    timeline: "5 Weeks",
    liveLink: "https://wellnest.live",
    githubLink: "https://github.com/wellnest",
  },
];

const Project_sec: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
      }, 5000);
    };

    startAutoSlide();

    const node = contentRef.current;
    const stopAutoSlide = () => intervalRef.current && clearInterval(intervalRef.current);

    // Pause on hover
    node?.addEventListener("mouseenter", stopAutoSlide);
    node?.addEventListener("mouseleave", startAutoSlide);

    // Swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      const deltaX = touchEndX - touchStartX;
      if (Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
          // Swipe Right
          setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
        } else {
          // Swipe Left
          setActiveIndex((prev) => (prev + 1) % projects.length);
        }
      }
    };

    node?.addEventListener("touchstart", handleTouchStart);
    node?.addEventListener("touchend", handleTouchEnd);

    const isDesktop = window.innerWidth >= 1024;

    if (isDesktop) {
      node?.addEventListener("mouseenter", stopAutoSlide);
      node?.addEventListener("mouseleave", startAutoSlide);
    }

    return () => {
      stopAutoSlide();
      if (isDesktop) {
        node?.removeEventListener("mouseenter", stopAutoSlide);
        node?.removeEventListener("mouseleave", startAutoSlide);
      }
      node?.removeEventListener("touchstart", handleTouchStart);
      node?.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section id="projects" className="bg-[#FFFBDF] text-black flex items-center py-16 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-12">
        {/* Left Section */}
        <div className="flex flex-col gap-8 px-6 md:py-20 col-span-1">
          <h3 className="text-md font-medium tracking-widest text-[#FD4A6C] uppercase">
            Projects
          </h3>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className={`cursor-pointer flex items-center font-medium transition-all duration-500 ease-in-out ${activeIndex === index ? "text-[#FD4A6C]" : "text-gray-700"
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <span
                  className={`inline-block mr-3.5 h-[2px] transition-all duration-500 ease-in-out ${activeIndex === index ? "w-12 bg-[#FD4A6C]" : "w-1 bg-[#fd4a6bb7]"
                    }`}
                ></span>
                {project.title}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mt-10 md:mt-30">
            Explore real case studies of how I transformed ideas into polished websites and functional experiences.
          </p>
        </div>

        {/* Right Section */}
        <div
          ref={contentRef}
          className="relative bg-gradient-to-r from-black to-[#fd4a6bd2] text-white p-8 lg:p-24 col-span-2 overflow-hidden  transition-all duration-700 ease-in-out my-auto"
        >
          {/* Texture Layer */}
          <div className="absolute inset-0 bg-[url('/texture1.jpg')] bg-cover bg-center opacity-10 pointer-events-none z-0   transition-all duration-700 ease-in-out" />

          {/* Content Layer */}
          <div
            key={activeIndex}
            className="relative z-10 opacity-0 fadeInRight transition-all duration-700 ease-in-out">


            <div className="flex justify-between gap-2.5 items-center mb-6">
              <div className="flex gap-2 items-center">
                <a href={activeProject.liveLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#FFFBDF] text-black p-1 md:p-3 flex items-center gap-2">
                    <img src="/eye.png" alt="Live" className="w-8 h-8" />
                  </button>
                </a>
                <a href={activeProject.githubLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#FFFBDF] text-black p-1 md:p-3 flex items-center gap-2">
                    <img src="/github.png" alt="GitHub" className="w-8 h-8" />
                  </button>
                </a>
              </div>
              {/*//slide number */}
              <div
                className="flex items-center gap-2 p-1 px-2 md:p-3 justify-center cursor-pointer"
                onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length)}
              >
                <img src="/arrow.png" alt="Arrow" className="h-12 w-12 " />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-start items-start">
            <h2 className="text-3xl md:text-3xl lg:text-4xl leading-tight mb-2 py-6 transition-all duration-700 ease-in-out">{activeProject.title}</h2>
            <p className="text-gray-300 mb-6 py-6 md:text-justify leading-6 transition-all duration-700 ease-in-out">{activeProject.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm w-full py-6">
              <div>
                <h4 className="text-gray-400 pb-2">What I did</h4>
                {activeProject.whatIDid.map((item, idx) => (
                  <p key={idx} className="pb-2">{item}</p>
                ))}
              </div>
              <div>
                <h4 className="text-gray-400 pb-2">Industry</h4>
                {activeProject.industry.map((item, idx) => (
                  <p key={idx} className="pb-2">{item}</p>
                ))}
              </div>
              <div>
                <h4 className="text-gray-400 pb-2">Timeline</h4>
                <p className="pb-2">{activeProject.timeline}</p>
              </div>
              <div >
                {/* <span className="text-white  text-2xl font-semibold p-1 px-2 md:p-3 flex items-center gap-1">
                  {activeIndex + 1} / {projects.length}
                </span> */}
                <h4 className="text-gray-400 pb-2">Project</h4>
                <p className="pb-2">{activeIndex + 1} / {projects.length}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
export default Project_sec;
