"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { Photo } from "@/app/photos/photos";
import PhotoTile from "@/components/PhotoTile";

type PhotoGalleryProps = {
  photos: Photo[];
};

const PhotoGallery = ({ photos }: PhotoGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + photos.length) % photos.length,
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  useEffect(() => {
    if (activeIndex === null) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {photos.map((photo, i) => (
          <PhotoTile
            key={photo.src.src}
            src={photo.src}
            alt={photo.alt}
            caption={photo.alt}
            onClick={() => setActiveIndex(i)}
            className="aspect-[4/5]"
          />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-6 right-6 md:top-10 md:right-10 cursor-pointer"
          >
            <svg width="24" height="28" viewBox="0 0 70 83" fill="none">
              <path
                d="M18 59L53 24M18 24L53 59"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <svg width="28" height="28" viewBox="0 0 70 70" fill="none">
              <path
                d="M43.7497 55.4166L23.333 35L43.7497 14.5833"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="relative w-full max-w-3xl h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            <svg width="28" height="28" viewBox="0 0 70 70" fill="none">
              <path
                d="M26.25 14.5833L46.6667 35L26.25 55.4166"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGallery;
