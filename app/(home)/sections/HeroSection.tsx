"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import React from "react";
import Rose1 from "@/assets/hero-img/wp10226355-rose-blackpink-pc-wallpapers.jpg";
import Rose2 from "@/assets/hero-img/n0negirl.png";
import Rose3 from "@/assets/hero-img/wp10226315-rose-blackpink-pc-wallpapers.jpg";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  return (
    <section className=" mt-20 max-h-[650px] h-full">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="  lg:h-[650px] lg:max-h-[650px] md:max-h-[650px] ">
            <Image
              src={Rose1}
              alt=""
              className=" object-contain lg:object-cover 2xl:object-fill  object-top lg:object-[0px_-240px] h-[768px] w-full max-w-full mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  lg:h-[650px] lg:max-h-[650px] md:max-h-[650px] ">
            <Image
              src={Rose2}
              alt=""
              className=" object-contain lg:object-cover 2xl:object-fill  object-top lg:object-bottom h-[768px] max-w-full w-full mx-auto"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="  lg:h-[650px] lg:max-h-[650px] md:max-h-[650px] ">
            <Image
              src={Rose3}
              alt=""
              className=" object-contain lg:object-cover 2xl:object-fill  object-top lg:object-bottom h-[768px] max-w-full w-full mx-auto"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HeroSection;
