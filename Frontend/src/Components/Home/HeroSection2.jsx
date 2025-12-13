



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
    <section className="w-full max-w-8xl mx-auto px-6 lg:px-12  py-12">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        
        {/* Left Side (40%) */}
        <div className="w-full lg:w-1/5 relative text-center lg:text-left mt-15 ml-10 lg:mt-50 lg:ml-40">
          
          {/* Accent bar */}
          <div className="absolute left-0 lg:-left-26  h-15 w-1 bg-orange-400 rounded-full"></div>

          <h1 className="text-4xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-snug text-orange-500 lg:-ml-21">
            {t("hero.title")}
          </h1>

          <p className="text-2xl lg:text-3xl font-bold text-orange-500 mb-6 lg:-ml-21">
            {/* उम्मीद की एक डोर */}
             {t("hero.subtitle")}
          </p>

          <PrimaryButton href="/contact" className="lg:-ml-21" >   {t("hero.cta")}</PrimaryButton>

          {/* Scroll indicator */}
      <div className="mt-30 flex flex-col items-center lg:items-start gap-3 text-lg text-gray-600">

  {/* Vertical Line */}
  <div className="w-[3px] h-15 bg-orange-400 rounded-full animate-pulse lg:-ml-20 lg:-mb-4"></div>

  {/* Dot */}
  <div className="lg:w-5 lg:h-5 bg-orange-500 rounded-full animate-pulse lg:-ml-22"></div>

  {/* Text */}
<span className="text-gray-700 font-medium tracking-wide text-xl animate-tilt lg:-ml-21">
  {/* Scroll For More */}
     {t("hero.scrollText")}
</span>


</div>

        </div>

        {/* Right Side (60%) */}
        <div className="w-full lg:w-4/5 lg:mt-30">
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
                  className="w-full h-[500px] object-cover flex-shrink-0 transition-opacity duration-500"
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

// export default function HeroSection() {
//   const images = [
//     "/HeroSection/Hero1.png",
//     "/HeroSection/Hero2.png",
//     "/HeroSection/Hero3.png",
//     "/HeroSection/Hero4.png",
//     "/HeroSection/Hero5.png",
//     "/HeroSection/Hero6.png",
//   ];

//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-12 py-10 md:py-12">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">

//         {/* LEFT SIDE */}
//         <div className="w-full mt-18 lg:w-1/4 relative text-center lg:text-left">

//           {/* Accent bar */}
//           <div className="absolute hidden lg:block -left-6 h-16 w-1 bg-orange-400 rounded-full"></div>

//           <h1 className="text-3xl md:text-5xl  lg:text-3xl font-extrabold mb-3 leading-snug text-orange-500">
//             Hope of Rope
//           </h1>

//           <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-orange-500 mb-6">
//             उम्मीद की एक डोर
//           </p>

//           <PrimaryButton href="/contact" className="mx-auto lg:mx-0">
//             Yes! I Want to Help
//           </PrimaryButton>

//           {/* SCROLL MORE — hidden on mobile/sm */}
//           <div className="hidden lg:flex flex-col items-center lg:items-start gap-3 text-lg text-gray-600 mt-10">

//             {/* Vertical Line */}
//             <div className="w-[3px] h-16 bg-orange-400 rounded-full"></div>

//             {/* Dot */}
//             <div className="w-5 h-5 bg-orange-500 rounded-full animate-pulse"></div>

//             {/* Text */}
//             <span className="text-gray-700 font-medium tracking-wide text-xl animate-tilt">
//               Scroll For More
//             </span>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="w-full lg:w-3/4 lg:mt-30">
//           <div className="relative w-full overflow-hidden rounded-xl ring-4 ring-orange-200 shadow-lg">

//             {/* Slider */}
//             <div
//               className="flex transition-transform duration-700 ease-in-out"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {images.map((src, index) => (
//                 <img
//                   key={index}
//                   src={src}
//                   alt={`Slide ${index + 1}`}
//                   className="w-full h-[260px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover flex-shrink-0"
//                 />
//               ))}
//             </div>

//             {/* Dots */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//               {images.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrent(index)}
//                   className={`w-3 h-3 rounded-full transition-all ${
//                     current === index ? "bg-orange-500 scale-110" : "bg-gray-300"
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
