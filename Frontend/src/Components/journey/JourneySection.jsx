// import Arrow from "./Arrow";
// import JourneyItem from "./JourneyStep";
// import { journeyData } from "./journeyData";

// export default function JourneySection() {
//   return (
//     <section className="w-full py-20  overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
//         JOURNEY OF DIFFERENTLY ABLED
//       </h2>

//       <div className="flex items-center px-8 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
//         {journeyData.map((item, index) => (
//           <div key={item.id} className="flex items-center">
//             <JourneyItem {...item} index={index} />

//             {/* Arrow except last */}
//             {index !== journeyData.length - 1 && (
//               <Arrow />
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
//     <section className="w-full py-20 overflow-hidden">
//       <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
//         JOURNEY OF DIFFERENTLY ABLED
//       </h2>

//       <div className="flex items-center px-8 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
//         {journeyData.map((item, index) => (
//           <div key={item.id} className="flex items-center">
//             <JourneyItem {...item} index={index} />
//             {index !== journeyData.length - 1 && <Arrow />}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


import Arrow from "./Arrow";
import JourneyItem from "./JourneyStep";
import { journeyData } from "./journeyData";

export default function JourneySection() {
  return (
    <section className="w-full py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
        JOURNEY OF DIFFERENTLY ABLED
      </h2>

      <div className="grid grid-cols-6 gap-14 max-w-7xl   px-12 lg:ml-30">
        {journeyData.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center">
            <JourneyItem {...item} index={index} />
            {/* Arrow except last */}
            {index !== journeyData.length - 1  && (
              

              <Arrow
  direction={index % 2 === 0 ? "down" : "up"}
  className={index % 2 === 0 ? "mt-12" : "-mt-12"}
/>

            )}
          </div>
        ))}
      </div>
    </section>
  );
}