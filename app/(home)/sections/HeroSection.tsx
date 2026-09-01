"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image, { StaticImageData } from "next/image";
import React from "react";
import Rose1 from "@/assets/hero-img/wp10226355-rose-blackpink-pc-wallpapers.jpg";
import Rose2 from "@/assets/hero-img/n0negirl.png";
import Rose3 from "@/assets/hero-img/wp10226315-rose-blackpink-pc-wallpapers.jpg";
import { Autoplay } from "swiper/modules";

const slides: { src: StaticImageData; position: string }[] = [
  { src: Rose1, position: "object-center" },
  { src: Rose2, position: "object-[center_15%] lg:object-top" },
  { src: Rose3, position: "object-[30%_25%] lg:object-[25%_15%]" },
];

const HeroSection = () => {
  return (
    <section className="relative mt-20 h-[400px] sm:h-[500px] lg:h-[650px]">
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
        className="mySwiper h-full"
      >
        {slides.map(({ src, position }, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover ${position}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
