

import Arrow from "./Arrow";
import JourneyItem from "./JourneyStep";
import { journeyData } from "./journeyData";

export default function JourneySection() {
  return (
    <section className="w-full py-20 bg-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-20">
        JOURNEY OF DIFFERENTLY ABLED
      </h2>

      <div className="grid grid-cols-6 gap-14 max-w-8xl  px-12 lg:mx-10">
        {journeyData.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center mb-15 ">
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