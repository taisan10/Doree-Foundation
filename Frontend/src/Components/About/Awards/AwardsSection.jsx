// import { useState } from "react";
// import { awardsData } from "./awardsData";
// import AwardsCard from "./AwardsCard";
// import { ArrowLeft, ArrowRight } from "lucide-react";

// export default function AwardsSection() {
//   const [index, setIndex] = useState(0);
//   const [showAll, setShowAll] = useState(false);

//   const prev = () =>
//     setIndex((p) => (p === 0 ? awardsData.length - 1 : p - 1));

//   const next = () =>
//     setIndex((p) => (p === awardsData.length - 1 ? 0 : p + 1));

//   return (
//     <section className="bg-orange-50 py-16">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* HEADING */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
//             Awards & Recognition
//           </h2>

//           <p className="mt-4 text-gray-600">
//             In over 4 decades, Doree has received many awards in recognition
//             of our work towards enabling better futures for underprivileged
//             children.
//           </p>
//         </div>

//         {/* MOBILE / SM SLIDER */}
//         <div className="md:hidden relative flex items-center justify-center">
//           <button
//             onClick={prev}
//             className="absolute left-0 z-10 p-2 bg-white shadow rounded-full"
//           >
//             <ArrowLeft />
//           </button>

//           <AwardsCard award={awardsData[index]} />

//           <button
//             onClick={next}
//             className="absolute right-0 z-10 p-2 bg-white shadow rounded-full"
//           >
//             <ArrowRight />
//           </button>
//         </div>

//         {/* MD / LG GRID */}
//         <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-14">
//           {(showAll ? awardsData : awardsData.slice(0, 4)).map((award) => (
//             <AwardsCard key={award.id} award={award} />
//           ))}
//         </div>

//         {/* BUTTON */}
//         <div className="flex justify-center mt-14">
//           <button
//             onClick={() => setShowAll(!showAll)}
//             className="px-8 py-3 rounded-full bg-yellow-400 text-gray-900 font-semibold hover:bg-yellow-500 transition"
//           >
//             {showAll ? "Show Less" : "See All Our Awards"}
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }



import Desktop from "./AwardsDesktop";
import AwardsMobile from "./AwardsMobile";

export default function AwardsSection() {
  return (
    <section className="bg-orange-50 py-16">
      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#131271]">
          Awards & Recognition
        </h2>

        <p className="mt-4 text-gray-600">
          In over 4 decades, our organisation has received many awards
          recognising our contribution towards social impact and empowerment.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-14 px-4 max-w-7xl mx-auto">
        {/* Mobile / Fold */}
        <div className="md:hidden">
          <AwardsMobile />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
         <Desktop />
        </div>
      </div>

      
    </section>
  );
}
