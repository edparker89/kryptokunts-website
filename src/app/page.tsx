"use client";

import { nftGallery } from "@/assets";
import { useState } from "react";
import { ParallaxScroll } from "@/components/ui/MasonaryImage";
import { RoadMap } from "@/components/RoadMap";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { Header } from "@/components/Header";
import { CoreValues } from "@/components/CoreValues";
import { Faq } from "@/components/Faq";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <About />
      <ParallaxScroll images={nftGallery.map(({ src }) => src)} />
      <CoreValues/>
      <RoadMap />
      <Team />
      <Faq />
      <Footer />
    </>
  );
}
