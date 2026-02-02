import { useState } from "react";
import { awardsData } from "./awardsData";

export default function AwardsMobile() {

  const mobileData = [...awardsData].reverse();

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((p) => (p === 0 ? awardsData.length - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p === awardsData.length - 1 ? 0 : p + 1));
  };

  const item = mobileData[index];

  return ( 
    <div className="max-w-sm mx-auto px-4">
      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <img
          src={item.image}
          alt={item.title}
          className="mx-auto h-44 object-contain"
        />

        <h3 className="mt-4 text-lg font-semibold text-[#131271]">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {item.desc}
        </p>

        <p className="mt-3 text-[#f76b01] font-bold">
          {item.year}
        </p>
      </div>

      {/* PREV / NEXT BUTTONS */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-5 py-2 rounded-full border border-[#f76b01] text-[#f76b01] font-semibold hover:bg-[#f76b01] hover:text-white  transtion"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-5 py-2 rounded-full bg-[#f76b01] text-white font-semibold hover:border border-[#f76b01] hover:text-[#f76b01] hover:bg-transparent transition"
        >
          Next
        </button> 
      </div>
    </div>
  );
}
