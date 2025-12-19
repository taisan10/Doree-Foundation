

// import Arrow from "./Arrow";
// import JourneyItem from "./JourneyStep";
// import { journeyData } from "./journeyData";

// export default function JourneySection() {
//   return (
//     <section className="w-full py-20 bg-white">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
//         JOURNEY OF DIFFERENTLY ABLED
//       </h2>

//       <div className="grid grid-cols-6 gap-14 max-w-8xl  px-12 lg:mx-10">
//         {journeyData.map((item, index) => (
//           <div key={item.id} className="flex flex-col items-center mb-15 ">
//             <JourneyItem {...item} index={index} />
//             {/* Arrow except last */}
//             {index !== journeyData.length - 1  && (
              

//               <Arrow
//   direction={index % 2 === 0 ? "down" : "up"}
//   className={index % 2 === 0 ? "mt-12" : "-mt-12"}
// />

//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import Arrow from "./Arrow";
// import JourneyItem from "./JourneyStep";
// import { journeyData } from "./journeyData";

// export default function JourneySection() {
//   return (
//     <section className="w-full py-20 bg-white">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
//         JOURNEY OF DIFFERENTLY ABLED
//       </h2>

//       {/* ================= MOBILE / SM ================= */}
//       <div className="md:hidden px-5 space-y-10 grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
//         {journeyData.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-lg p-6 text-center border border-sky-100"
//           >
//             <img
//               src={item.image}
//               alt={item.title}
//               className="w-40 mx-auto mb-4"
//             />

//             <h4 className="text-xl font-semibold text-sky-700 mb-2">
//               {item.title}
//             </h4>

//             <p className="text-gray-600 text-sm mb-5">
//               {item.description}
//             </p>

//             {/* Sky blue line */}
//             <div className="w-20 h-1 mx-auto bg-sky-400 rounded-full" />
//           </div>
//         ))}
//       </div>

//       {/* ================= MD / LG / DESKTOP ================= */}
//       <div className="hidden md:block">
//         <div className="grid grid-cols-6 gap-14 max-w-8xl px-12 lg:mx-10">
//           {journeyData.map((item, index) => (
//             <div key={item.id} className="flex flex-col items-center mb-15">
//               <JourneyItem {...item} index={index} />

//               {index !== journeyData.length - 1 && (
//                 <Arrow
//                   direction={index % 2 === 0 ? "down" : "up"}
//                   className={index % 2 === 0 ? "mt-12" : "-mt-12"}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import JourneyItem from "./JourneyStep";
import { journeyData } from "./journeyData";

export default function JourneySection() {
  const [current, setCurrent] = useState(0);

  const [visibleCount, setVisibleCount] = useState(1);

useEffect(() => {
  const update = () => {
    if (window.innerWidth >= 640) {
      setVisibleCount(2); // sm
    } else {
      setVisibleCount(1); // mobile
    }
  };

  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);
const totalSlides = Math.ceil(journeyData.length / visibleCount);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, 3000);

  return () => clearInterval(timer);
}, [visibleCount, totalSlides]);


  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-14">
        JOURNEY OF DIFFERENTLY ABLED
      </h2>

      {/* ================= MOBILE / SM ================= */}
      <div className="md:hidden px-4 overflow-hidden">
        
        {/* SLIDER */}
        <div
  className="flex transition-transform duration-700 ease-in-out"
  style={{
    transform: `translateX(-${current * 100}%)`,
  }}
>

  

          {journeyData.map((item) => (
  <div
    key={item.id}
    className="flex-shrink-0 w-full sm:w-1/2 flex justify-center"
  >
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[92%] text-center">
      <img src={item.image} className="w-36 mx-auto mb-4" />
      <h4 className="text-xl font-semibold text-sky-700">{item.title}</h4>
      <p className="text-sm text-gray-600 mb-4">{item.description}</p>

      {/* inside sky line */}
      <div className="w-[180px] h-[3px] mx-auto bg-sky-400 rounded" />
    </div>
  </div>
))}

        </div> 
        {/* OUTSIDE INDICATOR LINES */}
       <div className="flex justify-center gap-2 mt-6">
  {Array.from({ length: totalSlides }).map((_, i) => (
    <button
      key={i}
      onClick={() => setCurrent(i)}
      className={`h-[4px] w-[34px] transition-all ${

        current === i ? "bg-gray-700" : "bg-gray-300"
      }`}
    />
  ))}
</div>

      </div>

      {/* ================= MD / LG / DESKTOP ================= */}
      <div className="hidden md:block">
        <div className="grid grid-cols-6 gap-14 max-w-8xl px-12 lg:mx-10">
          {journeyData.map((item, index) => (
            <div key={item.id} className="flex flex-col items-center mb-15">
              <JourneyItem {...item} index={index} />

              {index !== journeyData.length - 1 && (
                <Arrow
                  direction={index % 2 === 0 ? "down" : "up"}
                  className={index % 2 === 0 ? "mt-12" : "-mt-12"}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
