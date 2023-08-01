import React from "react";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import "./SpecialArea.css";

// swiper imports..
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SpecialArea = ({ categoryItems }) => {
  return (
    <div className="container  pt-5">
      <motion.h1
        className="heading "
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Take a look
      </motion.h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {categoryItems.map((items, i) => {
          return (
            <SwiperSlide key={i}>
              <motion.div
                className="wp-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ easeInOut, duration: i * 0.1 }}
              >
                <img src={items?.imageThumb} alt="slide_image" />
                <h4 className="pt-4">{items?.caption}</h4>
                <Link to={`/country/${items?.urls}`}>
                  <button className="expolre-btn mb-4">Explore</button>
                </Link>
              </motion.div>
            </SwiperSlide>
          );
        })}

        <div className="slider-controler">
          <motion.div
            className="swiper-button-prev slider-arrow"
            // initial={{ opacity: 0, scale: 0 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1 }}
          >
            <ion-icon name="chevron-back-outline"></ion-icon>
          </motion.div>
          <div className="swiper-pagination  "></div>
          <motion.div
            className="swiper-button-next slider-arrow"
            // initial={{ opacity: 0, scale: 0 }}
            // whileInView={{ opacity: 1, scale: 1 }}
            // transition={{ duration: 1 }}
          >
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </motion.div>
        </div>
      </Swiper>
    </div>
  );
};

export default SpecialArea;

{/* <motion.div
  className="swiper-button-next slider-arrow"
  initial={{ opacity: 0, scale: 0 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
>
  <ion-icon name="chevron-forward-outline"></ion-icon>
</motion.div>; */}
