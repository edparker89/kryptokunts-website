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
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Gallery",
      link: "#nftgallery",
    },
    {
      title: "Values",
      link: "#values",
    },
    {
      title: "Road Map",
      link: "#roadmap",
    },
    {
      title: "Team",
      link: "#team",
    },
    {
      title: "FAQ",
      link: "#faq",
    },
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
      className="w-full bg-[#C0D5FF] fixed top-0 z-[100000] rounded-b-3xl border-[6px] border-black px-14 py-14 md:py-28"
    >
      {/* Text Menu & Close Button */}
      <div className="flex justify-between items-start">
        <ul className="flex flex-wrap gap-10 md:gap-20 w-5/6">
          {menuLink.map((menu, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(menu.link)}
                className="focus:outline-none"
              >
                <motion.h3
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="text-black text-4xl md:text-[76px]"
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
            className="w-8 h-8 md:w-[46px] md:h-[46px]"
          />
        </Button>
      </div>

      {/* Icon menu & NFT Character */}
    </motion.div>
  );
};

export default MenuToggle;
