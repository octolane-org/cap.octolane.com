import Cta from "@/components/cta";
import FeaturesBlocks from "@/components/features-blocks";
import Features from "@/components/features-home";
import FeaturesWorld from "@/components/features-world";
import Hero from "@/components/hero-home";
import News from "@/components/news";

export const metadata = {
  title: "ByeByeCarta.com",
  description: "Open Source Cap Table Manager",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks />
      <FeaturesWorld />
      <News />
      <Cta /> */}
    </>
  );
}
