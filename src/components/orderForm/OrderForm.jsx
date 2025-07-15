import { useState } from "react";
import SubTitle from "@components/subTitle/SubTitle";
import EnhancedInput from "@components/FormUI/EnhancedInput";
import EnhancedSelect from "@components/FormUI/EnhancedSelect";
import EnhancedTextarea from "@components/FormUI/EnhancedTextarea";
import { hallData, orderData } from "@data/OrderData";
import Button from "@components/button/Button";
import styles from "./orderform.module.scss";
import { apiClient } from "@api/apiClient";
import { endpoints } from "@api/endpoints";
import { toast, ToastContainer } from "react-toastify";

const OrderForm = ({ hall = false , onSuccess }) => {
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      ...formDetails,
      orderDate: new Date(),
    };
    try {
      await apiClient.post(endpoints.createOrder, data);

      toast.success("Request Sent");

      setFormDetails({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        choice: "",
        comment: "",
      });

       if (onSuccess) {
        setTimeout(onSuccess, 500);
      }

    } catch (error) {
      toast.error(error.response.data.message || "Internal Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <SubTitle className={styles.title}>Customer Information</SubTitle>
      <div className={styles.formContent}>
        <div className={styles.inputContainer}>
          <EnhancedInput
            onChange={handleOnchange}
            name="fullName"
            value={formDetails.fullName}
            label="Full Name"
            required
          />
          <EnhancedInput
            onChange={handleOnchange}
            label="Email"
            name="email"
            type="email"
            value={formDetails.email}
            required
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
            required
          />
        </div>

        <EnhancedSelect
          name="choice"
          value={formDetails.choice}
          onChange={handleOnchange}
          options={hall ? hallData : orderData}
          label="Order Type"
          placeholder="Select One"
          required
        />

        <EnhancedTextarea
          onChange={handleOnchange}
          name="comment"
          value={formDetails.comment}
          label="More Details"
          placeholder="Enter more details about your order"
        />
        <Button type="submit">
          {loading ? "Please Wait.. " : "Place Order"}
        </Button>
      </div>
    </form>
  );
};

export default OrderForm;
