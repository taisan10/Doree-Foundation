// // src/components/NewSection.jsx
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { PrimaryButton } from "../UI/UiComponent";

// export default function NewSection() {
//   const slides = [
//     {
//       img: "/HeroSection/Hero1.png",
//       title: "SUPPORT CHILDREN’S EDUCATION",
//       subtitle: "Help them stay in school",
//     },
//     {
//       img: "/HeroSection/Hero2.png",
//       title: "Poori Padhai, Desh Ki Bhalai",
//       subtitle: "Help girls complete their education",
//     },
//     {
//       img: "/HeroSection/Hero3.png",
//       title: "Send Children Back to School",
//       subtitle: "Support their dreams and future",
//     },
//     {
//       img: "/HeroSection/Hero4.png",
//       title: "Bright Futures for Kids",
//       subtitle: "Every child deserves a chance",
//     },
//     {
//       img: "/HeroSection/Hero5.png",
//       title: "Education is Empowerment",
//       subtitle: "Your support makes it possible",
//     },
//     {
//       img: "/HeroSection/Hero6.png",
//       title: "Hope Through Learning",
//       subtitle: "Give them the gift of knowledge",
//     },
    
//   ];

//   const [current, setCurrent] = useState(0);

//   const prevSlide = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   const nextSlide = () =>
//     setCurrent((prev) => (prev + 1) % slides.length);

//   return (
//     <section className="w-full max-w-8xl mx-auto px-6 lg:px-12 py-12 bg-white">
//       <div className="flex flex-col lg:flex-row gap-8">
        
//         {/* Left Side (25%) */}
//         <div className="w-full lg:w-1/5 text-center lg:text-left space-y-6 lg:mt-20">
//           <h1 className="lg:text-4xl font-bold text-gray-800">
//             How do you want to help children today?
//           </h1>
//           <p className="text-gray-600 leading-relaxed">
//             Your smallest contribution makes a big difference to children’s lives.
//             We count on the generosity of people like you to be able to create
//             real change for India’s children!
//           </p>
//           <PrimaryButton href="/donate">
//             Donate For Happier Childhoods!
//           </PrimaryButton>
//         </div>

//         {/* Right Side (75%) */}
//         <div className="w-full lg:w-3/5 relative overflow-hidden rounded-xl shadow-lg bg-gray-100 lg:ml-55">
//           {/* Slide */}
//           <div className="flex transition-transform duration-700 ease-in-out"
//                style={{ transform: `translateX(-${current * 100}%)` }}>
//             {slides.map((slide, index) => (
//               <div key={index} className="w-full flex-shrink-0">
//                 <img
//                   src={slide.img}
//                   alt={slide.title}
//                   className="w-full h-[400px] object-cover rounded-t-xl"
//                 />
//                 <div className="p-6 bg-white">
//                   <h4 className="text-xl font-semibold text-orange-500">
//                     {slide.title}
//                   </h4>
//                   <h6 className="text-gray-600 mt-2">{slide.subtitle}</h6>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Arrows (stacked on left corner) */}
// <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-20 flex flex-col gap-3">
//   <button
//     aria-label="Previous Slide"
//     onClick={prevSlide}
//     className="w-12 h-12 bg-white/70 backdrop-blur-md shadow
//                rounded-full flex items-center justify-center
//                hover:bg-white hover:scale-105 transition-transform"
//   >
//     <ChevronLeft className="text-orange-500 w-6 h-6" />
//   </button>

//   <button
//     aria-label="Next Slide"
//     onClick={nextSlide}
//     className="w-12 h-12 bg-white/70 backdrop-blur-md shadow
//                rounded-full flex items-center justify-center
//                hover:bg-white hover:scale-105 transition-transform"
//   >
//     <ChevronRight className="text-orange-500 w-6 h-6" />
//   </button>
// </div>
//         </div>
//       </div>
//     </section>
//   );
// }



// // src/components/HelpChildrenSection.jsx
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { PrimaryButton } from "../UI/UiComponent";

