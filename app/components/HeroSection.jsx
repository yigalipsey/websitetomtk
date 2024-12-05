"use client";

import { useState } from "react";
import Image from "next/image";
import furnitureImage1 from "../../public/images/hero1.jpg";
import furnitureImage2 from "../../public/images/hero2.jpg";
import furnitureImage3 from "../../public/images/hero3.jpg";
import furnitureImage4 from "../../public/images/hero4.jpg";
import furnitureImage5 from "../../public/images/hero5.jpg";

const HeroSection = () => {
  const images = [
    furnitureImage1,
    furnitureImage2,
    furnitureImage3,
    furnitureImage4,
    furnitureImage5,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-4/5 m-auto md:mt-5">
      <div className="text-center md:text-left md:max-w-md flex-1 order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl font-bold text-[#1c1c1c] font-bebas mb-4">
          Premium furniture,{" "}
          <span className="text-[#865136]"> tailor-made for your project </span>
          all in one place.
        </h1>
        <p className="text-md md:text-lg text-[#865136] mb-6">
          From modern elegance to boho-chic charm, TK Group offers a wide range
          of furniture tailored to your unique style and needs. We are committed
          to delivering exceptional quality while keeping your budget in mind.
          Let us bring your vision to life with designs that combine style,
          functionality, and affordability.
        </p>
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 z-20 relative py-3 bg-[#1c1c1c] text-white rounded-md hover:bg-[#333333] font-bebas transition duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* קרוסלת תמונות */}
      <div className="relative mt-8 md:mt-0 flex-1 order-1 md:order-2">
        <div className="overflow-hidden rounded-lg mx-auto w-[300px] md:w-[450px] h-[500px] md:h-[600px] mb-6 md:mb-0">
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {/* כפתורי ניווט */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-[calc(50%-160px)] md:left-[calc(50%-200px)] transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-[calc(50%-160px)] md:right-[calc(50%-200px)] transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
        >
          &#9654;
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
