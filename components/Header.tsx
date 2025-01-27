"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import instagram from "@/assets/icons/instagram-brands-solid.svg";
import youtube from "@/assets/icons/youtube-brands-solid.svg";
import tiktok from "@/assets/icons/tiktok-brands-solid.svg";
import twitter from "@/assets/icons/x-twitter-brands-solid.svg";
import xIcon from "@/assets/icons/XOutline.svg";

const socials = [
  { name: "instagram", icon: instagram },
  { name: "youtube", icon: youtube },
  { name: "tiktok", icon: tiktok },
  { name: "twitter", icon: twitter },
];

const navLinks: NavLink[] = [
  { path: "Home", name: "home", href: "/" },
  { path: "Discography", name: "discography", href: "/discography" },
  { path: "Videos", name: "videos", href: "/videos" },
  { path: "Photos", name: "photos", href: "/photos" },
  { path: "Biography", name: "biography", href: "/biography" },
];

interface NavLink {
  path: string;
  name: "home" | "discography" | "videos" | "photos" | "biography";
  href: string;
}

const Header = () => {
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);

  const toggleMenu = () => setShow(!show);

  return (
    <main className="bg-gray-50 ">
      <header className="container md:max-w-7xl h-[80px] flex items-center justify-between mx-auto overflow-hidden w-full">
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-5">
          {navLinks.map(({ name, path, href }) => {
            const isActive = pathname === href;
            return (
              <li key={name} className="cursor-pointer select-none">
                <Link
                  href={href}
                  className={`font-twentienty transition-transform text-black ease-in duration-500 text-[18px] ${
                    isActive
                      ? "font-semibold text-opacity-100"
                      : "font-light text-opacity-55"
                  }`}
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
            className="font-markoOne font-medium text-[28px] text-[#A12636]"
          >
            Rosé
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden">
          <div className="flex flex-col gap-1 transition-all duration-700 ease-in">
            <span
              className={`w-6 h-[2.1px] bg-black inline-block transition-all duration-500 ease-in ${
                show && "transform rotate-45 translate-y-[5px]"
              }`}
            ></span>
            <span
              className={`w-6 h-[2.1px] bg-black inline-block transition-all duration-500 ease-in  ${
                show && "transform translate-x-4 opacity-0"
              }`}
            ></span>
            <span
              className={`w-6 h-[2.1px] bg-black inline-block transition-all duration-500 ease-in ${
                show && "transform -rotate-45 -translate-y-[8px]"
              }`}
            ></span>
          </div>
        </button>

        {/* Social Links */}
        <nav className="hidden lg:flex w-[400px] justify-end gap-7 items-center">
          {socials.map(({ name, icon }) => (
            <Image
              key={name}
              width={name === "youtube" ? 26 : name === "tiktok" ? 18 : 20}
              height={22.86}
              className="object-contain cursor-pointer"
              src={icon}
              alt={`${name} icon`}
            />
          ))}
        </nav>
      </header>
      <div
        className={`${
          show &&
          "h-screen w-full md:hidden absolute bg-opacity-35 top-0 right-0 bottom-0 duration-500 ease-in transition-all"
        }`}
      >
        <nav
          className={`h-screen bg-white top-0 right-0 py-2 ps-10 pe-3 absolute    shadow-sm transform transition-all duration-700 ease-linear ${
            show ? "translate-x-0 w-5/6" : "translate-x-full w-0 "
          }`}
        >
          <div className="w-full flex justify-end">
            <Image
              src={xIcon}
              alt="Close menu"
              width={25}
              height={25}
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className=" flex flex-col gap-7">
            {navLinks.map(({ name, path, href }) => {
              const isActive = pathname === href;
              return (
                <li key={name} className="mb-3">
                  <Link
                    href={href}
                    className={`text-black text-lg font-twentienty  ${
                      isActive
                        ? "font-semibold text-opacity-100"
                        : "font-light text-opacity-55"
                    }`}
                    onClick={toggleMenu}
                  >
                    {path}
                  </Link>
                </li>
              );
            })}
            <li className=" flex gap-6">
              {socials.map(({ name, icon }) => (
                <Image
                  key={name}
                  width={name === "youtube" ? 26 : name === "tiktok" ? 18 : 20}
                  height={22.86}
                  className="object-contain cursor-pointer"
                  src={icon}
                  alt={`${name} icon`}
                />
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Header;
