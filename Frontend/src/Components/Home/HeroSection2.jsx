

import { useState, useEffect } from "react";
import {  PrimaryButton } from "../UI/UiComponent";
import { useTranslation } from "react-i18next";



export default function HeroSection() {
  const images = [
    "/HeroSection/Hero1.png",
    "/HeroSection/Hero3.png",
    "/HeroSection/Hero4.png",
    "/HeroSection/Hero5.png",
    "/HeroSection/Hero6.png",
    "/HeroSection/Hero2.png",
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
  <div className="md:w-5 md:h-5 md:-ml-2  lg:w-5 lg:h-5 lg:-ml-22 bg-orange-500 rounded-full animate-pulse "></div>

  {/* Text */}
<span className="text-gray-700 font-medium tracking-wide text-xl animate-tilt lg:-ml-21">
  {/* Scroll For More */}
     {t("hero.scrollText")}
</span>


</div>

        </div>

        {/* Right Side (60%) */}
        <div className="w-full md:w-4/5 lg:w-4/5 md:mt-5 md:ml-5  lg:mt-5">
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
                  className="w-full md:h-[450px]  lg:h-[500px] object-cover flex-shrink-0 transition-opacity duration-500"
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




// import { useState, useEffect } from "react";
// import { PrimaryButton } from "../UI/UiComponent";
// import { useTranslation } from "react-i18next";

// export default function HeroSection() {
//   const images = [
//     "/HeroSection/Hero1.png",
//     "/HeroSection/Hero3.png",
//     "/HeroSection/Hero4.png",
//     "/HeroSection/Hero5.png",
//     "/HeroSection/Hero6.png",
//     "/HeroSection/Hero2.png",
//   ];

//   const [current, setCurrent] = useState(0);
//   const { t } = useTranslation();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 md:gap-8 lg:gap-10">
        
//         {/* Left Side */}
//         <div className="w-full lg:w-1/5 relative text-center sm:text-left mt-6 sm:mt-10 md:mt-15 lg:mt-25 ml-0 sm:ml-5 md:ml-10 lg:ml-35">
          
//           {/* Accent bar */}
//           <div className="absolute left-0 lg:-left-26 h-10 sm:h-12 md:h-15 w-1 bg-orange-400 rounded-full"></div>

//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-snug text-orange-500 lg:-ml-21">
//             {t("hero.title")}
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mb-6 lg:-ml-21">
//             {t("hero.subtitle")}
//           </p>

//           <PrimaryButton href="/contact" className="lg:-ml-21">
//             {t("hero.cta")}
//           </PrimaryButton>

//           {/* Scroll indicator */}
//           <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-25 flex flex-col items-center sm:items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl text-gray-600">
//             <div className="w-[2px] h-10 sm:h-12 md:h-15 bg-orange-400 rounded-full animate-pulse lg:-ml-20 lg:-mb-4"></div>
//             <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-orange-500 rounded-full animate-pulse lg:-ml-22"></div>
//             <span className="text-gray-700 font-medium tracking-wide text-sm sm:text-base md:text-lg lg:text-xl animate-tilt lg:-ml-21">
//               {t("hero.scrollText")}
//             </span>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="w-full lg:w-4/5 lg:mt-5">
//           <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl ring-2 sm:ring-3 md:ring-4 ring-orange-200 shadow-lg">
            
//             {/* Slides */}
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {images.map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-48 sm:h-64 md:h-80 lg:h-[500px] object-cover flex-shrink-0 transition-opacity duration-500"
//                 />
//               ))}
//             </div>

//             {/* Dots */}
//             <div className="absolute bottom-3 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrent(index)}
//                   className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
//                     current === index ? "bg-orange-500" : "bg-gray-300"
//                   }`}
//                 ></button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



























