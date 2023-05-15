import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ slides, title }) => {
  return (
    <>
      <h3 className="slider-title">{title}</h3>
      <Swiper
        className="my-slider"
        modules={[Navigation]}
        spaceBetween={30}
        navigation
        slidesPerGroup={1}
        loop
        autoHeight
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            centeredSlides: true,
            spaceBetween: 10,
          },
          576: {
            slidesPerGroup: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-wrapper">
                <img src={slide.image} alt={`Slide ${slide.id}`} />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
