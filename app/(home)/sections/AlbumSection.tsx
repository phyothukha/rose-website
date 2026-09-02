import Image from "next/image";
import React from "react";
import Rose_album from "@/assets/album-img/Rosé_-_Rosie.png";
import AvailableOn from "@/components/AvailableOn";
import SectionCta from "@/components/SectionCta";
import { albums } from "@/app/discography/albums";

const rosieAlbum = albums.find((album) => album.slug === "rosie")!;

const AlbumSection = () => {
  return (
    <section className=" container mx-auto max-w-6xl px-10 md:px-3 pt-[70px]">
      {/* ==== Album Header ===== */}
      <div className=" flex justify-between mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">Latest Album</h1>
        <SectionCta
          href="/discography"
          label="SEE MORE"
          className="hidden md:flex"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 w-full items-center gap-10">
        <div className=" col-span-1">
          <Image
            src={Rose_album}
            height={500}
            width={500}
            alt=""
            className=" object-cover w-full mx-auto object-center "
          />
        </div>
        <div className=" flex flex-col col-span-1">
          <div className="  flex flex-col gap-[36px] mb-[70px] ">
            <div className=" flex flex-col gap-[4px]">
              <h1 className=" font-orpheus font-bold text-[36px]">Rosie</h1>
              <p className=" font-twentienty font-light text-[18px]">
                Studio Album
              </p>
              <p className=" font-twentienty  font-semibold text-[18px] ">
                Released: <span className=" font-light"> 06.12.2024</span>
              </p>
            </div>

            <p className=" font-twentienty font-light text-[20px] leading-snug">
              Rosie - the first studio album by ROSÉ. This album marks Rosé{"'"}
              s first solo release after departing from YG Entertainment and
              Interscope Records in 2023. Rosie debuted at number three on the
              Billboard 200, becoming the highest-ranked album by a K-pop female
              soloist on the chart
            </p>
          </div>
          <AvailableOn
            spotifyUrl={rosieAlbum.spotifyUrl}
            appleMusicUrl={rosieAlbum.appleMusicUrl}
            youtubeUrl={rosieAlbum.youtubeUrl}
          />
        </div>
      </div>

      <SectionCta
        href="/discography"
        label="SEE MORE"
        className="flex md:hidden justify-center mt-10"
      />
    </section>
  );
};

export default AlbumSection;
