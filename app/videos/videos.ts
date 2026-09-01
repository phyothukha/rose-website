import { StaticImageData } from "next/image";

import apt from "@/assets/video-cover-img/apt.png";
import toxic from "@/assets/video-cover-img/toxic.jpg";
import nonegirl from "@/assets/video-cover-img/n0negirl.png";
import medley from "@/assets/video-cover-img/medly.jpg";
import aptMama from "@/assets/video-cover-img/Video cover Jn8KvdWagfo.jpg";
import rosie from "@/assets/video-cover-img/rosie.png";
import onTheGround from "@/assets/video-cover-img/on-the-ground.jpg";
import onTheGroundFilm from "@/assets/video-cover-img/ontheground-film.jpg";
import gone from "@/assets/video-cover-img/gone.jpg";
import goneFilm from "@/assets/video-cover-img/gone-film.jpg";
import rFilm from "@/assets/video-cover-img/r-film.jpg";
import toxicBehindScenes from "@/assets/video-cover-img/tte-behind-scenes.jpg";
import untilIFoundYou from "@/assets/video-cover-img/until-i-found-u.jpg";
import vivaLaVida from "@/assets/video-cover-img/vivala-vida.jpg";

export type Video = {
  title: string;
  cover: StaticImageData;
};

export const videos: Video[] = [
  { title: "ROSÉ - toxic till the end (Official Music Video)", cover: toxic },
  { title: "ROSÉ - number one girl (Official Music Video)", cover: nonegirl },
  { title: "ROSÉ & Bruno Mars - APT. (Official Music Video)", cover: apt },
  {
    title: "ROSÉ - APT./toxic till the end Medley (The Tonight Show)",
    cover: medley,
  },
  {
    title: "ROSÉ & Bruno Mars - APT. (live from MAMA AWARDS)",
    cover: aptMama,
  },
  { title: "ROSÉ - stay a little longer (Official Audio)", cover: rosie },
  { title: "ROSÉ - dance all night (Official Audio)", cover: rosie },
  { title: "ROSÉ - drinks or coffee (Official Audio)", cover: rosie },
  { title: "ROSÉ - 3am (Official Audio)", cover: rosie },
  { title: "ROSÉ - two years (Official Audio)", cover: rosie },
  { title: "ROSÉ - gameboy (Official Audio)", cover: rosie },
  { title: "ROSÉ - not the same (Official Audio)", cover: rosie },
  { title: "ROSÉ - call it the end (Official Audio)", cover: rosie },
  { title: "ROSÉ - too bad for us (Official Audio)", cover: rosie },
  { title: "ROSÉ - On The Ground (Official Music Video)", cover: onTheGround },
  { title: "ROSÉ - On The Ground (Special Film)", cover: onTheGroundFilm },
  { title: "ROSÉ - Gone (Official Music Video)", cover: gone },
  { title: "ROSÉ - Gone (Short Film)", cover: goneFilm },
  { title: "ROSÉ - 'R' (Short Film)", cover: rFilm },
  {
    title: "ROSÉ - toxic till the end (Behind The Scenes)",
    cover: toxicBehindScenes,
  },
  { title: "Until I Found You (Cover by ROSÉ)", cover: untilIFoundYou },
  { title: "Viva La Vida (Cover by ROSÉ)", cover: vivaLaVida },
];
