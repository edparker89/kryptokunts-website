import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { wolvesCharacter0, wolvesCharacter1, wolvesCharacter2, wolvesCharacter3, wolvesCharacter4 } from "@/assets";

const ScrollingWolves = () => {
  // Scroll progress tracking
  const { scrollY } = useScroll();

  // Map scroll progress to X translation for each wolf
  const translateXWolf0 = useTransform(scrollY, [0, 500], ["100%", "0%"]);
  const translateXWolf1 = useTransform(scrollY, [0, 500], ["120%", "-20%"]);
  const translateXWolf2 = useTransform(scrollY, [0, 500], ["140%", "-40%"]);
  const translateXWolf3 = useTransform(scrollY, [0, 500], ["160%", "-60%"]);
  const translateXWolf4 = useTransform(scrollY, [0, 500], ["180%", "-80%"]);

  const wolves = [
    { src: wolvesCharacter0, x: translateXWolf0 },
    { src: wolvesCharacter1, x: translateXWolf1 },
    { src: wolvesCharacter2, x: translateXWolf2 },
    { src: wolvesCharacter3, x: translateXWolf3 },
    { src: wolvesCharacter4, x: translateXWolf4 },
  ];

  return (
    <div className="relative h-[200vh] overflow-hidden">
      <div className="flex absolute bottom-0 w-full gap-5 justify-center">
        {wolves.map((wolf, index) => (
          <motion.div
            key={index}
            style={{ x: wolf.x }}
            className="relative"
            transition={{ ease: "easeOut" }}
          >
            <Image
              src={wolf.src}
              alt={`Wolf ${index}`}
              className="w-auto h-auto 2xl:scale-150 2xl:-translate-y-20"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingWolves;
