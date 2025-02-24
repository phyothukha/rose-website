import Image from "next/image";
import React from "react";

import R_Album from "@/assets/album-img/Rosé_-_R.png";
import rosie from "@/assets/album-img/Rosé_-_Rosie.png";
import apt from "@/assets/album-img/Rosé_and_Bruno_Mars_-_Apt..png";

const DiscographySection = () => {
  return (
    <section className=" container mx-auto max-w-6xl pt-28 px-10 md:px-3">
      <div className=" flex justify-center mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">Discography</h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5">
        <div className=" col-span-1  ">
          <div className=" bg-gray-200 cursor-pointer rounded-md overflow-hidden">
            <Image
              src={rosie}
              alt=""
              className=" h-full mx-auto object-contain w-full"
            />
            <div className=" p-5 text-center">
              <h4>Rosie</h4>
              <p>Released 06.12.2024</p>
            </div>
          </div>
        </div>
        <div className=" col-span-1">
          <div className=" bg-gray-200 cursor-pointer rounded-md overflow-hidden">
            <Image
              src={apt}
              alt=""
              className=" h-full mx-auto object-contain w-full"
            />
            <div className=" p-5 text-center">
              <h4>APT</h4>
              <p>Released 18.10.2024</p>
            </div>
          </div>
        </div>{" "}
        <div className=" col-span-1">
          <div className=" bg-gray-200 cursor-pointer rounded-md overflow-hidden">
            <Image
              src={R_Album}
              alt=""
              className=" h-full mx-auto object-contain w-full"
            />
            <div className=" p-5 text-center">
              <h4>R</h4>
              <p>Released 12.03.2021</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full flex items-center gap-5 my-20 justify-center">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8L2 12M2 12L6 16M2 12H22"
              stroke="#BCBCBC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className=" w-10 h-10 flex justify-center items-center bg-black rounded-full text-white">
          1
        </div>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 8L22 12M22 12L18 16M22 12H2"
              stroke="#BCBCBC"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;
