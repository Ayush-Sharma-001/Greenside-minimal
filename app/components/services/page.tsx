import React from 'react';

const Services: React.FC = () => {
  return (
    <section id='services' className=" bg-white text-black h-full md:h-screen  flex items-center justify-between py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto h-full flex flex-col items-center justify-between">
        {/* Section Title */}
        <div className="w-full ">
          <h3 className="text-md font-medium tracking-widest text-gray-500 uppercase text-left md:text-center   mb-2 md:mb-8">Services</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-left  leading-tight md:text-center mb-12">
            What we can do for you
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 h-2/3">
          {/* Service 1 */}
          <div className='h-full p-4 md:p-12 '>
            <h4 className="text-sm font-medium text-lime-600 mb-4 md:mb-6 ">S / 1</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">Keyword Research</h3>
            <p className="text-gray-700 text-base/7">
              We identify high-potential keywords that drive targeted <span className='font-semibold'>traffic</span> to
              your website, focusing on <span className='font-semibold'>search volume</span> and competition to align
              with your business goals.
            </p>
          </div>

          {/* Service 2 */}
          <div className='h-full p-4 md:p-12 '>
            <h4 className="text-sm font-medium text-lime-600 mb-4 md:mb-6 ">S / 2</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight  mb-4">On-Page Optimization</h3>
            <p className="text-gray-700 text-base/7">
              Our service enhances your website’s content and structure, optimizing elements like{' '}
              <span className='font-semibold'>title tags</span> and <span className='font-semibold'>meta descriptions</span> to improve
              rankings and user engagement.

            </p>
          </div>

          {/* Service 3 */}
          <div className='h-full p-4 md:p-12 '>
            <h4 className="text-sm font-medium text-lime-600 mb-4 md:mb-6 ">S / 3</h4>
            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight  mb-4"> <span className="md:block">Link</span>
            <span className="md:block"> Building</span></h3>
            <p className="text-gray-700 text-base/7">
              We develop a customized link building <span className='font-semibold'>strategy</span> to acquire
              high-quality backlinks, <span className='font-semibold'>boosting</span> your website’s authority and
              credibility for better search engine visibility.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;