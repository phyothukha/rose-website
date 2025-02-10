import AlbumSection from "./sections/AlbumSection";
import HeroSection from "./sections/HeroSection";
import PhotoSection from "./sections/PhotoSection";
import VideoSection from "./sections/VideoSection";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AlbumSection />
      <VideoSection />
      <PhotoSection />
    </>
  );
}
