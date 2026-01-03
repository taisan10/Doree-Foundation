
export default function JourneyItem({ title, image, index }) {
  const isTop = index % 2 === 0;

  return (
    <div className={`relative flex flex-col items-center w-[200px] ${isTop ? "-mt-10" : "mt-30"}`}>
      {/* Card */}
      <div className=" p-3 w-[140px] h-[140px] flex items-center justify-center transition-transform duration-300 hover:scale-115">
        <img src={image} alt={title} className="max-h-full object-contain" />
      </div>

      {/* Dotted Line */}
      <div className="w-px h-18 border-l-2 border-dashed border-cyan-400 my-2" />

      {/* Dot + Rotating Ring */}
      <div className="relative w-6 h-6 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-sky-500 z-10"></div>
        <div className="absolute inset-0 border-3 border-dotted border-sky-400 rounded-full animate-spin"></div>
      </div>

      {/* Title */}
      <h4 className="mt-3 text-lg font-semibold text-indigo-900 text-center">{title}</h4>
    </div>
  );
}