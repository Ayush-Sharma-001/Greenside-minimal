import React from 'react';
// bg-[#FFFBDF]
const Skill_section
: React.FC = () => {
  return (
    <section id='skills' className=" bg-[#FFFBDF] text-black h-full md:min-h-screen  flex items-center justify-between py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto h-full flex flex-col items-center justify-between">
        {/* Section Title */}
        <div className="w-full ">
          <h3 className="text-md font-medium tracking-widest text-[#FD4A6C] uppercase text-left md:text-center   mb-2 md:mb-8">Skills</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-left  leading-tight md:text-center mb-12">
          What I can do for you
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 h-2/3">
          {/* Service 1 */}

          {/* bg-[#fef9d3] */} 
          <div className='h-full p-4 md:p-12 rounded-sm bg-[#fd4a6b7c] '>
            <h4 className="text-sm font-medium text-[#FD4A6C] mb-4 md:mb-6 ">S / 1</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">Frontend Development</h3>
            <p className="text-gray-900 text-base/7">
            I build modern interfaces that attract <span className='font-semibold'>attention</span> and deliver seamless user experiences, focusing on <span className='font-semibold'>performance</span> and design precision to align with your creative goals.

            </p>
          </div>

          {/* Service 2 */}
          <div className='h-full p-4 md:p-12  rounded-sm bg-[#fd4a6b7c]'>
            <h4 className="text-sm font-medium text-[#FD4A6C]  mb-4 md:mb-6 ">S / 2</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight  mb-4">Web Optimization</h3>
            <p className="text-gray-700 text-base/7">
            My workflow refines your site's layout and flow, enhancing elements like <span className='font-semibold'>navigation</span> and <span className='font-semibold'>component hierarchy</span> to improve usability and user interaction.


            </p>
          </div>

          {/* Service 3 */}
          <div className='h-full p-4 md:p-12 rounded-sm bg-[#fd4a6b7c]'>
            <h4 className="text-sm font-medium text-[#FD4A6C]  mb-4 md:mb-6 ">S / 3</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight  mb-4"> <span className="md:block">UI/UX Design</span>
            <span className="md:block"> Building</span></h3>
            <p className="text-gray-700 text-base/7">
            I craft personalized design <span className='font-semibold'>systems</span> to build sleek, high-performing websites, <span className='font-semibold'>boosting</span> user experience and brand presence across all platforms.



            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill_section
; 