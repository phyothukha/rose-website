import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

import { albums } from "../albums";
import AlbumCard from "../AlbumCard";
import AvailableOn from "@/components/AvailableOn";

export function generateStaticParams() {
  return albums.map((album) => ({ slug: album.slug }));
}

const AlbumDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const album = albums.find((a) => a.slug === slug);

  if (!album) {
    notFound();
  }

  const otherAlbums = albums.filter((a) => a.slug !== slug);

  return (
    <div className="mt-20 bg-white text-[#141414] pt-9 pb-[70px]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3">
        <Link
          href="/discography"
          className="inline-flex items-center gap-1 text-sm font-semibold mb-8"
        >
          <span aria-hidden>‹</span> BACK
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="relative w-full aspect-square max-w-md">
            <Image
              src={album.cover}
              alt={album.title}
              fill
              sizes="(min-width: 768px) 480px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="font-orpheus font-bold text-[32px]">
              {album.title}
            </h1>
            <p className="text-black/50 mt-1">{album.type}</p>
            <p className="mt-3">
              <span className="font-semibold">Released:</span>{" "}
              {album.releaseDate}
            </p>

            <p className="mt-6 leading-relaxed text-black/80">
              {album.description}
            </p>

            <h3 className="font-orpheus font-bold text-[18px] tracking-wide mt-10 mb-3">
              TRACK LIST
            </h3>
            <ol className="space-y-2">
              {album.trackList.map((track, i) => (
                <li key={track} className="flex gap-2 text-black/80">
                  <span className="w-5 text-right shrink-0">{i + 1}.</span>
                  <span>{track}</span>
                </li>
              ))}
            </ol>

            <div className="mt-10">
              <AvailableOn
                spotifyUrl={album.spotifyUrl}
                appleMusicUrl={album.appleMusicUrl}
                youtubeUrl={album.youtubeUrl}
              />
            </div>
          </div>
        </div>

        <h2 className="font-orpheus font-bold text-[32px] mb-8">Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherAlbums.map((otherAlbum) => (
            <AlbumCard key={otherAlbum.slug} {...otherAlbum} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumDetailPage;
