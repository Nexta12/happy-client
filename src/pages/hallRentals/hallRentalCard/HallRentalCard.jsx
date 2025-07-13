import SubTitle from "@components/subTitle/SubTitle";
import styles from "./hallrentalCard.module.scss";
import SingleRentalCard from "./singleRentalCard/SingleRentalCard";
import { HallRentalData } from "@data/HallRentalData";
import { useNavigate } from "react-router-dom";
import { paths } from "@routes/path";

const HallRentalCard = () => {
const navigate = useNavigate();

  const handleOnclick = (id) =>{
     navigate(`${paths.hallRentals}/${id}`)
  };

  return (
    <div className={styles.container} id="HallsForRent" >
      <SubTitle font="script">Available Halls for Rentage</SubTitle>
      <small>
        At Happies Hall Rentals, we are committed to creating spaces where
        members can enjoy more than just study time. That is why we host a range
        of social events hangouts, get-togethers, dinner nights, and more
        designed to build strong social connections and memorable experiences.
      </small>

      <div>
        {HallRentalData.map((item) => (
          <SingleRentalCard
            key={item.id}
            bgImg={item.bgImg}
            title={item.title}
            address={item.address}
            price={item.price}
            description={item.description}
            btnText={item.btnText}
            capacity={item.capacity}
            parking={item.parking}
            size={item.size}
            onClick={() => handleOnclick(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default HallRentalCard;
