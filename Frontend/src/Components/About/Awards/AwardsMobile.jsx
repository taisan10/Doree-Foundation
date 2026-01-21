import { useState } from "react";
import { awardsData } from "./awardsData";

export default function AwardsMobile() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((p) => (p === 0 ? awardsData.length - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p === awardsData.length - 1 ? 0 : p + 1));
  };

  const item = awardsData[index];

  return (
    <div className="max-w-sm mx-auto px-4">
      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
        <img
          src={item.image}
          alt={item.title}
          className="mx-auto h-24 object-contain"
        />

        <h3 className="mt-4 text-lg font-semibold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {item.desc}
        </p>

        <p className="mt-3 text-orange-500 font-bold">
          {item.year}
        </p>
      </div>

      {/* PREV / NEXT BUTTONS */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prev}
          className="px-5 py-2 rounded-full border border-orange-400 text-orange-500 font-semibold hover:bg-orange-50 transition"
        >
          Prev
        </button>

        <button
          onClick={next}
          className="px-5 py-2 rounded-full bg-orange-400 text-white font-semibold hover:bg-orange-500 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
