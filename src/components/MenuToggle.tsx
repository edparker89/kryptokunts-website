import React from "react";
import { motion } from "motion/react";
import Button from "./Button";
import { Icon } from "@iconify/react/dist/iconify.js";

interface menuProps {
  title: string;
  link: string;
}

interface stateMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuToggle: React.FC<stateMenuProps> = ({
  setIsMenuOpen,
  isMenuOpen,
}) => {
  const menuLink: Array<menuProps> = [
    { title: "ABOUT", link: "#about" },
    { title: "GALLERY", link: "#nftgallery" },
    { title: "VALUES", link: "#values" },
    { title: "ROAD MAP", link: "#roadmap" },
    { title: "TEAM", link: "#team" },
    { title: "FAQ", link: "#faq" },
  ];

  const scrollToSection = (link: string) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const MenuToggleVariant = {
    visible: { y: "0%", opacity: 1 },
    hidden: { y: "-100%", opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={MenuToggleVariant}
      className="w-full bg-[#1c1c1c]/90 backdrop-blur-sm fixed top-0 z-[100000] rounded-b-3xl border-[6px] border-black px-8 sm:px-10 md:px-14 py-10 sm:py-14 md:py-28"
    >
      {/* Text Menu & Close Button */}
      <div className="flex justify-between items-start">
        <ul className="flex flex-wrap gap-6 sm:gap-10 md:gap-20 w-5/6">
          {menuLink.map((menu, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(menu.link)}
                className="focus:outline-none"
              >
                <motion.h3
                  initial={{
                    scale: 1,
                    textShadow: "0 0 12px #69836255",
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: [
                      "0 0 15px #69836288, 0 0 25px #69836255",
                      "0 0 25px #698362cc, 0 0 40px #69836299",
                      "0 0 15px #69836288, 0 0 25px #69836255",
                    ],
                    transition: { duration: 1.5, repeat: Infinity },
                  }}
                  className="text-white text-[26px] sm:text-[32px] md:text-[40px] font-bold uppercase cursor-pointer transition-all duration-300"
                >
                  {menu.title}
                </motion.h3>
              </button>
            </li>
          ))}
        </ul>

        <Button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="px-[2px] py-[2px] md:px-4 md:py-4"
        >
          <Icon
            icon="material-symbols:close"
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-[46px] md:h-[46px]"
          />
        </Button>
      </div>
    </motion.div>
  );
};

export default MenuToggle;
