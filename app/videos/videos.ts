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
  youtubeId?: string;
};

export const videos: Video[] = [
  {
    title: "ROSÉ - toxic till the end (Official Music Video)",
    cover: toxic,
    youtubeId: "eA0lHNZ1KCA",
  },
  {
    title: "ROSÉ - number one girl (Official Music Video)",
    cover: nonegirl,
    youtubeId: "pZ1NdE69VTs",
  },
  {
    title: "ROSÉ & Bruno Mars - APT. (Official Music Video)",
    cover: apt,
    youtubeId: "ekr2nIex040",
  },
  {
    title: "ROSÉ - APT./toxic till the end Medley (The Tonight Show)",
    cover: medley,
    youtubeId: "MCQlzqdldi4",
  },
  {
    title: "ROSÉ & Bruno Mars - APT. (live from MAMA AWARDS)",
    cover: aptMama,
    youtubeId: "Jn8KvdWagfo",
  },
  {
    title: "ROSÉ - stay a little longer (Official Audio)",
    cover: rosie,
    youtubeId: "vHvOYQ0hbBA",
  },
  {
    title: "ROSÉ - dance all night (Official Audio)",
    cover: rosie,
    youtubeId: "h7HP9aiIFfc",
  },
  {
    title: "ROSÉ - drinks or coffee (Official Audio)",
    cover: rosie,
    youtubeId: "PFDO5OZO61Y",
  },
  {
    title: "ROSÉ - 3am (Official Audio)",
    cover: rosie,
    youtubeId: "OzdJFXyO8ts",
  },
  {
    title: "ROSÉ - two years (Official Audio)",
    cover: rosie,
    youtubeId: "lktucPDH5IY",
  },
  {
    title: "ROSÉ - gameboy (Official Audio)",
    cover: rosie,
    youtubeId: "JwKOLJl5oRM",
  },
  {
    title: "ROSÉ - not the same (Official Audio)",
    cover: rosie,
    youtubeId: "IKqVcaVrMGs",
  },
  {
    title: "ROSÉ - call it the end (Official Audio)",
    cover: rosie,
    youtubeId: "nOo3a2tT1LQ",
  },
  {
    title: "ROSÉ - too bad for us (Official Audio)",
    cover: rosie,
    youtubeId: "FQmgNCStzQM",
  },
  {
    title: "ROSÉ - On The Ground (Official Music Video)",
    cover: onTheGround,
    youtubeId: "CKZvWhCqx1s",
  },
  {
    title: "ROSÉ - On The Ground (Special Film)",
    cover: onTheGroundFilm,
    youtubeId: "wexdV6Gj84s",
  },
  {
    title: "ROSÉ - Gone (Official Music Video)",
    cover: gone,
    youtubeId: "K9_VFxzCuQ0",
  },
  {
    title: "ROSÉ - Gone (Short Film)",
    cover: goneFilm,
    youtubeId: "XEb5u0lJARU",
  },
  {
    title: "ROSÉ - 'R' (Short Film)",
    cover: rFilm,
    youtubeId: "_iOBHJLe3eE",
  },
  {
    title: "ROSÉ - toxic till the end (Behind The Scenes)",
    cover: toxicBehindScenes,
    youtubeId: "gL_2T4LaoUE",
  },
  {
    title: "Until I Found You (Cover by ROSÉ)",
    cover: untilIFoundYou,
    youtubeId: "WfEiabOTH8Y",
  },
  {
    title: "Viva La Vida (Cover by ROSÉ)",
    cover: vivaLaVida,
    youtubeId: "mX8rMMS-MbI",
  },
];
