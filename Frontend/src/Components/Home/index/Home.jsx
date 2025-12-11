import FieldsOfWorkSection from "../Fields";
import ChildrenSupportSection from "../HelpChildren";
// import HomeCarousel from "../HeroSection";
import HeroSection from "../HeroSection2";
import SkillDevelopmentSection from "../Skill";
import WhatWeDoSection from "../Whatwedo";

export function Home(){
  return(
    <div>
      {/* <HomeCarousel /> */}
      <HeroSection />
      <ChildrenSupportSection />
      <WhatWeDoSection />
      <SkillDevelopmentSection />
      {/* <FieldsOfWorkSection /> */}
    </div>
  )
}