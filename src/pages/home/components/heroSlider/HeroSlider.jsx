import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./heroslider.module.scss";
import Button from "@components/button/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroSliderData } from "@data/SliderData";
import { BsArrowRight } from "react-icons/bs";
import CustomArrow from "./customArrow/CustomArrow";
import { useNavigate } from "react-router-dom";


const HeroSlider = () => {
  const navigate = useNavigate();
  const [showDots, setShowDots] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setShowDots(window.innerWidth < 768);
    };

    handleResize(); // check on load

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (slideData) => {
    navigate(slideData.buttonLink || "#");
  };

  const settings = {
    infinite: true,
    dots: showDots,
    speed: 4000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        <ul style={{ display: "flex", justifyContent: "center" }}>{dots}</ul>
      </div>
    ),
  };

  return (
    <div className={styles.heroContainer}>
      <Slider {...settings}>
        {HeroSliderData.map((slide) => (
          <div key={slide.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.slideImage})` }}
            >
              <div className={styles.slideContent}>
                <div className={styles.textContents}>
                  <p className={styles.topText}>{slide.titleText}</p>
                  <h2 className={styles.middleText}>{slide.middleText}</h2>
                  <p className={styles.bottomText}>{slide.bottomText}</p>
                  <Button
                    onClick={() => handleClick(slide)}
                    icon={<BsArrowRight />}
                    className={styles.button}
                  >
                    {slide.buttonText}
                  </Button>
                </div>
                <span></span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
