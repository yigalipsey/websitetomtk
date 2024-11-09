"use client";

import React from "react";
import Image from "next/image";
import furnitureImage from "../../public/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between  w-4/5 m-auto md:mt-5">
      <div className="text-center md:text-left md:max-w-md flex-1 order-2 md:order-1">
        <p className="hidden md:block text-lg text-[#4a4a4a] font-semibold mb-2">
          Bringing Quality to Your Home!
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-[#1c1c1c] font-faculty mb-4">
          Premium{" "}
          <span className="text-[#865136] font-faculty">Furniture Imports</span>{" "}
          for a Modern Lifestyle
        </h1>
        <p className="text-md md:text-lg text-[#865136] mb-6">
          Explore our exclusive range of high-quality furniture, directly
          imported to provide you with elegance and comfort.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("catalogs")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 z-20 relative py-3 bg-[#1c1c1c] text-white rounded-md hover:bg-[#333333] transition duration-300"
        >
          Browse Collection
        </button>
      </div>

      {/* Decorative Light Background */}
      <div className="absolute bg-contain top-64 left-0 w-[110vw] h-[110vh] md:h-[100vh] md:w-[100vw] bg-[url('/images/lines.svg')] bg-no-repeat opacity-5"></div>

      <div className="mt-8 md:mt-0 relative flex-1 order-1 md:order-2 mb-10 md:mb-0">
        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[630px] overflow-visible z-10">
          <Image
            src={furnitureImage}
            alt="Modern Furniture"
            className="rounded-tl-[300px] z-20 relative rounded-br-[0px] rounded-tr-[300px] rounded-bl-[0px] object-cover shadow-lg m-auto w-[120%] md:w-[500px] h-[100%]"
          />

          {/* Decorative Dots in Dark Color */}
          <div className="absolute bottom-[-20px] right-[-50px] md:bottom-[-30px] md:right-5 flex flex-col space-y-4 opacity-50">
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
            </div>
            <div className="flex space-x-6">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#1c1c1c]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
