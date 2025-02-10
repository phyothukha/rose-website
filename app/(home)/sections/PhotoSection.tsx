import Image from "next/image";
import Link from "next/link";
import voguePhoto from "@/assets/photo-page/vogue-hong-kong.jpg";
import Sulwhasoo from "@/assets/photo-page/ROSE-x-Sulwhasoo.jpeg";
import image7 from "@/assets/photo-page/image 7.png";
import React from "react";

const PhotoSection = () => {
  return (
    <section className=" container mx-auto max-w-7xl py-16">
      {/* ==== Photo Header ===== */}
      <div className=" flex justify-between mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">Photos</h1>
        <Link
          href="/photos"
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

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="col-span-1 h-[600px] w-full group transition-all duration-500 delay-700 ease-in-out overflow-hidden relative">
          <Image
            alt=""
            src={voguePhoto}
            className="w-full h-full  md:object-cover object-top"
          />
          <p className=" absolute transform translate-y-1/2 bottom-1/2 hidden group-hover:inline-block text-white font-orpheus text-3xl w-full text-center">
            Cover of Vogue Hong Kong
          </p>
          <div className="bg-black w-full h-full absolute top-0 left-0 z-20 opacity-20 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>
        </div>

        <div className="col-span-1 h-[600px] w-full group transition-all duration-500 delay-700 ease-in-out overflow-hidden relative">
          <Image
            alt=""
            src={image7}
            className="w-full h-full  md:object-cover object-top"
          />
          <p className=" absolute transform  translate-y-1/2 bottom-1/2 hidden group-hover:inline-block text-white font-orpheus text-3xl w-full text-center">
            Rosé x Tiffany & Co
          </p>
          <div className="bg-black w-full h-full absolute top-0 left-0 z-20 opacity-20 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>
        </div>
        <div className="col-span-1 h-[600px] w-full group transition-all delay-700 duration-500 ease-in-out overflow-hidden relative">
          <Image
            alt=""
            src={Sulwhasoo}
            className="w-full h-full  md:object-cover object-top"
          />
          <p className=" absolute transform translate-y-1/2 bottom-1/2 hidden group-hover:inline-block text-white font-orpheus text-3xl w-full text-center">
            Rosé x Sulwhasooo
          </p>
          <div className="bg-black w-full h-full absolute top-0 left-0 z-20 opacity-20 transform translate-y-full group-hover:translate-y-0 transition-all duration-700 ease-in-out"></div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
