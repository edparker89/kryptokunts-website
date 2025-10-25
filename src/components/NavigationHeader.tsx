import { logo } from "@/assets";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Button from "./Button";

interface stateMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationHeader: React.FC<stateMenuProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${
        isVisible ? "top-0" : "-top-full"
      } fixed left-0 w-full max-w-[100vw] overflow-x-hidden 
         bg-transparent z-[10000000] transition-[top] duration-300 ${
           isMenuOpen ? "hidden" : ""
         }`}
    >
      <div className="flex flex-row-reverse md:flex-row justify-between items-center max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
        {/* Menu Button */}
        <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>Menu</Button>

        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
          priority
        />

        {/* Mint Button */}
        <Button
          onClick={() => window.open("https://mint.kryptokunts.com/", "_blank")}
          className="hidden md:block"
        >
          Mint
        </Button>
      </div>
    </div>
  );
};

export default NavigationHeader;
