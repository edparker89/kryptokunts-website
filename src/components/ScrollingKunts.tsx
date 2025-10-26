import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { kunt1, kunt2, kunt3, kunt4, kunt5 } from "@/assets";

const ScrollingKunts = () => {
  // Scroll progress tracking
  const { scrollY } = useScroll();

  // Map scroll progress to X translation for each wolf
  const translateXWolf0 = useTransform(scrollY, [0, 500], ["100%", "0%"]);
  const translateXWolf1 = useTransform(scrollY, [0, 500], ["120%", "-20%"]);
  const translateXWolf2 = useTransform(scrollY, [0, 500], ["140%", "-40%"]);
  const translateXWolf3 = useTransform(scrollY, [0, 500], ["160%", "-60%"]);
  const translateXWolf4 = useTransform(scrollY, [0, 500], ["180%", "-80%"]);

  const wolves = [
    { src: kunt1, x: translateXWolf0 },
    { src: kunt2, x: translateXWolf1 },
    { src: kunt3, x: translateXWolf2 },
    { src: kunt4, x: translateXWolf3 },
    { src: kunt5, x: translateXWolf4 },
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

export default ScrollingKunts;
