import React from "react";
import Rows from "./Rows";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "motion/react";

const Footer = () => {
  const iconContent = [
    {
      icon: "ic:outline-discord",
      href: "https://discord.gg/WYJzbqrY4A",
    },
    {
      icon: "line-md:twitter-x",
      href: "https://x.com/WhimsyWolves",
    },

    {
      icon: "iconoir:instagram",
      href: "https://www.instagram.com/whimsywolves",
    },
  ];

  return (
    <footer className="w-full px-4 md:px-0 py-8 border-[4px] bg-[#C0D5FF] border-black">
      <Rows className="flex-col md:flex-row justify-between gap-8 md:gap-0 items-center container mx-auto">
        <h3 className="text-3xl">Whimsy Wolves</h3>

        <div className="flex flex-row gap-4 justify-center flex-wrap">
          {iconContent.map(({ icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                className="cursor-pointer bg-primaryColor border-[3px] bg-[#E7EFFF] border-black rounded-full p-4"
              >
                {/* <Image src={src} alt={alt} className="md:max-w-5 md:max-h-5 max-w-5 max-h-5" /> */}
                <Icon icon={icon} width="24" height="24" />
              </motion.div>
            </a>
          ))}
        </div>
      </Rows>
    </footer>
  );
};

export default Footer;
