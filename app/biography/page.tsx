import Image from "next/image";
import React from "react";

import heroPhoto from "@/assets/biography-page/rosé, blackpink.jpg";
import tiffanyPhoto from "@/assets/biography-page/download (11).jpg";
import collageShapePhoto from "@/assets/biography-page/collage-shape.jpg";
import candidPhoto from "@/assets/biography-page/ROSÉ - _toxic till the end_ Official Music Video Teaser.jpg";
import autumnPhoto from "@/assets/biography-page/ROSÉ INSTAGRAM POST.jpg";
import childhoodPhoto from "@/assets/biography-page/download (12).jpg";
import guitarPhoto from "@/assets/biography-page/edc09582-eb6f-4db4-902a-de1c0ef0778b.jpg";
import groupPhoto from "@/assets/biography-page/155cb04e-d59e-420c-b159-2000d689a95f.jpg";

const hobbyPhotos = [candidPhoto, autumnPhoto];
const memoryPhotos = [childhoodPhoto, guitarPhoto, groupPhoto];

const BiographyPage = () => {
  return (
    <div className="mt-20 bg-white text-[#141414]">
      <div className="container mx-auto max-w-6xl px-10 md:px-3">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[536px]">
          <Image
            src={heroPhoto}
            alt="Rosé"
            fill
            priority
            sizes="(min-width: 1280px) 1152px, 100vw"
            className="object-cover object-[center_25%]"
          />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-10 md:px-3 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h1 className="font-orpheus font-bold text-[32px] mb-4">Rosé</h1>
            <p className="font-twentienty font-light text-[20px] leading-7 mb-6">
              Roseanne Park (Rosé)
              <br />
              Born: February 11, 1997
              <br />
              Birthplace: Auckland, New Zealand
            </p>
            <div className="space-y-4 font-twentienty font-light text-[20px] leading-7 text-black/80">
              <p>
                Roseanne Park, better known by her stage name Rosé, is a
                Korean-New Zealand singer and dancer, globally recognized as a
                member of BLACKPINK, one of the most successful K-pop groups in
                history. Raised in Melbourne, Australia, she began her musical
                journey early, participating in choir performances and exploring
                her passion for singing and playing instruments like guitar and
                piano.
              </p>
              <p>
                In 2012, Rosé auditioned for YG Entertainment in Sydney and
                emerged as the top-ranked candidate among 700 participants. She
                subsequently moved to South Korea to undergo an intensive
                four-year training program before debuting as the main vocalist
                and lead dancer of BLACKPINK in August 2016.
              </p>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src={tiffanyPhoto}
              alt="Rosé at a Tiffany & Co. event"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div className="relative w-full aspect-[1866/1008]">
            <Image
              src={collageShapePhoto}
              alt="Rosé"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-contain"
            />
          </div>

          <div className="space-y-4 font-twentienty font-light text-[20px] leading-7 text-black/80">
            <p>
              Known for her unique voice, ethereal visuals, and captivating
              stage presence, Rosé has played a pivotal role in BLACKPINK's
              global success, contributing to hits like "How You Like That,"
              "Ddu-Du Ddu-Du," and "Kill This Love." The group has shattered
              records, becoming the first K-pop girl group to perform at
              Coachella and earning numerous awards worldwide.
            </p>
            <p>
              Beyond music, Rosé is a fashion icon and ambassador for luxury
              brands like Yves Saint Laurent and Tiffany & Co., often gracing
              the front rows of major fashion shows and international campaigns.
              Her down-to-earth personality and artistic talents have earned her
              millions of fans, collectively known as "BLINKs." Rosé continues
              to inspire with her dedication to her craft, her influence on
              global pop culture, and her ability to connect with audiences
              worldwide.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
          <div>
            <h2 className="font-orpheus font-bold text-[28px] mb-4">Hobby</h2>
            <p className="font-twentienty font-light text-[20px] leading-7 text-black/80">
              Rosé from BLACKPINK has a variety of hobbies that showcase her
              creativity and artistic nature. She loves music, especially
              singing and playing instruments like the guitar and piano. She
              enjoys photography, capturing aesthetic moments, and sketching
              during her free time. Rosé is also fond of exploring unique cafés,
              trying different foods, and staying active through dancing.
              Additionally, her interest in fashion allows her to experiment
              with styles and express her personality.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {hobbyPhotos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Rosé"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-orpheus font-bold text-[28px] mb-6">Memories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {memoryPhotos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Rosé"
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiographyPage;
