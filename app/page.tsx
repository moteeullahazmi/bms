import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import BeforeAfter from "@/components/BeforeAfter";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter/>
      <Gallery />
      <Reviews />
      <CTA />
    </>
  );
}
