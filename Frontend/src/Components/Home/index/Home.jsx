import JourneySection from "../journey/JourneySection";
import FieldsOfWorkSection from "../Fields";
import ChildrenSupportSection from "../HelpChildren";
// import HomeCarousel from "../HeroSection";
import HeroSection from "../HeroSection2";
import StoriesSection from "../Stories/StoriesSection";
// import SkillDevelopmentSection from "../Skill";
// import WhatWeDoSection from "../Whatwedo";
import Work5YearSection from "../Work5Year";

export function Home(){
  return(
    <div  className="bg-orange-100">
      {/* <HomeCarousel /> */}
      <HeroSection />
      <ChildrenSupportSection />
      {/* <WhatWeDoSection /> */}
      {/* <SkillDevelopmentSection /> */}
      <FieldsOfWorkSection />
      <JourneySection />
      <Work5YearSection />
      <StoriesSection />

      
    </div>
  )
}