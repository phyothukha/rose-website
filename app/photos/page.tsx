import Image from "next/image";
import React from "react";

import { photos } from "./photos";
import Pagination from "@/components/Pagination";

const PER_PAGE = 12;

const PhotoPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) => {
  const { page } = await searchParams;
  const totalPages = Math.ceil(photos.length / PER_PAGE);
  const currentPage = Math.min(Math.max(Number(page) || 1, 1), totalPages);
  const start = (currentPage - 1) * PER_PAGE;
  const pagePhotos = photos.slice(start, start + PER_PAGE);

  return (
    <div className="mt-20 pt-9 pb-[70px] bg-white text-[#141414]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3">
        <h1 className="font-orpheus font-bold text-[36px] text-center mb-10">
          Photos
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pagePhotos.map(({ alt, src }, i) => (
            <div
              key={start + i}
              className="relative w-full aspect-[4/5] overflow-hidden"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          basePath="/photos"
        />
      </div>
    </div>
  );
};

export default PhotoPage;
