"use client";

import React from "react";
import Rows from "./Rows";
import Image from "next/image";
import { about } from "@/assets";
import Button from "./Button";

const About = ({ sectionClass }: { sectionClass?: string }) => {
  const aboutContent = {
    title: "JOIN THE HORDE",
    description:
      "<br/><br>🌍 2025 – The Year the World Glitched<br/><br>NFTs? Dead. Memes? Dumping. Bull run? Never showed.<br/><br>Then Mother Nature hit the blockchain harder than a rugpull. Decades of habitat destruction, climate chaos, and biodiversity loss opened the door for something far worse…<br/><br>A parasite. Unknown. Unstoppable. It spread faster than airdrops in a bull market. They called it the Kontagious Undead Neuro Toxin aka “KUNT” for short.<br/><br>🌆 Cities collapsed. 🌱 Ecosystems vanished. 🧟 Humanity… infected.<br/><br>But not all hope was lost. The survivors formed a mission: restore the planet, save the species, and cure the plague.<br/><br>Every forest regrown. Every wetland restored. Every species brought back — one hectare at a time — pushes back the undead.<br/><br>This is KryptoKunts: a post-apocalyptic PFP project where holders join the Horde for Good 🧟‍♂️.<br/><br>💚 10% of every mint funds real-world habitat restoration.<br/><br>Survive. Restore. Rebuild. Together.<br/><br>Mint your 'KUNT'. Heal the planet. End the outbreak.<br/><br>",
    image: {
      src: about,
      alt: "Bunch of KUNTS",
    },
  };

  return (
    <section
      id="about"
      className={`overflow-x-hidden xl:overflow-x-visible w-full container mx-auto px-4 lg:px-8 xl:px-0 py-20 ${sectionClass}`}
    >
      <Rows className="justify-between gap-14 flex-col xl:flex-row">
        {/* Mobile: image above text */}
        <div className="block xl:hidden mb-8">
          <Image
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            className="w-full h-auto border-[4px] border-black rounded-[30px]"
          />
        </div>

        {/* Left: Text */}
        <div className="flex flex-col gap-4 xl:w-1/2">
          <h2 className="text-[40px] leading-[1] md:leading-normal">
            {aboutContent.title}
          </h2>

          <p
            dangerouslySetInnerHTML={{ __html: aboutContent.description }}
            className="text-[24px]"
          ></p>

          <div className="py-8">
            <Button
              onClick={() => window.open("https://x.com/KryptoKunts", "_blank")}
            >
              Join Community
            </Button>
          </div>
        </div>

        {/* Desktop: sticky image to the right */}
        <div className="xl:w-1/2 relative hidden xl:block">
          <div className="sticky top-20">
            <Image
              src={aboutContent.image.src}
              alt={aboutContent.image.alt}
              className="max-w-full max-h-full border-[4px] border-black rounded-[50px]"
            />
          </div>
        </div>
      </Rows>
    </section>
  );
};

export default About;