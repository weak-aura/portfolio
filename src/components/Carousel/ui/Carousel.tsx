// import React from 'react';
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {SlidesTypes} from "../../../assets/img.ts";

interface CarouserProps {
  slides: SlidesTypes[]
}

export const Carousel = ({slides}: CarouserProps) => {

  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={1}
    >
      {slides.map((el, i) => (
        <SwiperSlide key={i}>
          <img className="w-full h-full object-contain select-none" src={el.imageUrl} alt="img"/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

