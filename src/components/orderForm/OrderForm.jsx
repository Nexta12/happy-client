import { useState } from "react";
import SubTitle from "@components/subTitle/SubTitle";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import EnhancedSelect from "@components/FormUI/EnhancedSelect";
import EnhancedTextarea from "@components/FormUI/EnhancedTextarea";
import { hallData, orderData } from "@data/OrderData";
import Button from "@components/button/Button";
import styles from "./orderform.module.scss"

const OrderForm = ({ hall = false}) => {

  const [formDetails, setFormDetails] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    choice: "",
    comment: "",
  });

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      console.log(formDetails);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
          <SubTitle className={styles.title}>Customer Information</SubTitle>
          <div className={styles.formContent}>
            <div className={styles.inputContainer}>
              <EnhancedInput
                onChange={handleOnchange}
                name="fullName"
                value={formDetails.fullName}
                label="Full Name"
              />
              <EnhancedInput
                onChange={handleOnchange}
                label="Email"
                name="email"
                type="email"
                value={formDetails.email}
              />
            </div>
            <div className={styles.inputContainer}>
              <EnhancedInput
                onChange={handleOnchange}
                label="Address"
                name="address"
                value={formDetails.address}
              />
              <EnhancedInput
                onChange={handleOnchange}
                label="Phone"
                name="phone"
                value={formDetails.phone}
              />
            </div>
            
            <EnhancedSelect
             name="choice"
             value={formDetails.order}
              onChange={handleOnchange}
              options={ hall ?  hallData : orderData }
              label="Order Type"
            />

            <EnhancedTextarea
               onChange={handleOnchange}
              name="comment"
              value={formDetails.comment}
              label="More Details"
              placeholder="Enter more details about your order"
            />
            <Button type="submit">Place Order</Button>
          </div>
        </form>
  )
}

export default OrderForm