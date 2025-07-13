import styles from "./singleRental.module.scss";
import Button from "@components/button/Button";
import SubTitle from "@components/subTitle/SubTitle";
import { GrCapacity } from "react-icons/gr";
import { FaCar, FaHouseDamage } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";

const SingleRentalCard = ({
  bgImg,
  title,
  address,
  price,
  description,
  btnText,
  capacity,
  parking,
  size,
  onClick
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>

        <div className={styles.imgWrapper}>
          <img src={bgImg} alt="Halls" />
          <p>Happies</p>
        </div>

        <div className={styles.textContent}>
          
          <div className={styles.titleTop}>
            <div className={styles.titleLeft}>
              <SubTitle>{title}</SubTitle>
              <small>{address}</small>
            </div>

            <div className={styles.price}>
              <p>{price}</p>
            </div>
          </div>

          <small>{description}</small>

          <div className={styles.recreation}>
            <span></span>

            <div className={styles.content}>
              <span>Happies Creation</span>
              <div className={styles.contactPhone}>
                <PiPhoneCallLight />
                <span> 09034593036</span>
              </div>
            </div>
          </div>
          <Button onClick={onClick} >{btnText}</Button>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.footerDetails}>
          <GrCapacity />
          <span>{capacity}</span>
        </div>

        <div className={styles.footerDetails}>
          <FaCar />
          <span>{parking}</span>
        </div>
        <div className={styles.footerDetails}>
          <FaHouseDamage />
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleRentalCard;
