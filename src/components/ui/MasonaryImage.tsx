/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <>
      <div id="nftgallery" className="text-6xl py-8 mb-8">
        <h2
          className="text-center text-white font-bold uppercase"
          style={{
            textShadow:
              "0 0 15px #698362aa, 0 0 30px #69836288, 0 0 45px #698362cc",
          }}
        >
          THE GALLERY
        </h2>
      </div>

      <section 
        className={cn(
          "h-[50rem]  items-start overflow-y-auto w-full hidden md:block ",
          className
        )}
        ref={gridRef}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-0 px-10"
          ref={gridRef}
        >
          <div className="grid gap-10">
            {firstPart.map((el, idx) => (
              <motion.div
                style={{ y: translateFirst }} // Apply the translateY motion value here
                key={"grid-1" + idx}
              >
                <Image
                  src={el}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                <Image
                  src={el}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                <Image
                  src={el}
                  className="w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
               </motion.div>
           ))}
          </div>
        </div>
      </section>

      <div className="w-full relative px-4 py-4 md:hidden">
            <div className="flex flex-col gap-8">
                {images.map((item, idx) => (
                    <Image
                        src={item}
                        className=""
                        alt="thumbnail"
                        width={400}
                        height={400}
                        key={idx}
                    />
                ))}
            </div>
      </div>
    </>
  );
};
