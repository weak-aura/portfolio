// import React from 'react';
import {Navigation, Pagination} from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import {slides} from "../../../assets/img.ts";


export const Carousel = () => {

  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      pagination={{clickable: true,}}
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((el) => (
        <SwiperSlide key={el.id}>
          <img className="w-[100vw] h-[100vh] object-cover select-none" src={el.imageUrl} alt="img"/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

