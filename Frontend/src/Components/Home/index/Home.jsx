import JourneySection from "../../journey/JourneySection";
import FieldsOfWorkSection from "../Fields";
import ChildrenSupportSection from "../HelpChildren";
// import HomeCarousel from "../HeroSection";
import HeroSection from "../HeroSection2";
import StoriesSection from "../s/StoriesSection";
import SkillDevelopmentSection from "../Skill";

import WhatWeDoSection from "../Whatwedo";

export function Home(){
  return(
    <div  className="bg-orange-100">
      {/* <HomeCarousel /> */}
      <HeroSection />
      <ChildrenSupportSection />
      <WhatWeDoSection />
      <SkillDevelopmentSection />
      <FieldsOfWorkSection />
      <StoriesSection />
      <JourneySection />
    </div>
  )
}