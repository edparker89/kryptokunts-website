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
      className={`w-full overflow-x-hidden pt-20 pb-8 ${sectionClass}`}
    >
      {/* Section Title */}
      <Rows className="justify-center pb-12 px-4">
        <h2
          className="text-[clamp(1.75rem,5vw,2.5rem)] text-white font-bold uppercase text-center"
          style={{
            textShadow:
              "0 0 15px #698362aa, 0 0 30px #69836288, 0 0 45px #698362cc",
          }}
        >
          TEAM
        </h2>
      </Rows>

      {/* Grid: image + text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Founder Image */}
        <div className="flex flex-col items-center gap-4">
          <motion.div
            initial={{ boxShadow: "0 0 10px 6px #69836255" }}
            whileHover={{
              scale: 1.05, // slightly reduced to avoid overflow
              rotate: 3,
              zIndex: 20,
              boxShadow: [
                "0 0 15px 6px #69836288",
                "0 0 30px 14px #698362cc",
                "0 0 15px 6px #69836288",
              ],
              transition: { duration: 1.5, repeat: Infinity },
            }}
            className="relative rounded-xl border-4 border-black transition-all duration-300 overflow-hidden"
          >
            <Link href="https://x.com/edsakunt" target="_blank">
              <Image
                src={artist}
                alt="Founder"
                className="w-full max-w-[350px] h-auto rounded-xl object-cover"
                priority
              />
            </Link>
          </motion.div>

          <h4 className="text-[clamp(1.25rem,4vw,1.75rem)] text-white font-bold text-center">
            FOUNDER | DEV | ARTIST
          </h4>
          <Link href="https://x.com/edsakunt" target="_blank">
            <p
              className="text-[clamp(1rem,3vw,1.25rem)]"
              style={{ color: "#698362" }}
            >
              @edsakunt
            </p>
          </Link>
        </div>

        {/* Story Text */}
        <div className="flex flex-col gap-6 text-white">
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed">
            KryptoKunts is built from the ground up by a single degen —{" "}
            <span className="font-bold">artist, builder, and founder.</span>
          </p>
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed">
            Born out of a desire to prove that{" "}
            <span className="font-bold">anyone</span> can create an NFT project,
            no matter your background or skillset, KryptoKunts is a testament to
            persistence, creativity, and degen energy.
          </p>
          <p className="text-[clamp(1rem,3.5vw,1.25rem)] leading-relaxed">
            From the art to the code, from the community to the vision — every
            part of KryptoKunts has been crafted by hand, showing that no barrier
            is too high when the undead are at your back.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
