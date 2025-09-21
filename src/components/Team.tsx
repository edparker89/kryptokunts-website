import { artist, founder, headOfCollabs } from "@/assets";

import Image from "next/image";
import React from "react";
import Rows from "./Rows";
import { motion } from "motion/react";
import Link from "next/link";

const Team = ({ sectionClass }: { sectionClass?: string }) => {
  const teamContent = [
    {
      position: "FOUNDER | ARTIST",
      social: "@edsakunt",
      socialLink: "https://x.com/edsakunt",
      picture: artist,
    },
    {
      position: "Artist",
      social: "@alidoo_wolves",
      socialLink: "https://x.com/alidoo_wolves",
      picture: founder,
    },
    {
      position: "Head of Operations",
      social: "@musashi_btc",
      socialLink: "https://x.com/musashi_btc",
      picture: headOfCollabs,
    },
  ];

  return (
    <section
      id="team"
      className={`overflow-x-hidden xl:overflow-x-visible w-full container mx-auto px-4 xl:px-0 py-20 ${sectionClass}`}
    >
      <Rows className="text-center pb-20 justify-center">
        <h2 className="text-6xl text-center">TEAM</h2>
      </Rows>

      <Rows className="grid grid-cols-1 md:grid-cols-3 md:flex-row gap-8">
        {teamContent.map((item, index) => (
          <Rows key={index} className="flex-col gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5, transformOrigin: "bottom" }}
              whileTap={{ rotate: 0 }}
            >
              <Link href={item.socialLink} target="_blank">
              <Image
                src={item.picture}
                alt="Wolves Fun"
                className="max-w-full border-[4px] border-black rounded-[0px]"
              />
              </Link>
            </motion.div>

            <h4 className="text-4xl text-center">{item.position}</h4>
            <Link href={item.socialLink} target="_blank">
              <p className="text-x text-center">{item.social}</p>
            </Link>
          </Rows>
        ))}
      </Rows>
    </section>
  );
};

export default Team;
