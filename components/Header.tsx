"use client";

import Image from "next/image";
import instagram from "@/assets/icons/instagram-brands-solid.svg";
import youtube from "@/assets/icons/youtube-brands-solid.svg";
import tiktok from "@/assets/icons/tiktok-brands-solid.svg";
import twitter from "@/assets/icons/x-twitter-brands-solid.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
  return (
    <main className=" bg-gray-50">
      <header className=" container lg:max-w-7xl  h-[80px] flex items-center justify-between mx-auto ">
        <ul className="lg:flex hidden gap-5">
          {navLinks.map(({ name, path, href }) => {
            const navActive = pathName === href;

            return (
              <li key={name} className=" cursor-pointer select-none">
                <Link
                  className={` font-twentienty transition-transform  text-black ease-in duration-500 text-[18px]  ${
                    navActive
                      ? "  font-semibold text-opacity-100 "
                      : " font-light text-opacity-55"
                  }`}
                  href={href}
                >
                  {path}
                </Link>
              </li>
            );
          })}
        </ul>
        <nav>
          <Link
            href="/"
            className=" font-markoOne font-medium text-[28px] text-[#A12636]"
          >
            Rosé
          </Link>
        </nav>
        <nav className=" lg:hidden flex flex-col gap-1">
          <span className=" w-8 h-[2.5px] bg-red-500 inline-block "></span>
          <span className=" w-8 h-[2.5px] bg-red-500 inline-block "></span>
          <span className=" w-8 h-[2.5px] bg-red-500 inline-block "></span>
        </nav>
        <nav className=" lg:flex hidden w-[400px] justify-end gap-7 items-center">
          {socials.map(({ name, icon }) => (
            <Image
              key={name}
              width={name === "youtube" ? 26 : name === "tiktok" ? 18 : 20}
              height={22.86}
              className=" object-contain cursor-pointer"
              src={icon}
              alt={name}
            />
          ))}
        </nav>
      </header>
    </main>
  );
};

export default Header;

const socials = [
  {
    name: "instagram",
    icon: instagram,
  },
  {
    name: "youtube",
    icon: youtube,
  },
  {
    name: "tiktok",
    icon: tiktok,
  },
  {
    name: "twitter",
    icon: twitter,
  },
];

const navLinks: NavLink[] = [
  {
    path: "Home",
    name: "home",
    href: "/",
  },
  {
    path: "Discography",
    name: "discography",
    href: "/discography",
  },
  {
    path: "Videos",
    name: "videos",
    href: "/videos",
  },
  {
    path: "Photos",
    name: "photos",
    href: "/photos",
  },
  {
    path: "Biography",
    name: "biography",
    href: "/biography",
  },
];

interface NavLink {
  path: string;
  name: "home" | "discography" | "videos" | "photos" | "biography";
  href: string;
}
