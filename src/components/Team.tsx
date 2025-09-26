"use client";

import { artist } from "@/assets";
import Image from "next/image";
import React from "react";
import Rows from "./Rows";
import { motion } from "motion/react";
import Link from "next/link";

const Team = ({ sectionClass }: { sectionClass?: string }) => {
  return (
    <section
      id="team"
      className={`overflow-x-hidden xl:overflow-x-visible w-full container mx-auto px-4 xl:px-0 pt-20 pb-8 ${sectionClass}`}
    >
      {/* Section Title */}
      <Rows className="text-center pb-20 justify-center">
        <h2
          className="text-6xl text-white font-bold uppercase"
          style={{
            textShadow:
              "0 0 15px #698362aa, 0 0 30px #69836288, 0 0 45px #698362cc",
          }}
        >
          TEAM
        </h2>
      </Rows>

      {/* Grid: Left = Pic, Right = Story Text */}
      {/* KEY CHANGE: items-center to vertically center both grid items */}
      <Rows className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Founder Image */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ boxShadow: "0 0 10px 6px #69836255" }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              zIndex: 20,
              boxShadow: [
                "0 0 15px 6px #69836288",
                "0 0 30px 14px #698362cc",
                "0 0 15px 6px #69836288",
              ],
              transition: { duration: 1.5, repeat: Infinity },
            }}
            className="relative rounded-xl border-4 border-black transition-all duration-300"
          >
            <Link href="https://x.com/edsakunt" target="_blank">
              <Image
                src={artist}
                alt="Founder"
                className="max-w-full h-auto rounded-xl"
              />
            </Link>
          </motion.div>

          <h4 className="text-3xl text-white">FOUNDER | DEV | ARTIST</h4>
          <Link href="https://x.com/edsakunt" target="_blank">
            <p className="text-xl" style={{ color: "#698362" }}>
              @edsakunt
            </p>
          </Link>
        </div>

        {/* Story Text */}
        {/* KEY CHANGE: remove centering here; let it be left-aligned and it will sit mid-height thanks to grid items-center */}
        <div className="flex flex-col gap-6 text-white">
          <p className="text-[20px] md:text-[24px] leading-relaxed">
            KryptoKunts is built from the ground up by a single degen —{" "}
            <span className="font-bold">artist, builder, and founder.</span>
          </p>
          <p className="text-[20px] md:text-[24px] leading-relaxed">
            Born out of a desire to prove that{" "}
            <span className="font-bold">anyone</span> can create an NFT project,
            no matter your background or skillset, KryptoKunts is a testament to
            persistence, creativity, and degen energy.
          </p>
          <p className="text-[20px] md:text-[24px] leading-relaxed">
            From the art to the code, from the community to the vision — every
            part of KryptoKunts has been crafted by hand, showing that no barrier
            is too high when the undead are at your back.
          </p>
        </div>
      </Rows>
    </section>
  );
};

export default Team;
