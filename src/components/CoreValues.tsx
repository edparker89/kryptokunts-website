"use client";
import React from "react";
import Rows from "./Rows";
import { artisityValues, generosityValues, innovationValues } from "@/assets";
import {motion} from "motion/react";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  src: any;
}

export const CoreValues = ({ sectionClass }: { sectionClass?: string }) => {
  const testimonials: Array<TestimonialProps> = [
    {
      quote:
        "Everyone is an artist. Whether visible or behind the scenes, artistry is in every action within our community. Art is intentional workmanship reflecting emotional labor and deliberate effort. It's the heart and soul you bring by offering your best, focusing on intention rather than the medium or outcome.",
      name: "Artistry",

      src: artisityValues,
    },
    {
      quote:
        "We must embrace generosity. Being generous with our time, resources, and actions, and extending kindness to all. It invites us to celebrate diverse backgrounds and interests. By practicing generosity, we create a welcoming and valued community. Generosity is the foundation of our thriving community.",
      name: "Generosity",

      src: generosityValues,
    },
    {
      quote:
        "Innovation is crucial for growth. It celebrates creativity and forward-thinking ideas in all areas of our community. Innovation drives us to explore, experiment, and evolve, keeping us dynamic and relevant. We empower everyone to think outside the box and contribute to growth and transformation.",
      name: "Innovation",

      src: innovationValues,
    },
  ];

  return (
    <section
      id="values"
      className={`overflow-x-hidden xl:overflow-x-visible w-full container mx-auto px-4 xl:px-0 py-20 ${sectionClass}`}
    >
      <Rows className="justify-center">
        <h2 className="text-6xl text-center">Core Values</h2>
      </Rows>

      <Rows className="flex-col md:flex-row gap-8 pt-16">
        {testimonials.map((item, index) => (
          <Rows className="flex-col gap-4 text-center" key={index}>
            <motion.div
            whileHover={{ scale: 1.2, rotate: 5, transformOrigin: "bottom" }}
            >
            <Image src={item.src} alt={item.name} className="w-full h-auto" />
            </motion.div>
            <h3 className="text-3xl">{item.name}</h3>
            <p>{item.quote}</p>
          </Rows>
        ))}
      </Rows>
      {/* <AnimatedTestimonials testimonials={testimonials} /> */}
    </section>
  );
};