// export default function NewSection()  {
//   const slides = [
//     {
//       img: "/HeroSection/Hero1.png",
//       title: "SUPPORT CHILDREN’S EDUCATION",
//       subtitle: "Help them stay in school",
//     },
//     {
//       img: "/HeroSection/Hero2.png",
//       title: "Poori Padhai, Desh Ki Bhalai",
//       subtitle: "Help girls complete their education",
//     },
//     {
//       img: "/HeroSection/Hero3.png",
//       title: "Send Children Back to School",
//       subtitle: "Support their learning journey",
//     },
//     {
//       img: "/HeroSection/Hero4.png",
//       title: "Umeed Ki Ek Dor",
//       subtitle: "Give hope and opportunities",
//     },
//     {
//       img: "/HeroSection/Hero5.png",
//       title: "Bright Future for Kids",
//       subtitle: "Create lasting impact",
//     },
//     {
//       img: "/HeroSection/Hero6.png",
//       title: "Empower Young Minds",
//       subtitle: "Strengthen their education",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <div className="w-full py-16 bg-white px-6 lg:px-12">
//       <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-12">
        
//         {/* LEFT SIDE — 25% */}
//         <div className="lg:w-1/5 w-full lg: ">
//           <h3 className="text-4xl font-bold text-gray-800 leading-snug lg:-ml-15">
//             How do you want to help children today?
//           </h3>

//           <p className="text-gray-600 mt-4 text-[17px]">
//             Your smallest contribution makes a big difference to children’s
//             lives. We count on the generosity of people like you to be able to
//             create real change for India’s children!
//           </p>

//           <PrimaryButton className="mt-6  text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition-all">
//             Donate For Happier Childhoods!
//           </PrimaryButton> 
//         </div>

//         {/* RIGHT SIDE — 75% (SLIDER) */}
//         <div className="lg:w-3/5 w-full relative lg:ml-60">
          
//           {/* Slider Image */}
//           <div className="w-full h-[520px] bg-gray-100 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
//             <img
//               src={slides[index].img}
//               alt="slide"
//               className="w-full h-full object-cover rounded-xl"
//             />
//           </div>

//           {/* Title + Subtitle */}
//           <div className="mt-4">
//             <h4 className="text-2xl font-semibold text-gray-800 uppercase">
//               {slides[index].title}
//             </h4>
//             <h6 className="text-gray-600 text-md mt-1">
//               {slides[index].subtitle}
//             </h6>
//           </div>

//          {/* Arrows  */}
// <button
//   onClick={prevSlide}
//   className="absolute top-1/3 -translate-y-1/2 
//              left-[-25px] z-10
//              bg-white w-16 h-16 rounded-full shadow-md 
//              flex items-center justify-center 
//              hover:bg-gray-100 transition"
// >
//   <ChevronLeft className="w-9 h-9 text-orange-600" />
// </button>

// <button
//   onClick={nextSlide}
//   className="absolute top-1/2 -translate-y-1/2
//              left-[-28px] z-10
//              bg-white w-16 h-16 rounded-full shadow-md
//              flex items-center justify-center 
//              hover:bg-gray-100 transition"
// >
//   <ChevronRight className="w-9 h-9 text-orange-600" />
// </button>

//         </div>

//       </div>
//     </div>
//   );
// }



// // src/components/HelpChildrenSection.jsx
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { PrimaryButton } from "../UI/UiComponent";

// export default function NewSection() {
//   const slides = [
//     {
//       img: "/HeroSection/Hero1.png",
//       title: "SUPPORT CHILDREN’S EDUCATION",
//       subtitle: "Help them stay in school",
//     },
//     {
//       img: "/HeroSection/Hero2.png",
//       title: "Poori Padhai, Desh Ki Bhalai",
//       subtitle: "Help girls complete their education",
//     },
//     {
//       img: "/HeroSection/Hero3.png",
//       title: "Send Children Back to School",
//       subtitle: "Support their learning journey",
//     },
//     {
//       img: "/HeroSection/Hero4.png",
//       title: "Umeed Ki Ek Dor",
//       subtitle: "Give hope and opportunities",
//     },
//     {
//       img: "/HeroSection/Hero5.png",
//       title: "Bright Future for Kids",
//       subtitle: "Create lasting impact",
//     },
//     {
//       img: "/HeroSection/Hero6.png",
//       title: "Empower Young Minds",
//       subtitle: "Strengthen their education",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);

//   // Two images at a time (current & next)
//   const secondIndex = (index + 1) % slides.length;

//   return (
//     <div className="w-full py-16 bg-white px-6 lg:px-12">
//       <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-12">

//         {/* LEFT 25% */}
//         <div className="lg:w-1/5 w-full">
//           <h3 className="text-4xl font-bold text-gray-800 leading-snug">
//             How do you want to help children today?
//           </h3>

