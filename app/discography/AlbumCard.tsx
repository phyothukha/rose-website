import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Album } from "./albums";

const AlbumCard = ({ slug, title, releaseDate, cover }: Album) => (
  <Link
    href={`/discography/${slug}`}
    className="rounded-md overflow-hidden block"
  >
    <div className="relative w-full aspect-square">
      <Image
        src={cover}
        alt={title}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
    <div className="bg-[#F7F5F2] py-5 text-center">
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-black/50 text-sm mt-1">Released {releaseDate}</p>
    </div>
  </Link>
);

export default AlbumCard;
