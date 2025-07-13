import { Link, NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "@assets/img/Logo.png";
import Button from "@components/button/Button";
import { FiFacebook, FiInstagram, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavMenu } from "@data/MenuData";
import { useState } from "react";
import Modal from "@components/modal/Modal";
import OrderForm from "@components/orderForm/OrderForm";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);


  return (
    <>
      <section className={styles.section}>
        {/* Top Bar */}
        <div className={styles.topBar}>
          <Link className={styles.socialIcons}>
            <BsTwitterX />
            <span>@happies</span>
          </Link>

          <Link className={styles.socialIcons}>
            <FiFacebook />
            <FiInstagram />
            <span>happies_online</span>
          </Link>

          <Link className={styles.socialIcons}>
            <FiMail />
            <span>happies@gmail.com</span>
          </Link>
        </div>
        <div className={styles.headerWrapper}>
          {/* Header */}
          <div className={styles.header}>
            {/* Logo */}
            <Link to="/" className={styles.logoContainer}>
              <img src={Logo} alt="Logo" className={styles.logo} />
            </Link>

            {/* Desktop Nav */}
            <div className={styles.navlink}>
              {NavMenu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>

            {/* Desktop Button */}
            <div className={styles.rightButton}>
              <Button onClick={() => setModalOpen(true)} variant="orange">
                Order Now
              </Button>
            </div>

            {/* Mobile Toggle */}
            <div
              className={styles.menuToggle}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <IoMdClose /> : <IoMdMenu />}
            </div>
          </div>

          {/* Mobile Menu Dropdown */}

          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              {NavMenu.map((item, i) => (
                <NavLink
                  key={i}
                  to={item.link}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.mobileLink} ${styles.active}`
                      : styles.mobileLink
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              ))}

              {/* Mobile Button */}
              <div className={styles.mobileButton}>
                <Button onClick={() => setModalOpen(true)} variant="orange" className={styles.lightOrange}>
                  Order Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <OrderForm/>
      </Modal>

    </>
  );
};

export default Header;
