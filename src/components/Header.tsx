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
      className="relative w-full h-[600px] sm:h-[700px] md:h-[900px] lg:h-[1000px] overflow-x-hidden bg-no-repeat bg-cover bg-fixed"
      style={{ backgroundImage: `url(${KK_header.src})` }}
    >
      {/* Mobile background fallback (since bg-fixed often fails on iOS) */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src={KK_header}
          alt="KryptoKunts Header"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2px] -z-10" />

      {/* Navigation */}
      <NavigationHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Title */}
      <motion.h1
        className="relative z-[2] text-center text-white strokeFams mt-40 sm:mt-48 md:mt-60 lg:mt-80 
        text-[36px] leading-[48px] sm:text-[48px] sm:leading-[60px] 
        md:text-[80px] md:leading-[110px] lg:text-[100px] lg:leading-[140px]"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
      >
        <motion.span>KRYPTOKUNTS</motion.span>
      </motion.h1>

      {/* The KUNTS */}
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

      {/* Menu open overlay */}
      {isMenuOpen && (
        <AnimatePresence>
          <MenuToggle setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </AnimatePresence>
      )}
    </section>
  );
};
