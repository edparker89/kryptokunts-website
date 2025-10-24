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

  // useMotionValueEvent(scrollY, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })

  // const element = useRef(null);
  // const {scrollYProgress} = useScroll({
  //   target: element,
  //   offset: ['start 20%', 'start center']
  // })

  // useEffect(() => {
  //   scrollYProgress.on("change", e => console.log(e))
  // }, [ scrollYProgress])

  // Map scroll progress to translateX
  // const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);
  // const smoothScroll = useSpring(translateX, { mass: 0.1, damping: 10 });

  return (
      <section
        style={{ backgroundImage: `url(${KK_header.src})` }}
        className="w-screen min-h-[70vh] sm:min-h-[80vh] md:min-h-[100vh] 
        bg-no-repeat bg-cover bg-center relative overflow-hidden 
        overflow-x-hidden fixed:overflow-x-hidden"
      >
      {/* layer blur */}
      <div className="w-full h-full backdrop-blur-[2px] absolute  top-0 left-0 z-[-1px]"></div>

      {/* Navigation Menus */}
      <NavigationHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Title */}
      <motion.h1
        className="relative z-[2] text-center text-white font-bold 
        text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] 
        leading-tight mt-40 sm:mt-48 md:mt-64 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        KRYPTOKUNTS
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

      {/* Menu Clicked */}
      {isMenuOpen && (
        <AnimatePresence>
          <MenuToggle setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </AnimatePresence>
      )}
    </section>
  );
};
