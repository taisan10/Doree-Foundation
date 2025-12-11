

import  { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {  PrimaryButton } from "./../UI/UiComponent";

const images = [
   {
      img: "/HeroSection/Hero1.png",
      title: "SUPPORT CHILDREN’S EDUCATION",
      subtitle: "Help them stay in school",
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
    {
      img: "/HeroSection/Hero2.png",
      title: "Poori Padhai, Desh Ki Bhalai",
      subtitle: "Help girls complete their education",
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
    <section className="w-full  py-12 px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-4   gap-10">

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
            className="absolute top-40 -translate-y-1/2 left-[-24px] z-10 
                       bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center 
                       hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-8 h-8 text-orange-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 left-[-24px] z-10 
                       bg-white w-12 h-12 rounded-full shadow-md flex items-center justify-center 
                       hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-8 h-8 text-orange-600" />
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
                    className="w-full h-90 object-cover"
                    alt="child"
                  />

                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-900 flex items-center justify-center">{item.title}</h4>
                    <h6 className="text-sm text-gray-600 mt-1 flex items-center justify-center">{item.subtitle}</h6>
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





































// import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { PrimaryButton } from "./../UI/UiComponent";

// const images = [
//   {
//     img: "/HeroSection/Hero1.png",
//     title: "SUPPORT CHILDREN’S EDUCATION",
//     subtitle: "Help them stay in school",
//   },
//   {
//     img: "/HeroSection/Hero2.png",
//     title: "Poori Padhai, Desh Ki Bhalai",
//     subtitle: "Help girls complete their education",
//   },
//   {
//     img: "/HeroSection/Hero3.png",
//     title: "Send Children Back to School",
//     subtitle: "Support their learning journey",
//   },
//   {
//     img: "/HeroSection/Hero4.png",
//     title: "Umeed Ki Ek Dor",
//     subtitle: "Give hope and opportunities",
//   },
//   {
//     img: "/HeroSection/Hero5.png",
//     title: "Bright Future for Kids",
//     subtitle: "Create lasting impact",
//   },
//   {
//     img: "/HeroSection/Hero6.png",
//     title: "Empower Young Minds",
//     subtitle: "Strengthen their education",
//   },
// ];

// export default function ChildrenSupportSection() {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < images.length - 1) setIndex(index + 1);
//   };

//   const prevSlide = () => {
//     if (index > 0) setIndex(index - 1);
//   };

//   return (
//     <section className="w-full py-12 px-4 sm:px-6 lg:px-12">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

//         {/* LEFT SIDE */}
//         <div className="col-span-1 lg:pr-6 lg:mt-20 text-center lg:text-left">
//           <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             How do you want to help children today?
//           </h3>

//           <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
//             Your smallest contribution makes a big difference to children’s lives.
//             We count on the generosity of people like you to be able to create
//             real change for India’s children!
//           </p>

//           <PrimaryButton className="mt-6 px-6 py-3 rounded-full text-white shadow-md">
//             Donate For Happier Childhoods!
//           </PrimaryButton>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="col-span-1 lg:col-span-3 relative">

//           {/* Arrows */}
//           <button
//             onClick={prevSlide}
//             className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 lg:-left-12
//                        bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md
//                        flex items-center justify-center hover:bg-gray-100 transition z-10"
//           >
//             <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 lg:-right-12
//                        bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-md
//                        flex items-center justify-center hover:bg-gray-100 transition z-10"
//           >
//             <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
//           </button>

//           {/* Slider */}
//           <div className="overflow-hidden w-full">
//             <div
//               className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"

//               style={{
//                 transform: `
//                   translateX(-${index * (window.innerWidth < 640 ? 100 : window.innerWidth < 1024 ? 70 : 50)}%)
//                 `,
//               }}
//             >
//               {images.map((item, i) => (
//                 <div
//   key={i}
//   className="
//     bg-white rounded-lg shadow-md overflow-hidden 
//     border-b-4 border-orange-400

//     /* FOLD phones */
//     max-[360px]:min-w-[95%]

//     /* Normal Mobiles (375px - 420px) */
//     max-[420px]:min-w-[96%]

//     /* Mobile (default) */
//     min-w-[96%]

//     /* Small Tablets */
//     sm:min-w-[75%]

//     /* Tablets */
//     md:min-w-[65%]

//     /* Laptop / Desktop (TWO IMAGES VISIBLE) */
//     lg:min-w-[48%]
//   "
// >

//                   <img
//                     src={item.img}
//                     className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
//                     alt="child"
//                   />

//                   <div className="p-4">
//                     <h4 className="text-lg font-bold text-gray-900">{item.title}</h4>
//                     <h6 className="text-sm text-gray-600 mt-1">{item.subtitle}</h6>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
