import JourneyItem from "./JourneyItem";
import JourneyArrow from "./JourneyArrow";

export default function JourneyRow({ data, direction }) {
  return (
    <div className="grid md:grid-cols-5 items-center gap-8">
      {data.map((item, index) => (
        <div key={index} className="flex items-center">
          <JourneyItem item={item} />

          {/* RIGHT / LEFT arrows */}
          {index !== data.length - 1 && (
            <JourneyArrow direction={direction} />
          )}

          
        </div>
      ))}
    </div>
  );
}
 

