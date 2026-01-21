export default function JourneyItem({ item }) {
  return (
    <div className="relative group w-48 h-48 flex flex-col items-center">

      {/* DEFAULT VIEW */}
      <img src={item.image} className="w-28 h-28 object-contain" />
      <p className="text-blue-900 text-2xl font-bold mt-3">
        {item.year}
      </p>
      <p className="font-semibold text-black text-center">
        {item.title}
      </p>

      {/* HOVER CARD */}
      <div className="
        absolute inset-0 bg-white rounded-xl shadow-xl p-5
        opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
        transition-all duration-300">
        <h3 className="text-2xl font-bold text-blue-900">
          {item.year}
        </h3>
        <p className="font-semibold text-black mt-2">{item.title}</p>
        <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
      </div>
    </div>
  );
}
