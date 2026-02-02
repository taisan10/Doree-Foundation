import Who from "../Hero3";
import OurMethodologySection from "../hnji";
import OurWorkInAction from "../Kpi";
import WhoWeServeSection from "../Our";
import HowWeWorkSection from "../what";



export function WhoWeAre(){
  return(
<div className="bg-orange-50" >

<Who />
<HowWeWorkSection />

{/* <OurMethodologySection /> */}
{/* <WhoWeServeSection /> */}
{/* <OurWorkInAction /> */}

</div>
    
  )
}