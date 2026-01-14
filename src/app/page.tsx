import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ShowcaseSection from "@/components/ShowcaseSection";
import GallerySlider from "@/components/GallerySlider";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <GallerySlider />
      <Services />
      <ShowcaseSection />
    </div>
  );
}
