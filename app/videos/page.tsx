import React from "react";

import { videos } from "./videos";
import Pagination from "@/components/Pagination";
import VideoGallery from "@/components/VideoGallery";

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

        <VideoGallery videos={pageVideos} />

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
