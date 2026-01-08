import { journeyData } from "./journeyData";
import { useState } from "react";

export default function JourneyMobile() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((p) => (p === 0 ? journeyData.length - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p === journeyData.length - 1 ? 0 : p + 1));
  };

  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <img
        src={journeyData[index].image}
        className="w-60 h-60 object-cover rounded-3xl"
        alt={journeyData[index].title}
      />

      <h3 className="text-2xl font-bold text-orange-600">
        {journeyData[index].year}
      </h3>

      <h3 className="text-xl font-semibold text-orange-400">
        {journeyData[index].title}
      </h3>

      <p className="text-gray-700 text-center">
        {journeyData[index].desc}
      </p>

      <div className="flex gap-4">
        <button
          onClick={prev}
          className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
}
