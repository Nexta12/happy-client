import styles from "./contact.module.scss"

import HeroSection from "@components/heroSection/HeroSection"
import b1 from "@assets/img/b1.png"
import ContactForm from "./components/ContactForm"

const ContactUs = () => {
  return (
    <>
       <HeroSection
        description="Contact Us"
        bgImg={b1}
        className={styles.heroSection}
      />
      <ContactForm/>
    </>
  )
}

export default ContactUs