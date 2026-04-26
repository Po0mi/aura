import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TheQuietTruth from "@/components/theQuietTruth";
import TheIllusion from "@/components/TheIllusion";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CtaSection from "@/components/CtaSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <TheQuietTruth />
      <TheIllusion />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaSection />
      <Footer />
    </>
  );
}
