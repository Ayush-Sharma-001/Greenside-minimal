
import React from "react";

const skills = [
  {
    id: 1,
    title: "Web Development",
    tag: "Service / 1",
    description: (
      <>
        We build modern interfaces that attract <span className="font-semibold">attention</span> and deliver seamless user experiences, focusing on <span className="font-semibold">performance</span> and design precision to align with your creative goals.
      </>
    ),
  },
  {
    id: 2,
    title: "Web Optimization",
    tag: "Service / 2",
    description: (
      <>
        Our workflow refines your site&apos;s layout and flow, enhancing elements like <span className="font-semibold">navigation</span> and <span className="font-semibold">component hierarchy</span> to improve usability and user interaction.
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <span className="md:block">UI/UX Design</span>
        <span className="md:block">Building</span>
      </>
    ),
    tag: "Service / 3",
    description: (
      <>
        we craft personalized design <span className="font-semibold">systems</span> to build sleek, high-performing websites, <span className="font-semibold">boosting</span> user experience and brand presence across all platforms.
      </>
    ),
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full bg-[#FFFBDF] text-black px-6 md:px-12 lg:px-24 py-16">
      <div className="w-full text-left md:text-center mb-12">
        <h3 className="text-md font-medium tracking-widest text-[#FD4A6C] uppercase mb-2 md:mb-4">Skills</h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight">What I can do for you</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 ">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="h-full p-4 md:p-12 relative overflow-hidden rounded-xl bg-gradient-to-r from-black to-[#fd4a6bd2]"
          >
            <div
              className="absolute inset-0 bg-[url('/texture2.jpg')] bg-cover bg-center opacity-10 pointer-events-none z-0  "
            ></div>
            <h4 className="text-sm font-medium text-[#FD4A6C] mb-4 md:mb-6">{skill.tag}</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#FFFBDF] leading-tight mb-4 font-medium  ">{skill.title}</h3>
            <p className="text-[#fffbdfd5] text-base/7 ">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
