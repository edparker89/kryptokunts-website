"use client";
import React from "react";
import Rows from "./Rows";
import { community, education, sustainability } from "@/assets";
import { motion } from "motion/react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  src: any;
}

export const CoreValues = ({ sectionClass }: { sectionClass?: string }) => {
  const testimonials: Array<TestimonialProps> = [
    {
      quote:
        "At the rotting heart of KryptoKunts lies its greatest strength — the Horde. Every trait, roadmap twist, and mint detail is shaped by the infected themselves. No corporate suits. No silent decisions. Just a collective of beautifully deranged minds steering the apocalypse together.<br/><br>In this community, calling each other kunts isn't just allowed — it's a badge of honour 🫶. So grab your shovel, join the Horde, and help dig the future of undead degeneracy.",
      name: "COMMUNITY",
      src: community,
    },
    {
      quote:
        "KryptoKunts was spawned by one shambling undead degen with zero art school, coding bootcamp, or marketing degree to their name — just pure, unrelenting grind. Every pixel, every line of code, every page you see was clawed into existence through stubbornness and caffeine.<br/><br>If this zombified lunatic can do it, so can you. 💪<br/><br>That's why KryptoKunts shares its guts and glory — tutorials, tips, and behind-the-scenes breakdowns — to help others rise from the digital grave and build their own unstoppable communities.",
      name: "EDUCATION",
      src: education,
    },
    {
      quote:
        "KryptoKunts isn't just undead — it's undying for the planet. As part of the Horde for Good, every mint helps rewild real habitats and fight back against the human-made apocalypse that started it all: habitat loss, climate chaos, and biodiversity collapse.<br/><br>From restoring nature one hectare at a time to building on Solana, one of the most eco-friendly blockchains in Web3, KryptoKunts proves that even the undead can give life back to the planet. 🌱",
      name: "SUSTAINABILITY",
      src: sustainability,
    },
  ];

  return (
    <section
      id="values"
      className={`overflow-x-hidden xl:overflow-x-visible w-full container mx-auto px-4 xl:px-0 pt-20 pb-10 ${sectionClass}`}
    >
      <Rows className="justify-center">
        <h2
          className="text-6xl text-center text-white font-bold uppercase"
          style={{
            textShadow:
              "0 0 15px #698362aa, 0 0 30px #69836288, 0 0 45px #698362cc",
          }}
        >
          CORE VALUES
        </h2>
      </Rows>

      <Rows className="flex-col md:flex-row justify-center items-start gap-12 pt-20">
        {testimonials.map((item, index) => (
          <Rows
            key={index}
            className="flex-col text-center items-center max-w-[420px]"
          >
            <div className="flex justify-center items-center w-[460px] h-[300px]">
              <motion.div
                initial={{ boxShadow: "0 0 10px 10px #69836255" }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  zIndex: 20,
                  boxShadow: [
                    "0 0 15px 4px #69836288",
                    "0 0 30px 12px #698362cc",
                    "0 0 15px 4px #69836288",
                  ],
                  transition: { duration: 1.5, repeat: Infinity },
                }}
                style={{ transformOrigin: "center center" }}
                className="relative rounded-xl border-4 border-black transition-all duration-300 overflow-hidden box-border"
              >
                <div className="w-[420px] h-[280px] relative">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </motion.div>
            </div>
            <h3 className="text-3xl pt-6 pb-6">{item.name}</h3>
            <p
              className="text-white text-[16px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.quote }}
            />
          </Rows>
        ))}
      </Rows>
    </section>
  );
};
