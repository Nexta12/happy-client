import SubTitle from "@components/subTitle/SubTitle"
import styles from "./herosection.module.scss"
import Button from "@components/button/Button"

const HeroSection = ({ smallTitle, description, bottonText, bgImg, onClick,className }) => {
  return (
    <div className={`${styles.container} ${className}`}  style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }} >
        <p className={styles.smallTitle}>{smallTitle}</p>
        <SubTitle className={styles.description} >{description}</SubTitle>
        {bottonText && (
        <Button onClick={onClick} >{bottonText}</Button>
         )}
    </div>
  )
}

export default HeroSection