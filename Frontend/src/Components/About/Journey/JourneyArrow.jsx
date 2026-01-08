export default function JourneyArrow({ direction }) {
  return (
    <div className="flex items-center">
      {direction === "right" ? (
        <div className="w-20 h-1 bg-orange-400 relative">
          <span className="absolute right-0 -top-2 text-orange-400 text-xl">
           
          </span>
        </div>
      ) : (
        <div className="w-20 h-1 bg-orange-400 relative">
          <span className="absolute left-0 -top-2 text-orange-400 text-xl">
          
          </span>
        </div>
      )}
    </div>
  );
}
