import SubTitle from "@components/subTitle/SubTitle";
import styles from "./services.module.scss";
import house from "@assets/img/house.png"
import HeadingText from "@components/headingText/HeadingText";
import ServiceCard from "./servicesCard/ServiceCard";
import c1 from "@assets/img/c1.png"
import c2 from "@assets/img/c2.png"
import c3 from "@assets/img/c3.png"
import { useNavigate } from "react-router-dom";
import { paths } from "@routes/path";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container} >
          <div className={styles.houseContainer}>
            <img src={house} alt="house" />
          </div>

          <div className={styles.cardContainer}>
              <div className={styles.textTop}>
                 <SubTitle font="script">Our Services</SubTitle>
                 <HeadingText>What we do at Happies</HeadingText>
                 <small>At Happies, we believe life is meant to be enjoyed. That is why we create more than just great food and events we host fun hangouts, dinner nights, and engaging social programs that bring people together to relax, connect, and celebrate.</small>
              </div>

              <div className={styles.cards}>
               <ServiceCard onClick={ ()=> navigate(paths.foodmenu)} topButtonText="Food Menu" bodyText="Happies"  footerButtonText="Order Your Delicious Meal Now" bgImg={c1} />

               <ServiceCard onClick={()=> navigate(paths.Bakery)} topButtonText="Bakery" bodyText="Happies"  footerButtonText="Explore Our Tasty Treats" bgImg={c2} />

               <ServiceCard onClick={()=> navigate(paths.hallRentals)} topButtonText="Hall Rentals" bodyText="Happies"  footerButtonText="Book Your Perfect Event Today" bgImg={c3} />
              </div>
          </div>
        
    </div>
  )
}

export default Services