// export default function JourneyRow({ data, direction }) {
//   return (
//     <div className="relative flex justify-between items-center gap-10">
      
//       {/* Animated Arrow */}
//       <div
//         className={`absolute top-1/2 -translate-y-1/2 
//         ${direction === "right" ? "left-0 animate-moveRight" : "right-0 animate-moveLeft"}`}
//       >
//         <ChevronRight className="text-gray-300 w-10 h-10" />
//       </div>

//       {data.map((item, i) => (
//         <JourneyItem key={i} item={item} />
//       ))}
//     </div>
//   );
// }



import JourneyItem from "./JourneyItem";
import JourneyArrow from "./JourneyArrow";

export default function JourneyRow({ data, direction }) {
  return (
    <div className="relative flex items-center justify-between">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-6">
          <JourneyItem item={item} />

          {index !== data.length - 1 && (
            <JourneyArrow direction={direction} />
          )}
        </div>
      ))}
    </div>
  );
}
