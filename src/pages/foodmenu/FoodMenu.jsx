import HeroSection from "@components/heroSection/HeroSection"
import b1 from "@assets/img/b1.png"
import FoodCard from "./components/foodCardSection/FoodMenuCard"
import MenuList from "./components/menuList/MenuList"
import { handleScrollIntoView } from "@utils/helpers"


const FoodMenu = () => {

  return (
    <>

     <HeroSection smallTitle="Our Delicious Food Menu"  description={
    <>
      Freshly made, beautifully served. Choose from our <br />
      wide selection of meals and order instantly.
    </>
  } bottonText="Explore our Food Menu" bgImg={b1} onClick={()=> handleScrollIntoView("Menu-List")} />
   <FoodCard/>
   <MenuList/>
    </>
  )
}

export default FoodMenu