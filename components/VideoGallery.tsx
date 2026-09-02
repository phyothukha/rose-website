"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import type { Video } from "@/app/videos/videos";
import play from "@/assets/icons/play.svg";

type VideoGalleryProps = {
  videos: Video[];
};

const VideoGallery = ({ videos }: VideoGalleryProps) => {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const close = () => setActiveVideo(null);

  useEffect(() => {
    if (!activeVideo) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
        {videos.map((video) => (
          <div key={video.title}>
            <button
              type="button"
              onClick={() => setActiveVideo(video)}
              aria-label={`Play ${video.title}`}
              className="relative block w-full aspect-video overflow-hidden group cursor-pointer"
            >
              <Image
                src={video.cover}
                alt={video.title}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-15 transition-all">
                <Image
                  src={play}
                  width={56}
                  height={56}
                  alt=""
                  className="group-hover:scale-110 transition-transform"
                />
              </div>
            </button>
            <p className="text-center mt-4 font-twentienty text-base md:text-lg">
              {video.title}
            </p>
          </div>
        ))}
      </div>

      {activeVideo && (
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

          <div
            className="relative w-full max-w-3xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            {activeVideo.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white font-twentienty text-center px-4">
                Video unavailable
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGallery;
