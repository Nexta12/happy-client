import { Link, NavLink } from "react-router-dom";
import styles from "./footer.module.scss";
import Logo from "@assets/img/Logo.png";
import SubTitle from "@components/subTitle/SubTitle";
import { NavMenu } from "@data/MenuData";
import f1 from "@assets/img/f1.png";
import { TbSeparator } from "react-icons/tb";
import { openHours } from "@data/OpeningHours";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <Link to="/">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </Link>

        <p>
          20, floor, Queenslad Victoria Building.
          <br /> 60 california street california USA
        </p>

        <div>
          <div className={styles.contactInfo}>
            <span>Phone:</span>
            <span>+234 000 000 0000</span>
          </div>

          <div className={styles.contactInfo}>
            <span>Email:</span>
            <span>support@happiescreation</span>
          </div>
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <div className="">
          <SubTitle className={styles.headingTitle}> LINKS </SubTitle>
          <TbSeparator />
        </div>
        <div className={styles.navItems}>
          {NavMenu.map((item) => (
            <NavLink
              key={item.title}
              to={item.link}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <div className="">
          <SubTitle className={styles.headingTitle}> INSTAGRAM FEEDS</SubTitle>
          <TbSeparator />
        </div>
        <div className={styles.feeds}>
          {/* <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/xyz/" data-instgrm-version="14"></blockquote>
         <script async src="//www.instagram.com/embed.js"></script> */}

          <img src={f1} alt="feed" />
          <img src={f1} alt="feed" />
          <img src={f1} alt="feed" />
          <img src={f1} alt="feed" />
          <img src={f1} alt="feed" />
          <img src={f1} alt="feed" />
        </div>
      </div>

      <div className={styles.sectionContainer}>
        <div className="">
          <SubTitle className={styles.headingTitle}>OPEN HOURS</SubTitle>
          <TbSeparator />
        </div>
        <div className={styles.openHours}>
          {openHours.map((item, index) => (
            <div key={index} className={styles.hourRow}>
              <span>{item.day}</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
