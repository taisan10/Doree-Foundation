import NewSection from "../HelpChildren";
import HomeCarousel from "../HeroSection";
import HeroSection from "../HeroSection2";

export function Home(){
  return(
    <div>
      {/* <HomeCarousel /> */}
      <HeroSection />
      <NewSection />
    </div>
  )
}