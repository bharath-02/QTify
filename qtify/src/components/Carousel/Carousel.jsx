import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";


const Carousel = ({ items }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className={styles.swiper}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id} className={styles.slide}>
          {/* Render Card or any other component here */}
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
