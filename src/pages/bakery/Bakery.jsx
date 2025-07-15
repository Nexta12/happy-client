import b1 from "@assets/img/b1.png";
import HeroSection from "@components/heroSection/HeroSection";
import BakeryCard from "./components/bakeryCardSection/BakeryCard";
import Cta from "@components/cta/Cta";
import { handleScrollIntoView } from "@utils/helpers";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";
import { useState } from "react";

const Bakery = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <HeroSection
        smallTitle="Freshly Baked Happiness"
        description={
          <>
            Experience the taste of quality, handcrafted bakery <br />
            delights made fresh to bring to your table.
          </>
        }
        bottonText="Explore our bakery products"
        bgImg={b1}
        onClick={() => handleScrollIntoView("bakerCard")}
      />

      <BakeryCard />

      <Cta
        onClick={() => setModalOpen(true)}
        bgImg={b1}
        mainText="Enjoy the best bakery product in town"
        subTitleText="You just need to Call/WhatsApp 09039193613 and we will get the product delivered to you"
        btnText="Order Now"
      />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
         <OrderForm onSuccess={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Bakery;
