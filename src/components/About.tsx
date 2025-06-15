import React from "react";
import Rows from "./Rows";
import Image from "next/image";
import { imageAbout } from "@/assets";
import Button from "./Button";
import {motion} from "motion/react";

const About = ({sectionClass}: {sectionClass?: string}) => {
  const aboutContent = {
    title: "Where Imagination Howls",
    description:
      "Step into the enchanting world of Whimsy Wolves, a family-friendly NFT project where imagination knows no bounds. Rooted in storytelling, art, and community, Whimsy Wolves brings lovable characters to life, inviting people of all ages to explore a magical forest of creativity and connection.<br/><br/>More than just digital collectibles, Whimsy Wolves celebrates the joy of artistic expression, generosity, and innovation. Each wolf has a unique story and talent, inspiring others to unleash their own creativity. Together, our pack builds a world where kindness, play, and imagination create unforgettable adventures. <br/> <br/> Join us as we bridge the digital and real worlds—creating experiences that spark joy, foster togetherness, and bring dreams to life.",
    image: {
      src: imageAbout,
      alt: "Wolves Fun",
    },
  };

  return (
    <section id="about" className={`overflow-x-hidden xl:overflow-x-visible w-full container mx-auto px-4 lg:px-8 xl:px-0 py-20 ${sectionClass}`}>
      <Rows className=" justify-between gap-14 flex-col xl:flex-row">
        <div className="flex flex-col gap-4">
          <h2 className="text-[52px] leading-[1] md:leading-normal">
            {aboutContent.title}
          </h2>

          <p
            dangerouslySetInnerHTML={{ __html: aboutContent.description }}
            className="text-[22px]"
          ></p>

          <div className="py-8"><Button onClick={() => window.open("https://discord.gg/WYJzbqrY4A", "_blank")}>Join Community</Button></div>
        </div>

        <motion.div
        whileHover={{ scale: 1.1 , rotate: 5}} 
        className="xl:w-[3000px] max-w-[3000px] h-auto">
        <Image
          src={aboutContent.image.src}
          alt={aboutContent.image.alt}
          className="max-w-full max-h-full border-[4px] border-black rounded-[50px]"
        />
        </motion.div>

        
      </Rows>
    </section>
  );
};

export default About;
