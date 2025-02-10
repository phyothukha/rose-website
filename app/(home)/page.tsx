import AlbumSection from "./sections/AlbumSection";
import HeroSection from "./sections/HeroSection";
import VideoSection from "./sections/VideoSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AlbumSection />
      <VideoSection />
    </>
  );
}
