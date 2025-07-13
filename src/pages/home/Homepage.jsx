import BriefIntroSection from "./components/briefIntro/BriefIntroSection"
import HeroSlider from "./components/heroSlider/HeroSlider"
import Experts from "./components/ourExperts/Experts"
import Services from "./components/ourServices/Services"
import Testimonials from "./components/testimonials/Testimonials"


const Homepage = () => {
  return (
    <>
     <HeroSlider/>
     <BriefIntroSection/>
     <Services/>
     <Experts/>
     <Testimonials/>

   
    </>
  )
}

export default Homepage