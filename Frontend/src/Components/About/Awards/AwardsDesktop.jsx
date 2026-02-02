import { awardsData } from "./awardsData";
import AwardsCard from "./AwardsCard";
import { useState } from "react";

export default function Desktop(){

    const [showAll, setShowAll] = useState(false);

  return(
      <section className="bg-orange-50 py-16">
        
          <div className="max-w-7xl mx-auto px-4">

<div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-1">
          {(showAll ? awardsData : awardsData.slice(0, 4)).map((award) => (
            <AwardsCard key={award.id} award={award} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-14">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full bg-[#f76b04] text-gray-100 font-semibold hover:bg-[#131271] transition"
          >
            {showAll ? "Show Less" : "See All Our Awards"}
          </button>
        </div>

      </div>
    </section>
  )
}