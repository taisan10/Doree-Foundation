
import Desktop from "./AwardsDesktop";
import AwardsMobile from "./AwardsMobile";

export default function AwardsSection() {
  return (
    <section className="bg-orange-50 py-16">
      {/* HEADING */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#131271]">
          Awards & Recognition
        </h2>

        <p className="mt-4 text-gray-600">
          In over 4 decades, our organisation has received many awards
          recognising our contribution towards social impact and empowerment.
        </p>
      </div>

      {/* CONTENT */}
      <div className="mt-14 px-4 max-w-7xl mx-auto">
        {/* Mobile / Fold */}
        <div className="md:hidden">
          <AwardsMobile />
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
         <Desktop />
        </div>
      </div>

      
    </section>
  );
}
