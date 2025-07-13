import SubTitle from "@components/subTitle/SubTitle"
import styles from "./testimonial.module.scss"
import HeadingText from "@components/headingText/HeadingText"
import TestCard from "./testimonialCard/TestCard"
import { TestimonilaData } from "@data/TestimonialData"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {

  const settings = {
  dots: true,
  speed: 2000,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};
 
  return (
    <div className={styles.container} >
          <div className={styles.textContent}>
             <SubTitle font="script" >Reviews</SubTitle>
             <HeadingText>Testimonials</HeadingText>
              <small>Real stories from happy clients who have tasted our food, booked our halls, and celebrated with us. <br/> See why they love Happies!</small>
          </div>

          <div className={styles.cardContent}>
            <Slider {...settings} >
            {TestimonilaData.map((item)=>(
               <TestCard key={item.id} title={item.title} description={item.description} userImg={item.userImg} userName={item.userName} />
            ))}
            </Slider>
          </div>
    </div>
  )
}

export default Testimonials