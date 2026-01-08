
import { journeyData } from "./journeyData";
import JourneyRow from "./JourneyRow";

export default function JourneyDesktop() {
  const row1 = journeyData.slice(0, 5);
  const row2 = journeyData.slice(5, 10).reverse(); // 👈 reverse here

  return (
    <div className="max-w-7xl mx-auto space-y-20">
      <JourneyRow data={row1} direction="right" />
      <JourneyRow data={row2} direction="left" />
    </div>
  );
}
