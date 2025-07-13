import SubTitle from "@components/subTitle/SubTitle"
import styles from "./testCard.module.scss"
import { BsQuote } from "react-icons/bs"
import { IoMdStar, IoMdStarHalf } from "react-icons/io"

const TestCard = ({ title, description, userImg, userName}) => {
  return (
    <div className={styles.SingleTestCard} >
         <SubTitle>{title}</SubTitle>
          <small>{description}</small>
          <div className={styles.userImgContainer}>
            <BsQuote />
            <img src={userImg} alt="user" />
          </div>

          <div className={styles.userNameContainer}>
            <p>{userName}</p>
            <span><IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStar /> <IoMdStarHalf /> </span>
          </div>
        
        </div>
  )
}

export default TestCard