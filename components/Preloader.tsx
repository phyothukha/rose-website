"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import roseWordmark from "@/assets/icons/Rose_loading.png";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const finishLoading = () => setLoading(false);

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading);
    return () => window.removeEventListener("load", finishLoading);
  }, []);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [loading]);

  if (!visible) return null;

  return (
    <div
      aria-hidden={!loading}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-gray-50 transition-opacity duration-500 ${
        loading ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <Image src={roseWordmark} alt="Rosé" width={140} height={50} priority />
      <div className="flex gap-3">
        <span className="w-3 h-3 rounded-full bg-[#A12636] animate-bounce [animation-delay:-0.3s]" />
        <span className="w-3 h-3 rounded-full bg-[#A12636] animate-bounce [animation-delay:-0.15s]" />
        <span className="w-3 h-3 rounded-full bg-[#A12636] animate-bounce" />
      </div>
    </div>
  );
};

export default Preloader;
