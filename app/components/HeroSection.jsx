import React from 'react';
import Image from 'next/image';
import furnitureImage from '../../public/images/hero.jpg';
import lampImage from '../../public/images/hero.jpg';
import chairImage from '../../public/images/hero.jpg';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-4/5 m-auto md:mt-5">
      <div className="text-center md:text-left md:max-w-md flex-1 order-2 md:order-1">
        <p className="hidden md:block text-lg text-blue-500 font-semibold mb-2">The Best Choice For You!</p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Choose The Modern <span className="text-blue-500">Furniture</span> for Better Living
        </h1>
        <p className="text-sm md:text-lg text-gray-600 mb-6">
          Modern furniture with of-the-moment design sense at an affordable price.
        </p>
        <button className="px-6 z-20 relative py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
          Shop Now
        </button>
      </div>
      {/* Decorative Blue Lines */}
      <div className="absolute top-96 left-0 w-[110vw] h-[110vh] md:h-[100vh] md:w-[100vw] bg-[url('/images/t.svg')] bg-no-repeat opacity-5"></div>

      <div className="mt-8 md:mt-0 relative flex-1 order-1 md:order-2 mb-10 md:mb-0">
        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[630px] overflow-visible z-10">
          <Image
            src={furnitureImage}
            alt="Modern Furniture"
            className="rounded-tl-[300px] z-20 relative rounded-br-[0px] rounded-tr-[300px] rounded-bl-[0px] object-cover shadow-lg m-auto w-[120%] md:w-[500px] h-[100%]"
          />
          {/* Blue dots attached to the image */}
          <div className="absolute bottom-[-20px] right-[-50px] md:bottom-[-30px] md:right-5 flex flex-col space-y-4 opacity-50">
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;