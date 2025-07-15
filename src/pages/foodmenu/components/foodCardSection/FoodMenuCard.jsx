import SubTitle from "@components/subTitle/SubTitle";
import styles from "./foodmenu.module.scss";
import ServiceCard from "@pages/home/components/ourServices/servicesCard/ServiceCard";
import { FoodMenuData } from "@data/OurFoodMenuData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";
import { useState } from "react";

const FoodCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const settings = {
    dots: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.containerWrapper}>
        <div className={styles.containerInner}>
          <SubTitle font="script">Our Food Menu</SubTitle>

          <small>
            At Happies, we believe good food brings people together. Our menu is
            crafted to spark joy and shared moments whether casual bites or
            hearty dishes perfect for hangouts, get-togethers, and dinners with
            great company.
          </small>

          <div className={styles.cards}>
            <Slider {...settings}>
              {FoodMenuData.map((item) => (
                <ServiceCard
                  key={item.id}
                  topButtonText={item.title}
                  bodyText="Happies"
                  footerButtonText={item.btnText}
                  bgImg={item.bgImg}
                  className={styles.serviceCard}
                  onClick={() => setModalOpen(true)}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderForm onSuccess={() => setModalOpen(false)} />
      </Modal>
    </>
  );
};

export default FoodCard;
