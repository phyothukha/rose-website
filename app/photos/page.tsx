import React from "react";

import { photos } from "./photos";
import Pagination from "@/components/Pagination";
import PhotoGallery from "@/components/PhotoGallery";

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

        <PhotoGallery photos={pagePhotos} />

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
