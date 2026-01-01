

import { useState, useEffect } from "react";
import {  PrimaryButton } from "../UI/UiComponent";
import { useTranslation } from "react-i18next";



export default function HeroSection() {

  const API = import.meta.env.VITE_API_BASE_URL;

const images = [
  `${API}/images/HeroSection/1.jpg`,
  `${API}/images/HeroSection/2.jpg`,
  `${API}/images/HeroSection/1.1.jpg`,
  `${API}/images/HeroSection/3.jpg`,
  `${API}/images/HeroSection/4.jpg`,
  `${API}/images/HeroSection/5.jpg`,
  `${API}/images/HeroSection/6.jpg`,
  `${API}/images/HeroSection/6.1.jpg`,
  `${API}/images/HeroSection/7.jpg`,
  `${API}/images/HeroSection/8.jpg`,
  `${API}/images/HeroSection/9.jpg`,
  `${API}/images/HeroSection/10.jpg`,
  `${API}/images/HeroSection/11.jpg`,
  `${API}/images/HeroSection/12.jpg`,
];

  const [current, setCurrent] = useState(0);

   const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full max-w-8xl mx-auto px-6 lg:px-12 py-6 lg:py-12">
      <div className="flex flex-col  md:flex-row lg:flex-row items-center md:items-start lg:items-start lg:gap-8">
        
        {/* Left Side (40%) */}
        <div className="w-full md:w-1/5 lg:w-1/5 relative text-center md:text-left lg:text-left 

        
      mb-6 ml-10 md:mt-15 md:ml-1    lg:mt-25 lg:ml-35   
        
         hero-section
        
        ">
          
          {/* Accent bar */}
          <div className="absolute left-0 md:-left-5 lg:-left-26  md:h-12 lg:h-15 w-1 bg-orange-400 rounded-full"></div>

          <h1 className="text-3xl md:text-3xl lg:text-4xl font-extrabold  mb-4 md:mb-2 lg:mb-4 leading-snug text-orange-500 md:-ml-2 lg:-ml-21 hope">
            {t("hero.title")}
          </h1>

          <p className="text-2xl lg:text-3xl font-bold text-orange-500  mb-6 md:mb-2 lg:mb-6 lg:-ml-21">
            {/* उम्मीद की एक डोर */}
             {t("hero.subtitle")}
          </p>

          <PrimaryButton href="/contact" className="lg:-ml-21" >   {t("hero.cta")}</PrimaryButton>

          {/* Scroll indicator */}
      <div className="hidden md:block md:mt-15 lg:mt-25 flex flex-col items-center lg:items-start gap-3 text-lg text-gray-600">

  {/* Vertical Line */}
  <div className="w-[3px] h-15 bg-orange-400 rounded-full animate-pulse lg:-ml-20 lg:-mb-4"></div>

  {/* Dot */}
  <div className="md:w-5 md:h-5 md:-ml-2  lg:w-5 lg:h-5 lg:-ml-22 lg:mt-3 bg-orange-500 rounded-full animate-pulse "></div>

  {/* Text */}
<span className="text-gray-700 font-medium tracking-wide text-xl animate-tilt lg:-ml-21">
  {/* Scroll For More */}
     {t("hero.scrollText")}
</span>


</div>

        </div>

        {/* Right Side (60%) */}
        <div className="w-full md:w-4/5 lg:w-5/5 md:mt-5 md:ml-5  lg:mt-5">
          <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl ring-4 ring-orange-200 shadow-lg">
            
            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full md:h-[450px]  lg:h-[560px] object-cover flex-shrink-0 transition-opacity duration-500"
                />
              ))}
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full ${
                    current === index ? "bg-orange-500" : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}






  // ||
  // process.env.REACT_APP_API_URL;


  //  const images = [
  //    "/HeroSection/2.jpg",
  //    "/HeroSection/1.jpg",
  //    "/HeroSection/1.1.jpg",
  //   "/HeroSection/3.jpg",
  //   "/HeroSection/4.jpg",
  //   "/HeroSection/5.jpg",
  //   "/HeroSection/6.jpg",
  //   "/HeroSection/6.1.jpg",
  //   "/HeroSection/7.jpg",
  //   "/HeroSection/8.jpg",
  //   "/HeroSection/9.jpg",
  //   "/HeroSection/10.jpg",
  //   "/HeroSection/11.jpg",
  //   "/HeroSection/12.jpg",
   
  // ];

// const images = [
//   "http://localhost:3000/images/HeroSection/1.jpg",
//   "http://localhost:3000/images/HeroSection/2.jpg",
//   "http://localhost:3000/images/HeroSection/1.1.jpg",
//   "http://localhost:3000/images/HeroSection/3.jpg",
//   "http://localhost:3000/images/HeroSection/4.jpg",
//   "http://localhost:3000/images/HeroSection/5.jpg",
//   "http://localhost:3000/images/HeroSection/6.jpg",
//   "http://localhost:3000/images/HeroSection/6.1.jpg",
//   "http://localhost:3000/images/HeroSection/7.jpg",
//   "http://localhost:3000/images/HeroSection/8.jpg",
//   "http://localhost:3000/images/HeroSection/9.jpg",
//   "http://localhost:3000/images/HeroSection/10.jpg",
//   "http://localhost:3000/images/HeroSection/11.jpg",
//   "http://localhost:3000/images/HeroSection/12.jpg",
// ];
