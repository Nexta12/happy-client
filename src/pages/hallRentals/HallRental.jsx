import b1 from "@assets/img/b1.png";
import s2 from "@assets/img/sliders/s2.png";
import Cta from "@components/cta/Cta";
import HeroSection from "@components/heroSection/HeroSection";
import HallRentalCard from "./hallRentalCard/HallRentalCard";
import { handleScrollIntoView } from "@utils/helpers";
import { useState } from "react";
import OrderForm from "@components/orderForm/OrderForm";
import Modal from "@components/modal/Modal";

const HallRental = () => {
    const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <HeroSection
        smallTitle="Celebrate Lifes Moments in Our Stunning Venues"
        description={
          <>
            Ideal Venues for Unforgettable Events, Whether <br />
            Intimate Gatherings or Grand Celebrations.
          </>
        }
        bottonText="Explore available hall"
        bgImg={s2}
        onClick={()=> handleScrollIntoView("HallsForRent")}
      />

      <HallRentalCard/>

      <Cta
       onClick={()=> setModalOpen(true)}
        bgImg={b1}
        mainText="Enjoy the best bakery product in town"
        subTitleText="You just need to Call/WhatsApp 09039193613 and we will get the product delivered to you"
        btnText="Order Now"
      />

         <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderForm/>
      </Modal>
    </>
  );
};

export default HallRental;
