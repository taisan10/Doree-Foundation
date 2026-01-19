

export default function JourneyArrow({ direction }) {
  if (direction === "down") {
    return (
      <div className="flex ">
        <div className="relative h-14 w-1 bg-orange-400">
          {/* Arrow Head */}
          <div className="absolute -bottom-2 left-1/3 -translate-x-1/2 
                          w-0 h-0 
                          border-l-6 border-r-6 border-t-8
                          border-l-transparent border-r-transparent border-t-orange-400" />
                        
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div
        className={`relative h-1 bg-orange-400 ${
          direction === "right" ? "w-10" : "w-10"
        }`}
      >
        {/* Arrow Head */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 
            w-0 h-0 
            ${
              direction === "right"
                ? "right-0 border-t-6 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-orange-400"
                : "left-0 border-t-6 border-b-6 border-r-8 border-t-transparent border-b-transparent border-r-orange-400"
            }
          `}
        />
      </div>
    </div>
  );
}
