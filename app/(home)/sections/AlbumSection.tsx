import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rose_album from "@/assets/album-img/Rosé_-_Rosie.png";
import spotify from "@/assets/icons/spotify-brands-solid.svg";
import apple from "@/assets/icons/apple-brands-solid.svg";
import youtube from "@/assets/icons/youtube-brands-solid.svg";

const AlbumSection = () => {
  return (
    <section className=" container mx-auto max-w-7xl pt-[70px]">
      {/* ==== Album Header ===== */}
      <div className=" flex justify-between mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">Latest Album</h1>
        <Link
          href="/discography"
          className=" flex items-center text-[18px] font-twentienty "
        >
          SEE MORE
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25 5.75H12.75M12.75 5.75V13.25M12.75 5.75L5.25 13.25"
              stroke="#141414"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className=" grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-10">
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
          <div className=" flex flex-col gap-[24px]">
            <h3 className=" uppercase font-orpheus font-bold text-[20px] ">
              Available On
            </h3>

            <div className=" flex gap-5">
              <button className="btn group">
                <Image
                  src={spotify}
                  alt="Spotify"
                  width={18}
                  height={18}
                  className="object-contain transition-colors duration-500  group-hover:invert"
                />
                <span className="transition-colors duration-500 group-hover:text-white">
                  Spotify
                </span>
              </button>

              <button className="btn group">
                <Image
                  src={apple}
                  alt="Apple"
                  width={16}
                  height={16}
                  className="object-contain transition-colors duration-500  group-hover:invert"
                />
                <span className="transition-colors duration-500 group-hover:text-white">
                  Music
                </span>
              </button>

              <button className="btn group">
                <Image
                  src={youtube}
                  alt="Youtube"
                  width={20}
                  height={20}
                  className="object-contain transition-colors duration-500  group-hover:invert"
                />
                <span className="transition-colors duration-500 group-hover:text-white">
                  Youtube
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlbumSection;
