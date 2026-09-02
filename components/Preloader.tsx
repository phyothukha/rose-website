"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import roseWordmark from "@/assets/icons/Rose_loading.png";

const SHOW_DELAY = 250;
const FADE_DURATION = 500;

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);
  const [pastDelay, setPastDelay] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const markLoaded = () => setLoaded(true);

    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded);
    }

    const delayTimer = setTimeout(() => setPastDelay(true), SHOW_DELAY);

    return () => {
      window.removeEventListener("load", markLoaded);
      clearTimeout(delayTimer);
    };
  }, []);

  useEffect(() => {
    if (pastDelay && !loaded) setShow(true);
  }, [pastDelay, loaded]);

  useEffect(() => {
    if (show && loaded) {
      const fadeTimer = setTimeout(() => setShow(false), FADE_DURATION);
      return () => clearTimeout(fadeTimer);
    }
  }, [show, loaded]);

  if (!show) return null;

  return (
    <div
      aria-hidden={loaded}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 sm:gap-4 bg-gray-50 px-4 transition-opacity duration-500 ${
        loaded ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <Image
        src={roseWordmark}
        alt="Rosé"
        width={140}
        height={50}
        priority
        className="w-[110px] sm:w-[140px] h-auto"
      />
      <div className="flex gap-2.5 sm:gap-3">
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#A12636] animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#A12636] animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#A12636] animate-bounce" />
      </div>
    </div>
  );
};

export default Preloader;
