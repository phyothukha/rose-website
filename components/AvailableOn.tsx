import Image from "next/image";
import React from "react";

import spotify from "@/assets/icons/spotify-brands-solid.svg";
import apple from "@/assets/icons/apple-brands-solid.svg";
import youtube from "@/assets/icons/youtube-brands-solid.svg";

type AvailableOnProps = {
  spotifyUrl: string;
  appleMusicUrl: string;
  youtubeUrl: string;
};

const AvailableOn = ({
  spotifyUrl,
  appleMusicUrl,
  youtubeUrl,
}: AvailableOnProps) => {
  const platforms = [
    { name: "Spotify", icon: spotify, width: 18, height: 18, url: spotifyUrl },
    { name: "Music", icon: apple, width: 16, height: 16, url: appleMusicUrl },
    { name: "Youtube", icon: youtube, width: 20, height: 20, url: youtubeUrl },
  ];

  return (
    <div className="flex flex-col gap-[24px]">
      <h3 className="uppercase font-orpheus font-bold text-[20px]">
        Available On
      </h3>

      <div className="flex gap-5">
        {platforms.map(({ name, icon, width, height, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn group"
          >
            <Image
              src={icon}
              alt={name}
              width={width}
              height={height}
              className="object-contain transition-colors duration-500 group-hover:invert"
            />
            <span className="transition-colors duration-500 group-hover:text-white">
              {name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AvailableOn;
