import voguePhoto from "@/assets/photo-page/vogue-hong-kong.jpg";
import Sulwhasoo from "@/assets/photo-page/ROSE-x-Sulwhasoo.jpeg";
import image7 from "@/assets/photo-page/image 7.png";
import React from "react";
import SectionCta from "@/components/SectionCta";
import PhotoTile from "@/components/PhotoTile";
import RevealOnScroll from "@/components/RevealOnScroll";

const photos = [
  {
    src: voguePhoto,
    caption: "Cover of Vogue Hong Kong",
  },
  {
    src: image7,
    caption: "Rosé x Tiffany & Co",
  },
  {
    src: Sulwhasoo,
    caption: "Rosé x Sulwhasooo",
  },
];

const PhotoSection = () => {
  return (
    <section className=" container mx-auto max-w-6xl px-10 md:px-3 py-16">
      {/* ==== Photo Header ===== */}
      <div className=" flex justify-between mb-[36px] w-full">
        <h1 className=" font-orpheus font-bold text-[36px]">Photos</h1>
        <SectionCta
          href="/photos"
          label="SEE MORE"
          className="hidden md:flex"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {photos.map(({ src, caption }, i) => (
          <RevealOnScroll key={caption} delay={i * 0.15}>
            <PhotoTile
              src={src}
              alt={caption}
              caption={caption}
              className="h-[600px]"
            />
          </RevealOnScroll>
        ))}
      </div>

      <SectionCta
        href="/photos"
        label="SEE MORE"
        className="flex md:hidden justify-center mt-10"
      />
    </section>
  );
};

export default PhotoSection;
