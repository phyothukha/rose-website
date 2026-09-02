import AlbumSection from "./sections/AlbumSection";
import BlackpinkSection from "./sections/BlackpinkSection";
import HeroSection from "./sections/HeroSection";
import PhotoSection from "./sections/PhotoSection";
import VideoSection from "./sections/VideoSection";
import RevealOnScroll from "@/components/RevealOnScroll";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <RevealOnScroll>
        <AlbumSection />
      </RevealOnScroll>
      <RevealOnScroll>
        <VideoSection />
      </RevealOnScroll>
      <PhotoSection />
      <BlackpinkSection />
    </>
  );
}
