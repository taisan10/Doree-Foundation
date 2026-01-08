

import { journeyData } from "./journeyData";
import { useState } from "react";

export default function JourneyMobile() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % journeyData.length);
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <img
        src={journeyData[index].image}
        className="w-60 h-60 object-cover rounded-3xl"
        alt=""
      />

      <h3 className="text-2xl font-bold text-orange-600">
        {journeyData[index].year}
      </h3>
      <h3 className="text-2xl font-bold text-orange-400">
        {journeyData[index].title}
      </h3>

      <p className="text-gray-700 text-center">
        {journeyData[index].desc}
      </p>

      <button
        onClick={next}
        className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold"
      >
        Next
      </button>
    </div>
  );
}
