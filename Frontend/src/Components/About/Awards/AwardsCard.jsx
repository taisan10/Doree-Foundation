export default function AwardsCard({ award }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">
      <img
        src={award.image}
        alt={award.title}
        className="w-40 h-40 object-contain"
      />

      <p className="text-gray-700 text-sm max-w-xs">
        {award.desc}
      </p>

      <p className="text-[#f76b04] font-bold text-lg">
        {award.year}
      </p>
    </div>
  );
}
