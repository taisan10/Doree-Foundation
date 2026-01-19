

import { journeyData } from "./journeyData";
import { useState, useEffect } from "react";

export default function JourneyMobile() {
  const [index, setIndex] = useState(0);

  // PREV
  const prev = () => {
    setIndex((p) => (p === 0 ? journeyData.length - 1 : p - 1));
  };

  // NEXT
  const next = () => {
    setIndex((p) => (p === journeyData.length - 1 ? 0 : p + 1));
  };

  // AUTO TIMER
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((p) => (p === journeyData.length - 1 ? 0 : p + 1));
    }, 3000); // 3 seconds

    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 px-4">
      <img
        src={journeyData[index].image}
        className="w-60 h-60 object-cover rounded-3xl shadow-lg"
        alt={journeyData[index].title}
      />

      <h3 className="text-2xl font-bold text-orange-600">
        {journeyData[index].year}
      </h3>

      <h3 className="text-xl font-semibold text-orange-400">
        {journeyData[index].title}
      </h3>

      <p className="text-gray-700 text-center max-w-sm">
        {journeyData[index].desc}
      </p>

      {/* CONTROLS */}
      <div className="flex gap-4 mt-2">
        <button
          onClick={prev}
          className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold hover:bg-orange-500 transition"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-6 py-2 rounded-full bg-orange-400 text-white font-semibold hover:bg-orange-500 transition"
        >
          Next
        </button>
      </div>

      {/* PROGRESS LINE */}
      <div className="flex gap-2 mt-4">
        {journeyData.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 w-6 rounded-full cursor-pointer transition
              ${i === index ? "bg-orange-400" : "bg-gray-300"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
