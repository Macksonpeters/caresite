import About from "@/components/about/about";
import CareTypes from "@/components/about/caretypes";
import Features from "@/components/about/features";
import WhyUs from "@/components/about/whyus";
import Contact from "@/components/contact/contact";
import Explore from "@/components/explore/explore";
import Hero from "@/components/hero/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div id="about">
        <Features />
      </div>
      <About />
      <WhyUs />
      <CareTypes />
      <Contact />
    </div>
  );
}
