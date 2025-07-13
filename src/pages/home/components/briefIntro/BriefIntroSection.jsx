
import SubTitle from "@components/subTitle/SubTitle"
import styles from "./briefInfo.module.scss"
import cooker from "@assets/img/cooker.png"
import HeadingText from "@components/headingText/HeadingText"

const BriefIntroSection = () => {
  return (
    <div className={styles.container} >

          <div className={styles.imgContainer}>
            <img src={cooker} alt="chef" />
          </div>

          <div className={styles.textContent}>
          <SubTitle font="script" className={styles.subTitle} >Brief Intro</SubTitle>
          <HeadingText>WELCOME TO HAPPIES</HeadingText>
          <p className={styles.paragraphText} >Where Every Moment is a Delight</p>
          <small>Welcome to Happies, your one-stop destination for unforgettable experiences! We specialize in creating delightful moments with our top-tier food services, artisanal bakery delights, and exceptional event planning. Whether you are craving freshly baked treats, hosting a special celebration, or need a stunning venue for your next big event, Happies delivers quality, creativity, and a sprinkle of joy in every detail. Let us make your next occasion truly </small>

          </div>
    </div>
  )
}

export default BriefIntroSection