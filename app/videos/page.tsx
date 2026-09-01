import Image from "next/image";
import React from "react";

import { videos } from "./videos";
import Pagination from "@/components/Pagination";
import play from "@/assets/icons/play.svg";

const PER_PAGE = 8;

const VideoPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const totalPages = Math.ceil(videos.length / PER_PAGE);
  const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const pageVideos = videos.slice(start, start + PER_PAGE);

  return (
    <div className="mt-20 pt-9 pb-[70px] bg-white text-[#141414]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3">
        <h1 className="font-orpheus font-bold text-[36px] text-center mb-10">
          Videos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {pageVideos.map(({ title, cover }) => (
            <div key={title}>
              <div className="relative w-full aspect-video overflow-hidden group cursor-pointer">
                <Image
                  src={cover}
                  alt={title}
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
              </div>
              <p className="text-center mt-4 font-twentienty text-base md:text-lg">
                {title}
              </p>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/videos"
        />
      </div>
    </div>
  );
};

export default VideoPage;
