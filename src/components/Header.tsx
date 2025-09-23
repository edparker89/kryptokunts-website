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
      className="w-full h-[700px] md:h-[1000px] bg-no-repeat bg-cover bg-fixed relative overflow-x-hidden "
    >
      {/* layer blur */}
      <div className="w-full h-full backdrop-blur-[2px] absolute  top-0 left-0 z-[-1px]"></div>

      {/* Navigation Menus */}
      <NavigationHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Title */}
      <motion.h1
        className="text-[50px] md:text-[100px] leading-[80px] md:leading-[140px] lg:text-[100px] xl:text-[100px] text-center strokeFams text-white mt-52 lg:mt-80 z-[10] relative"
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
          variants={{ hidden: { scale: 0.3 }, visible: { scale: 0.5 } }}
        >
          KRYPTOKUNTS
        </motion.span>

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
