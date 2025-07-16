import SubTitle from "@components/subTitle/SubTitle";
import styles from "./halldetail.module.scss";
import { BsChevronLeft } from "react-icons/bs";
import { GrCapacity } from "react-icons/gr";
import { FaCar, FaHouseDamage } from "react-icons/fa";
import Button from "@components/button/Button";
import CollapsableBox from "@components/collapsable/Collapsable";
import ComplexSlider from "@components/detailedSlider/ComplexSlider";
import { useState } from "react";

import hd1 from "@assets/img/hd1.png";
import hd2 from "@assets/img/hd2.png";
import hd3 from "@assets/img/hd3.png";
import hd4 from "@assets/img/hd4.png";
import hd5 from "@assets/img/hd5.png";

import { Link, useParams } from "react-router-dom";
import { HallRentalData } from "@data/HallRentalData";
import { paths } from "@routes/path";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";

const HallDetails = () => {
  const { id } = useParams();
  const [isModalOpen, setModalOpen] = useState(false);

  const currentHall = HallRentalData.find((hall) => hall.id === id);

  const dummyProperty = {
    title: "Modern Apartment",
    media: new Array(5).fill(""),
    otherImages: [hd1, hd2, hd3, hd4, hd5],
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? dummyProperty.otherImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === dummyProperty.otherImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div>
            <Link to={paths.hallRentals}>
              <div className={styles.goBackBtn}>
                <BsChevronLeft />
                <span>Back to Hall List</span>
              </div>
            </Link>
            <div className={styles.titleDetails}>
              <div className={styles.titleDetailsLeft}>
                <div className={styles.mainTitle}>
                  <SubTitle>{currentHall.title}</SubTitle>
                  <span>({currentHall.capacity})</span>
                </div>

                <small>{currentHall.address}</small>
              </div>

              <div className={styles.titleDetailsRight}>
                <p>{currentHall.price}</p>
                <small>Per Day</small>
              </div>
            </div>
          </div>

          <div className={styles.slider}>
            <ComplexSlider
              property={dummyProperty}
              currentImageIndex={currentImageIndex}
              setCurrentImageIndex={setCurrentImageIndex}
              setShowFullScreen={() => {}}
              prevImage={prevImage}
              nextImage={nextImage}
            />
          </div>
          <div className={styles.bottomSection}>
            <div className={styles.footerDetails}>
              <GrCapacity />
              <span>1000 capacity</span>
            </div>

            <div className={styles.footerDetails}>
              <FaCar />
              <span>20 cars available parking space</span>
            </div>
            <div className={styles.footerDetails}>
              <FaHouseDamage />
              <span>6,500 sqm Covered Area</span>
            </div>
          </div>
          <Button onClick={() => setModalOpen(true)}>Book Reservation</Button>

          <CollapsableBox title="Property Description">
            A capacity space that can take indoor over 3000 persons and outdoor
            over 2500 persons Fully air conditioner
            <br />
            Sound system <br />
            Stand by generator Adequate water,light and security
            <br />
            It good for church use
            <br />
            Rent 100m x 2yrs
            <br />
            Agency 10%
            <br />
            Legal 10%
            <br />
            Its comes with a very big hall
            <br />
            A children and teneger halls
            <br />
            Over 3 admin offices
            <br />
            Mobile container offices
            <br />
            Its has 6 male and 6 female tiolet and bathrooms
            <br />
            Has over 3 office
            <br />
            A security house
            <br />
            It has about 6 relaxation places
            <br />
            The compound can take over 2000 cars
            <br />
            Its can be use for wedding church programs seminars etc
            <br />
          </CollapsableBox>
          <CollapsableBox title="Property Details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            cupiditate minima voluptate aliquid numquam tenetur reiciendis aut,
            modi animi quae quam facere omnis officia repudiandae suscipit iusto
            molestias ratione nesciunt, quo vitae debitis! Excepturi
            necessitatibus consequuntur iure, deleniti, consectetur omnis totam
            expedita dicta architecto amet saepe aliquam impedit? Ipsa cumque
            consequuntur rem nisi illo eos excepturi aut neque, aliquam hic
            eius, ex quod corporis. Quibusdam beatae illum, cupiditate rerum
            accusantium amet quasi dignissimos expedita eius cumque tempore
            tempora ipsa quidem atque voluptates quia. Atque laudantium enim
            aperiam corporis a excepturi animi saepe expedita adipisci porro
            repellendus consectetur eius, veniam natus.
          </CollapsableBox>
          <CollapsableBox title="Terms of Contract">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            cupiditate minima voluptate aliquid numquam tenetur reiciendis aut,
            modi animi quae quam facere omnis officia repudiandae suscipit iusto
            molestias ratione nesciunt, quo vitae debitis! Excepturi
            necessitatibus consequuntur iure, deleniti, consectetur omnis totam
            expedita dicta architecto amet saepe aliquam impedit? Ipsa cumque
            consequuntur rem nisi illo eos excepturi aut neque, aliquam hic
            eius, ex quod corporis. Quibusdam beatae illum, cupiditate rerum
            accusantium amet quasi dignissimos expedita eius cumque tempore
            tempora ipsa quidem atque voluptates quia. Atque laudantium enim
            aperiam corporis a excepturi animi saepe expedita adipisci porro
            repellendus consectetur eius, veniam natus.
          </CollapsableBox>
          <Button onClick={() => setModalOpen(true)}>Book Reservation</Button>
          <div>
            <Link to={paths.hallRentals}>
              <div className={styles.goBackBtn}>
                <BsChevronLeft />
                <span>Back to Hall List</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
         <OrderForm hall={true}  onSuccess={() => setModalOpen(false)}  defaultChoice={currentHall.title} />
      </Modal>
    </>
  );
};

export default HallDetails;
