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
import DesktopHero1 from "@/assets/hero-img/desktop/image-1.png";
import DesktopHero2 from "@/assets/hero-img/desktop/image-2.png";
import DesktopHero3 from "@/assets/hero-img/desktop/image-3.png";
import { Autoplay } from "swiper/modules";

type Slide = { src: StaticImageData; position: string };

const slides: Slide[] = [
  { src: Rose1, position: "object-center" },
  { src: Rose2, position: "object-[center_15%] lg:object-top" },
  { src: Rose3, position: "object-[30%_25%] lg:object-[25%_15%]" },
];

const desktopSlides: Slide[] = [
  { src: DesktopHero1, position: "object-center" },
  { src: DesktopHero2, position: "object-center" },
  { src: DesktopHero3, position: "object-center" },
];

const HeroSwiper = ({
  slides,
  priority,
}: {
  slides: Slide[];
  priority: boolean;
}) => (
  <Swiper
    centeredSlides={true}
    loop
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
            priority={priority && index === 0}
            sizes="100vw"
            className={`object-cover ${position}`}
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

const HeroSection = () => {
  return (
    <section className="relative mt-20 aspect-video lg:aspect-auto lg:h-[650px]">
      <div className="h-full lg:hidden">
        <HeroSwiper slides={slides} priority />
      </div>
      <div className="hidden h-full lg:block">
        <HeroSwiper slides={desktopSlides} priority={false} />
      </div>
    </section>
  );
};

export default HeroSection;
