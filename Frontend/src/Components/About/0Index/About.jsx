// import Certificate from "../Awards"
import AwardsSection from "../Awards/AwardsSection"
import Growth from "../Growth"
import InspirationSection from "../Hero"
// import Who from "../Hero2"
import Journey from "../Journey/Journey"
import TeamSlider from "../Main-member"
import VisionMission from "../Our-VisionMission"
// import OurTeamSection from "../Team-member"




export function About(){
  return(
<div className="bg-orange-50" >
<InspirationSection />
{/* <Who /> */}
<Growth />
<VisionMission />
<TeamSlider />
{/* <OurTeamSection /> */}
<Journey />
{/* <Certificate /> */}
<AwardsSection />

</div>
    
  )
}