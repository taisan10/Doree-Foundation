

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

  // auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % journeyData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
              className="min-w-full sm:min-w-[50%] flex justify-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center border border-sky-100 w-[92%]">
                
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-36 mx-auto mb-4"
                />

                <h4 className="text-xl font-semibold text-sky-700 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                {/* INSIDE SKY LINE */}
                <div className="w-[80px] h-[4px] mx-auto bg-sky-400 rounded" />
              </div>
            </div>
          ))}
        </div>

        {/* OUTSIDE INDICATOR LINES */}
        <div className="flex justify-center gap-2 mt-6">
          {journeyData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-[2px] w-[14px] transition-all ${
                current === index
                  ? "bg-gray-700"
                  : "bg-gray-300"
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
