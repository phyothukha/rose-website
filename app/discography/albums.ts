import { StaticImageData } from "next/image";

import R_Album from "@/assets/album-img/Rosé_-_R.png";
import rosie from "@/assets/album-img/Rosé_-_Rosie.png";
import apt from "@/assets/album-img/Rosé_and_Bruno_Mars_-_Apt..png";

export type Album = {
  slug: string;
  title: string;
  type: string;
  releaseDate: string;
  cover: StaticImageData;
  description: string;
  trackList: string[];
};

export const albums: Album[] = [
  {
    slug: "rosie",
    title: "Rosie",
    type: "Studio Album",
    releaseDate: "06.12.2024",
    cover: rosie,
    description:
      "Rosie – the first studio album by ROSÉ. Released on 6 December 2024 through The Black Label and Atlantic Records, the album marks Rosé's first solo release after departing from YG Entertainment and Interscope Records in 2023. Rosé wrote and co-produced Rosie with a range of collaborators, including Bruno Mars, Carter Lang, and Omer Fedi. It was conceived as a 12-track pop album exploring pop-punk and alternative pop styles, whilst blending elements of 1990s R&B, synthpop, and ballads. Rosie debuted at number three on the Billboard 200, becoming the highest-ranked album by a K-pop female soloist on the chart.",
    trackList: [
      "number one girl",
      "3am",
      "two years",
      "toxic till the end",
      "drinks or coffee",
      "APT. (Rosé & Bruno Mars)",
      "gameboy",
      "stay a little longer",
      "not the same",
      "call it the end",
      "too bad for us",
      "dance all night",
    ],
  },
  {
    slug: "apt",
    title: "APT.",
    type: "Single",
    releaseDate: "18.10.2024",
    cover: apt,
    description:
      '"APT." is a song by New Zealand and South Korean singer Rosé and American singer-songwriter Bruno Mars. It was released through Atlantic Records on 18 October 2024, as the lead single from Rosé\'s debut studio album, Rosie (2024). The song was a commercial success, spending nine weeks at number one on the Billboard Global 200 and Global Excl. US charts. It was also the first song by a K-pop female soloist to top Australia\'s ARIA Singles Chart. The song was inspired by the Korean "apartment game" and was produced by Mars, Cirkut, Omer Fedi, and Rogét Chahayed. The music video was directed by Daniel Ramos and Mars.',
    trackList: ["APT. (Rosé & Bruno Mars)"],
  },
  {
    slug: "r",
    title: "R",
    type: "Single Album",
    releaseDate: "12.03.2021",
    cover: R_Album,
    description:
      '"R" is the debut single album recorded by Korean-New Zealand singer and BLACKPINK member ROSÉ. It was released on 12 March 2021 through YG Entertainment and Interscope Records. The single album was produced by Jon Bellion, ojivolta, Jorgen Odegard, Teddy, 24 and Brian Lee. "R" is primarily a pop record with influences of synth-pop, dance-pop, electropop, EDM, alternative rock, soft rock, indie rock and rock elements. The physical version debuted at number two on the Gaon Album Chart and became the best-selling album by a female soloist in the chart\'s history.',
    trackList: ["On The Ground", "Gone"],
  },
];