//           <p className="text-gray-600 mt-4 text-[17px]">
//             Your smallest contribution makes a big difference to children’s lives.
//             We count on the generosity of people like you to create real impact!
//           </p>

//           <PrimaryButton className="mt-6 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-lg transition-all">
//             Donate For Happier Childhoods!
//           </PrimaryButton>
//         </div>

//         {/* RIGHT 75% */}
//         <div className="lg:w-3/5 w-full relative lg:ml-60">

//           {/* SLIDER AREA (2 images side-by-side) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
//             {/* Image 1 */}
//             <div className="w-full h-[520px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={slides[index].img}
//                 className="w-full h-full object-cover"
//                 alt=""
//               />
//               <h4 className="text-xl font-semibold mt-3 uppercase">
//                 {slides[index].title}
//               </h4>
//               <h6 className="text-gray-600 text-md mt-1">
//                 {slides[index].subtitle}
//               </h6>
//             </div>

//             {/* Image 2 */}
//             <div className="w-full h-[520px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src={slides[secondIndex].img}
//                 className="w-full h-full object-cover"
//                 alt=""
//               />
//               <h4 className="text-xl font-semibold mt-3 uppercase">
//                 {slides[secondIndex].title}
//               </h4>
//               <h6 className="text-gray-600 text-md mt-1">
//                 {slides[secondIndex].subtitle}
//               </h6>
//             </div>

//           </div>

//           {/* ARROWS — same your earlier position */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/3 -translate-y-1/2 
//                      left-[-25px] z-10
//                      bg-white w-16 h-16 rounded-full shadow-md 
//                      flex items-center justify-center 
//                      hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-9 h-9 text-orange-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 -translate-y-1/2
//                        left-[-28px] z-10
//                        bg-white w-16 h-16 rounded-full shadow-md
//                        flex items-center justify-center 
//                        hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-9 h-9 text-orange-600" />
//           </button>

//         </div>

//       </div>
//     </div>
//   );
// }



// // src/components/HelpChildrenSection.jsx
// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { PrimaryButton } from "../UI/UiComponent";

// export default function NewSection() {
//   const slides = [
//     {
//       img: "/HeroSection/Hero1.png",
//       title: "SUPPORT CHILDREN’S EDUCATION",
//       subtitle: "Help them stay in school",
//     },
//     {
//       img: "/HeroSection/Hero2.png",
//       title: "Poori Padhai, Desh Ki Bhalai",
//       subtitle: "Help girls complete their education",
//     },
//     {
//       img: "/HeroSection/Hero3.png",
//       title: "Send Children Back to School",
//       subtitle: "Support their learning journey",
//     },
//     {
//       img: "/HeroSection/Hero4.png",
//       title: "Umeed Ki Ek Dor",
//       subtitle: "Give hope and opportunities",
//     },
//     {
//       img: "/HeroSection/Hero5.png",
//       title: "Bright Future for Kids",
//       subtitle: "Create lasting impact",
//     },
//     {
//       img: "/HeroSection/Hero6.png",
//       title: "Empower Young Minds",
//       subtitle: "Strengthen their education",
//     },
//   ];

//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
//   const prevSlide = () =>
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);

//   const secondIndex = (index + 1) % slides.length;

//   return (
//     <div className="w-full py-16 bg-white px-6 lg:px-12">
//       <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-12">

//         {/* LEFT SIDE */}
//         <div className="lg:w-1/5 w-full">
//           <h3 className="text-4xl font-bold text-gray-800 leading-snug">
//             How do you want to help children today?
//           </h3>

//           <p className="text-gray-600 mt-4 text-[17px]">
//             Your smallest contribution makes a big difference to children’s lives.
//             We count on the generosity of people like you to create real impact!
//           </p>

//           <PrimaryButton className="mt-6 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-lg">
//             Donate For Happier Childhoods!
//           </PrimaryButton>
//         </div>

//         {/* RIGHT SIDE SLIDER */}
//         <div className="lg:w-3/5 w-full relative lg:ml-60">

//           {/* SLIDER ROW */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ease-in-out">

//             {/* CARD 1 */}
//             <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 
//                             hover:shadow-xl transition-all duration-300">
//               <div className="w-full h-[480px] overflow-hidden">
//                 <img
//                   src={slides[index].img}
//                   className="w-full h-full object-cover transition-transform duration-500"
//                 />
//               </div>

