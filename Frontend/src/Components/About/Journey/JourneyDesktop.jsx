import { journeyData } from "./journeyData";
import JourneyRow from "./JourneyRow";
import JourneyArrow from "./JourneyArrow";

export default function JourneyDesktop() {
  const row1 = journeyData.slice(0, 5);
  const row2 = journeyData.slice(5, 10).reverse();

  return (
    <div className="relative md:max-w-4xl lg:max-w-7xl mx-auto space-y-32">

      {/* ROW 1 */}
      <JourneyRow data={row1} direction="right" />

      {/* DOWN ARROW – CENTERED */}
      <div className="absolute right-[125px] -translate-x-1/2 top-[220px]">
        <JourneyArrow direction="down" />
      </div>

      {/* ROW 2 */}
      <JourneyRow data={row2} direction="left" />

    </div>
  );
}
