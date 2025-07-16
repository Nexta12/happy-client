import styles from "./foodMenuDetails.module.scss";
import { IoChevronBackOutline } from "react-icons/io5";
import Button from "@components/button/Button";
import { FiClipboard, FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { FoodData } from "@data/FoodListData";
import HeadingText from "@components/headingText/HeadingText";
import { paths } from "@routes/path";
import { useState } from "react";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";

const FoodDetails = () => {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);

  const foodDetails = FoodData.find((item) => item.id === id);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Link to={paths.foodmenu}>
            <IoChevronBackOutline />
          </Link>
          <img src={foodDetails.menuImg} alt="food" />
        </div>
        <div className={styles.textContentWrapper}>
          <HeadingText className={styles.title}>
            {foodDetails?.title}
          </HeadingText>
          <p>{foodDetails.description}</p>
          <p className={styles.price}>{foodDetails.price}</p>

          <div className={styles.actionBtns}>
            <Button
              onClick={() =>
                (window.location.href = `tel:${
                  import.meta.env.VITE_CONTACT_PHONE
                }`)
              }
            >
              <div className={styles.btnContentLeft}>
                <FiPhoneCall />
              </div>
              <div className={styles.btnContentRight}>
                <span>Call to Order</span>
                {/* <span>09019010101</span> */}
              </div>
            </Button>

            <Button
              onClick={() => {
                const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE.replace(
                  /[^\d]/g,
                  ""
                );
                const defaultMessage = encodeURIComponent(
                  "Hello, I want to place an order."
                );
                const whatsappURL = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

                window.open(whatsappURL, "_blank");
              }}
            >
              <div className={styles.btnContentLeft}>
                <FaWhatsapp />
              </div>
              <div className={styles.btnContentRight}>
                <span>WhatsApp to Order</span>
              </div>
            </Button>

            <Button onClick={() => setModalOpen(true)}>
              <div className={styles.btnContentLeft}>
                <FiClipboard />
              </div>
              <div className={styles.btnContentRight}>
                <span>Order Request Form</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderForm
          onSuccess={() => setModalOpen(false)}
          defaultChoice={foodDetails?.title}
        />
      </Modal>
    </>
  );
};

export default FoodDetails;