//               {/* TEXT SECTION */}
//               <div className="px-3 pt-4 pb-2 border-b-4 border-orange-500">
//                 <h4 className="text-xl font-bold uppercase text-gray-800">
//                   {slides[index].title}
//                 </h4>
//                 <h6 className="text-gray-600 text-md mt-1">
//                   {slides[index].subtitle}
//                 </h6>
//               </div>
//             </div>

//             {/* CARD 2 */}
//             <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 
//                             hover:shadow-xl transition-all duration-300">
//               <div className="w-full h-[480px] overflow-hidden">
//                 <img
//                   src={slides[secondIndex].img}
//                   className="w-full h-full object-cover transition-transform duration-500"
//                 />
//               </div>

//               {/* TEXT SECTION */}
//               <div className="px-3 pt-4 pb-2 border-b-4 border-orange-500">
//                 <h4 className="text-xl font-bold uppercase text-gray-800">
//                   {slides[secondIndex].title}
//                 </h4>
//                 <h6 className="text-gray-600 text-md mt-1">
//                   {slides[secondIndex].subtitle}
//                 </h6>
//               </div>
//             </div>
//           </div>

//           {/* ARROWS – Same Your Position */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/3 -translate-y-1/2 left-[-28px] z-10 
//                        bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center 
//                        hover:bg-gray-100 transition"
//           >
//             <ChevronLeft className="w-9 h-9 text-orange-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 -translate-y-1/2 left-[-28px] z-10 
//                        bg-white w-16 h-16 rounded-full shadow-md flex items-center justify-center 
//                        hover:bg-gray-100 transition"
//           >
//             <ChevronRight className="w-9 h-9 text-orange-600" />
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }












import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {  PrimaryButton } from "./../UI/UiComponent";

const images = [
   {
      img: "/HeroSection/Hero1.png",
      title: "SUPPORT CHILDREN’S EDUCATION",
      subtitle: "Help them stay in school",
    },
    {
      img: "/HeroSection/Hero2.png",
      title: "Poori Padhai, Desh Ki Bhalai",
      subtitle: "Help girls complete their education",
    },
    {
      img: "/HeroSection/Hero3.png",
      title: "Send Children Back to School",
      subtitle: "Support their learning journey",
    },
    {
      img: "/HeroSection/Hero4.png",
      title: "Umeed Ki Ek Dor",
      subtitle: "Give hope and opportunities",
    },
    {
      img: "/HeroSection/Hero5.png",
      title: "Bright Future for Kids",
      subtitle: "Create lasting impact",
    },
    {
      img: "/HeroSection/Hero6.png",
      title: "Empower Young Minds",
      subtitle: "Strengthen their education",
    },
];

export default function ChildrenSupportSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < images.length - 2) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="w-full  py-12 px-6 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* LEFT SIDE – 25% */}
        <div className="col-span-1 lg:pr-6 lg:-mr-50 lg:mt-20 ">
          <h3 className="text-3xl font-bold text-gray-900">
            How do you want to help children today?
          </h3>

          <p className="text-gray-600 text-lg mt-4 leading-relaxed">
            Your smallest contribution makes a big difference to children’s lives.
            We count on the generosity of people like you to be able to create
            real change for India’s children!
          </p>

          <PrimaryButton className="mt-6  text-white px-6 py-4 rounded-lg font-semibold shadow-md rounded-full">
            Donate For Happier Childhoods!
          </PrimaryButton>
        </div>

        {/* RIGHT SIDE – 75% */}
        <div className="col-span-1 lg:col-span-3 lg:ml-60 relative">


           {/* ARROWS – Same Your Position */}
          <button
            onClick={prevSlide}
            className="absolute top-1/3 -translate-y-1/2 left-[-28px] z-10 
                       bg-white w-13 h-13 rounded-full shadow-md flex items-center justify-center 
                       hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-9 h-9 text-orange-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 left-[-28px] z-10 
                       bg-white w-13 h-13 rounded-full shadow-md flex items-center justify-center 
                       hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-9 h-9 text-orange-600" />
          </button>

          {/* IMAGE SLIDER (2 items visible) */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * 50}%)` }}
            >
              {images.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[47%] bg-white rounded-lg shadow-md overflow-hidden border-b-4 border-orange-400"
                >
                  <img
                    src={item.img}
                    className="w-full h-100 object-cover"
                    alt="child"
                  />

                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
                    <h6 className="text-sm text-gray-600 mt-1">{item.subtitle}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
