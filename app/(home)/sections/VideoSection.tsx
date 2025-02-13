"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import apt from "@/assets/video-cover-img/apt.png";
import toxic from "@/assets/video-cover-img/toxic.jpg";
import nonegirl from "@/assets/video-cover-img/n0negirl.png";
import play from "@/assets/icons/play.svg";
import Link from "next/link";

const videoData = [
  { id: 1, title: "ROSÉ & Bruno Mars - APT.", image: apt },
  { id: 2, title: "ROSÉ - toxic till the end", image: toxic },
  { id: 3, title: "ROSÉ - number one girl", image: nonegirl },
];

const VideoSection = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      if (typeof swiperInstance.params.navigation === "object") {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto max-w-6xl pt-16 ">
        {/* ===== Video Header ===== */}
        <div className=" flex justify-between mb-[36px] w-full">
          <h1 className=" font-orpheus font-bold text-[36px]">Video</h1>
          <Link
            href="/videos"
            className=" flex items-center text-[18px] font-twentienty "
          >
            SEE MORE
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 5.75H12.75M12.75 5.75V13.25M12.75 5.75L5.25 13.25"
                stroke="#141414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
      {/* ===== Swiper Slider ===== */}
      <div className="relative">
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1.2}
          centeredSlides={true}
          slideToClickedSlide={true}
          loop
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 },
          }}
          onSwiper={(swiper) => {
            setActiveIndex(swiper.realIndex); // ✅ Sync active index immediately
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
        >
          {videoData.map((video, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index === activeIndex - 1 ||
              (activeIndex === 0 && index === videoData.length - 1);
            const isNext =
              index === activeIndex + 1 ||
              (activeIndex === videoData.length - 1 && index === 0);

            return (
              <SwiperSlide key={video.id}>
                <div
                  className={`relative group overflow-hidden shadow-lg transition-transform duration-500 ${
                    isActive
                      ? "scale-110"
                      : isPrev || isNext
                        ? "scale-75"
                        : "scale-100"
                  }`}
                >
                  <Image
                    src={video.image}
                    // width={800}
                    height={500}
                    alt={video.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-15 transition-all">
                    <Image
                      src={play}
                      width={60}
                      height={60}
                      alt="Play Button"
                      className="cursor-pointer group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
                <p className="text-center my-14 text-lg font-medium font-twentienty md:text-[24px]">
                  {video.title}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/*===== Left Arrow ===== */}
        <div className="flex items-center justify-center mt-4">
          <div ref={prevRef} className="cursor-pointer">
            <svg width="36" height="41" viewBox="0 0 36 41" fill="none">
              <path
                d="M27.3546 20.0961C27.3546 11.4916 30.5901 4.01293 35.3678 0.0961914L0.722656 20.0961L35.3678 40.0961C30.5854 36.1935 27.3546 28.7054 27.3546 20.0961Z"
                fill="black"
              />
            </svg>
          </div>

          {/*===== Pagination Dots =====*/}
          <div className="custom-pagination flex space-x-5 !w-auto"></div>

          {/*===== Right Arrow =====*/}

          <div ref={nextRef} className="cursor-pointer">
            <svg width="36" height="40" viewBox="0 0 36 40" fill="none">
              <path
                d="M8.77142 20.0963C8.77142 11.5331 5.5514 4.0903 0.796684 0.192383L35.2754 20.0963L0.796684 40.0001C5.5561 36.1163 8.77142 28.6642 8.77142 20.0963Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
