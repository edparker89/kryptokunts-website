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
      href: "https://x.com/KryptoKunts",
    },
  ];

  return (
    <footer className="w-full px-4 md:px-0 py-8 border-[4px] bg-[#1c1c1c]/80 backdrop-blur-sm border-black">
      <Rows className="flex-col md:flex-row justify-between gap-8 md:gap-0 items-center container mx-auto">
        
        {/* Glowing Title */}
        <h3
          className="text-3xl font-bold uppercase text-white"
          style={{
            textShadow:
              "0 0 12px #69836288, 0 0 25px #69836255, 0 0 40px #69836288",
          }}
        >
          KRYPTOKUNTS
        </h3>

        {/* Social Icons */}
        <div className="flex flex-row gap-4 justify-center flex-wrap">
          {iconContent.map(({ icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <motion.div
                initial={{ 
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  borderRadius: "9999px",
                  padding: "16px",
                  boxShadow: "0 0 4px #69836244", // smaller idle glow
                }}
                  whileHover={{
                    scale: 1.05, // slightly smaller hover scale
                    boxShadow: [
                      "0 0 6px 2px #69836288, 0 0 8px #00000066",
                      "0 0 12px 4px #698362cc, 0 0 10px #00000088",
                      "0 0 6px 2px #69836288, 0 0 8px #00000066",
                    ],
                    transition: { duration: 1.5, repeat: Infinity },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer border-[3px] border-black flex items-center justify-center"
                  >
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
