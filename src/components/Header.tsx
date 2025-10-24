"use client";

import NavigationHeader from "./NavigationHeader";
import {
  kunt1,
  kunt2,
  kunt3,
  kunt4,
  kunt5,
  KK_header,
} from "@/assets";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Image from "next/image";

interface stateMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ isMenuOpen, setIsMenuOpen }: stateMenuProps) => {
  const { scrollY } = useScroll();
  const SmoothY = useSpring(scrollY, { mass: 0.5, damping: 20 });

  return (
    <section
      style={{ backgroundImage: `url(${KK_header.src})` }}
      className="relative w-[100vw] max-w-[100vw] min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh]
      bg-no-repeat bg-cover bg-center overflow-hidden overflow-x-hidden"
    >
      {/* Overlay (for better contrast) */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Navigation (pinned at top, always visible) */}
      <div className="fixed top-0 left-0 w-full z-[50]">
        <NavigationHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      {/* Title */}
      <motion.h1
        className="relative z-[2] text-center text-white font-bold 
        text-[clamp(2rem,8vw,5.5rem)] leading-tight mt-40 sm:mt-48 md:mt-64 
        drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] px-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        KRYPTOKUNTS
      </motion.h1>

      {/* The KUNTS (leave untouched) */}
      <motion.div
        style={{ x: SmoothY }}
        className="flex gap-5 2xl:gap-52 flex-row w-full justify-center absolute bottom-0"
      >
        {[kunt1, kunt2, kunt3, kunt4, kunt5].map((img, i) => (
          <Image
            key={i}
            src={img}
            alt={`NFT ${i + 1}`}
            width={3000}
            height={3000}
            className="h-40 w-auto sm:h-52 md:h-64 lg:h-72 xl:h-80 2xl:h-96"
          />
        ))}
      </motion.div>

      {/* Menu Clicked */}
      {isMenuOpen && (
        <AnimatePresence>
          <MenuToggle setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </AnimatePresence>
      )}
    </section>
  );
};
