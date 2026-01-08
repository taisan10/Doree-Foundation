import JourneyDesktop from "./JourneyDesktop";
import JourneyMobile from "./JourneyMobile";

export default function Journey() {
  return (
    <section className="w-full py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-14 text-gray-900">
        Our Journey
      </h2>

      <div className="hidden md:block">
        <JourneyDesktop />
      </div>

      <div className="block md:hidden">
        <JourneyMobile />
      </div>
    </section>
  );
}
