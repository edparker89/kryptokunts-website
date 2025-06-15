"use client";

import NavigationHeader from "./NavigationHeader";
import {
  wolvesCharacter0,
  wolvesCharacter1,
  wolvesCharacter2,
  wolvesCharacter3,
  wolvesCharacter4,
  wolvesMatch1,
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
      style={{ backgroundImage: `url(${wolvesMatch1.src})` }}
      className="w-full h-[700px] md:h-[1000px] bg-no-repeat bg-cover bg-fixed relative overflow-x-hidden "
    >
      {/* layer blur */}
      <div className="w-full h-full backdrop-blur-[2px] absolute  top-0 left-0 z-[-1px]"></div>

      {/* Navigation Menus */}
      <NavigationHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Tittle */}
      <motion.h1
        className="text-[50px] md:text-[100px] leading-[80px] md:leading-[140px] lg:text-[100px] xl:text-[180px] text-center strokeFams text-white mt-52 lg:mt-80 z-[10] relative"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        variants={{
          hidden: { scale: 0.5 },
          visible: {
            scale: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.span
          variants={{ hidden: { scale: 0.5 }, visible: { scale: 1 } }}
        >
          Whimsy
        </motion.span>
        <motion.span
          variants={{ hidden: { scale: 0.5 }, visible: { scale: 1 } }}
        >
          Wolves
        </motion.span>
      </motion.h1>

      {/* The Wolves */}
      <motion.div
        style={{ x: SmoothY }}
        className="flex gap-5 2xl:gap-52 flex-row w-full justify-center absolute bottom-0 "
      >
        <Image
          src={wolvesCharacter0}
          alt="Wolves"
          className="w-auto h-auto 2xl:scale-150 2xl:-translate-y-20"
        />

        <Image
          src={wolvesCharacter1}
          alt="Wolves"
          className="w-auto h-auto 2xl:scale-150 2xl:-translate-y-20"
        />

        <Image
          src={wolvesCharacter2}
          alt="Wolves"
          className="w-auto h-auto 2xl:scale-150 2xl:-translate-y-20"
        />

        <Image
          src={wolvesCharacter3}
          alt="Wolves"
          className="w-auto h-auto 2xl:scale-150 2xl:-translate-y-20"
        />

        <Image
          src={wolvesCharacter4}
          alt="Wolves"
          className="w-auto h-auto 2xl:scale-150 2xl:-translate-y-20"
        />
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
