import { StaticImageData } from "next/image";

import photo01 from "@/assets/photo-page/224640f7-cd79-4fd9-92f9-a423680e9874.jpg";
import photo02 from "@/assets/photo-page/APT-Concept-Photo.jpeg";
import photo03 from "@/assets/photo-page/ROSE-PAPER-MAGAZINE.jpeg";
import photo04 from "@/assets/photo-page/ROSE-R-SPECIAL-EDITION-PHOTOBOOK.jpeg";
import photo05 from "@/assets/photo-page/ROSE-R-SPECIAL-EDITION-PHOTOBOOK2.jpeg";
import photo06 from "@/assets/photo-page/ROSE-at-the-Sulwhasoo.jpeg";
import photo07 from "@/assets/photo-page/ROSE-for-2024-Vanity-Fair-Oscar-Party.jpeg";
import photo08 from "@/assets/photo-page/ROSE-for-BuzzFeed-Puppy-Interview.jpeg";
import photo09 from "@/assets/photo-page/ROSE-for-VOGUE-Australia-ELVIS.jpeg";
import photo10 from "@/assets/photo-page/ROSE-x-O-Oi-COLLECTION.jpeg";
import photo11 from "@/assets/photo-page/ROSE-x-Sulwhasoo.jpeg";
import photo12 from "@/assets/photo-page/ROSE-x-Yves-Saint-Laurent-Eyewear2jpeg.jpeg";
import photo13 from "@/assets/photo-page/ROSE-x-by-O-Oi-Fall.jpeg";
import photo14 from "@/assets/photo-page/ROSÉ - _rosie_ VINYL (VAMPIREHOLLIE EDITION BLUE) 4K POSTER.jpg";
import photo15 from "@/assets/photo-page/Rose-for-Dazed-Korea.jpeg";
import photo16 from "@/assets/photo-page/Rose-for-Mastermind-Magazine.jpeg";
import photo17 from "@/assets/photo-page/rose-wallpaper.jpg";
import photo18 from "@/assets/photo-page/Vogue-Korea.jpeg";
import photo19 from "@/assets/photo-page/download (7).jpg";
import photo20 from "@/assets/photo-page/image 7.png";
import photo21 from "@/assets/photo-page/rose-dazed-korea.jpg";
import photo22 from "@/assets/photo-page/rose-elle-korea.jpg";
import photo23 from "@/assets/photo-page/rose-gq-korea.jpg";
import photo24 from "@/assets/photo-page/rose-i-d-magazine-special-edition-cover.jpg";
import photo25 from "@/assets/photo-page/rose-w-korea.jpg";
import photo26 from "@/assets/photo-page/rosie-Concept-Photo.jpeg";
import photo27 from "@/assets/photo-page/vogue-hong-kong.jpg";
import photo28 from "@/assets/photo-page/ysl-rose.jpg";

export type Photo = {
  alt: string;
  src: StaticImageData;
};

export const photos: Photo[] = [
  { alt: "ROSÉ", src: photo01 },
  { alt: "ROSÉ & Bruno Mars — APT. concept photo", src: photo02 },
  { alt: "ROSÉ for Paper Magazine", src: photo03 },
  { alt: "ROSÉ — R Special Edition Photobook", src: photo04 },
  { alt: "ROSÉ — R Special Edition Photobook", src: photo05 },
  { alt: "ROSÉ at the Sulwhasoo event", src: photo06 },
  { alt: "ROSÉ at the 2024 Vanity Fair Oscar Party", src: photo07 },
  { alt: "ROSÉ for BuzzFeed Puppy Interview", src: photo08 },
  { alt: "ROSÉ for Vogue Australia", src: photo09 },
  { alt: "ROSÉ x O°Oi collection", src: photo10 },
  { alt: "ROSÉ x Sulwhasoo", src: photo11 },
  { alt: "ROSÉ x Yves Saint Laurent Eyewear", src: photo12 },
  { alt: "ROSÉ x O°Oi Fall collection", src: photo13 },
  { alt: "Rosie vinyl 4K poster", src: photo14 },
  { alt: "ROSÉ for Dazed Korea", src: photo15 },
  { alt: "ROSÉ for Mastermind Magazine", src: photo16 },
  { alt: "ROSÉ wallpaper", src: photo17 },
  { alt: "ROSÉ for Vogue Korea", src: photo18 },
  { alt: "ROSÉ", src: photo19 },
  { alt: "ROSÉ x Tiffany & Co", src: photo20 },
  { alt: "ROSÉ for Dazed Korea", src: photo21 },
  { alt: "ROSÉ for Elle Korea", src: photo22 },
  { alt: "ROSÉ for GQ Korea", src: photo23 },
  { alt: "ROSÉ for i-D Magazine special edition cover", src: photo24 },
  { alt: "ROSÉ for W Korea", src: photo25 },
  { alt: "Rosie concept photo", src: photo26 },
  { alt: "Cover of Vogue Hong Kong", src: photo27 },
  { alt: "ROSÉ x Yves Saint Laurent", src: photo28 },
];
