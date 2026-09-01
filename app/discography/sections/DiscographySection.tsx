import React from "react";
import { albums } from "../albums";
import AlbumCard from "../AlbumCard";
import Pagination from "@/components/Pagination";

const DiscographySection = () => {
  return (
    <section className="mt-20 pt-9 pb-[70px] bg-white text-[#141414]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3">
        <h1 className="font-orpheus font-bold text-[36px] text-center mb-10">
          Discography
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album) => (
            <AlbumCard key={album.slug} {...album} />
          ))}
        </div>

        <Pagination currentPage={1} totalPages={1} basePath="/discography" />
      </div>
    </section>
  );
};

export default DiscographySection;
