import Growth from "../Growth"
import InspirationSection from "../Hero"
import TeamSlider from "../Main-member"
import VisionMission from "../Our-VisionMission"
import OurTeamSection from "../Team-member"




export function About(){
  return(
<div className="bg-orange-50" >
<InspirationSection />
<Growth />
<TeamSlider />
{/* <OurTeamSection /> */}
<VisionMission />

</div>
    
  )
}