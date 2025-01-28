import Image from "next/image";
import React from "react";

import instagram from "@/assets/icons/instagram-brands-solid.svg";
import youtube from "@/assets/icons/youtube-brands-solid.svg";
import spotify from "@/assets/icons/spotify-brands-solid.svg";
import apple from "@/assets/icons/apple-brands-solid.svg";
import tiktok from "@/assets/icons/tiktok-brands-solid.svg";
import twitter from "@/assets/icons/x-twitter-brands-solid.svg";

const socials = [
  { name: "instagram", icon: instagram },
  { name: "youtube", icon: youtube },
  { name: "spotify", icon: spotify },
  { name: "apple", icon: apple },
  { name: "tiktok", icon: tiktok },
  { name: "twitter", icon: twitter },
] as const;

const Footer = () => {
  return (
    <footer className=" bg-white h-[300px] mt-auto flex items-center  justify-center ">
      <div className=" container max-w-7xl mx-auto w-full justify-center h-[157px] flex flex-col gap-[36px] ">
        <h1 className="font-markoOne font-medium text-center text-[28px] text-[#A12636]">
          Rosé
        </h1>
        <nav className="flex justify-center gap-8 items-center">
          {socials.map(({ name, icon }) => (
            <Image
              key={name}
              width={
                name === "instagram"
                  ? 25
                  : name === "youtube"
                  ? 28
                  : name === "tiktok"
                  ? 20
                  : 22
              }
              height={
                name === "instagram" ? 25 : name === "youtube" ? 28 : 29.3
              }
              className="object-cover cursor-pointer"
              src={icon}
              alt={`${name} icon`}
            />
          ))}
        </nav>

        <div className=" flex  items-center justify-center w-full">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_333_1071)">
              <path
                d="M9.15116 9.31742C8.82473 9.64348 8.40897 9.86545 7.95642 9.95527C7.50387 10.0451 7.03484 9.99874 6.60863 9.82206C6.18242 9.64538 5.81816 9.3463 5.56189 8.96265C5.30561 8.57899 5.16883 8.12796 5.16883 7.66659C5.16883 7.20521 5.30561 6.75418 5.56189 6.37053C5.81816 5.98687 6.18242 5.6878 6.60863 5.51112C7.03484 5.33443 7.50387 5.28807 7.95642 5.3779C8.40897 5.46772 8.82473 5.68969 9.15116 6.01575M13.3337 7.66659C13.3337 10.8882 10.722 13.4999 7.50033 13.4999C4.27866 13.4999 1.66699 10.8882 1.66699 7.66659C1.66699 4.44492 4.27866 1.83325 7.50033 1.83325C10.722 1.83325 13.3337 4.44492 13.3337 7.66659Z"
                stroke="#141414"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_333_1071">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="translate(0.5 0.666626)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className=" font-twentienty font-medium text-[16px]">
            Rosé All Rights Reserved. | Privacy Policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
