"use client";
import React from "react";
import { motion } from "motion/react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <motion.button
      initial={{
        boxShadow: "0 0 8px 5px #69836255, inset 0 0 12px #000000aa",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: [
          "0 0 12px 3px #69836288, inset 0 0 15px #000000aa",
          "0 0 25px 8px #698362cc, inset 0 0 20px #000000cc",
          "0 0 12px 3px #69836288, inset 0 0 15px #000000aa",
        ],
        transition: { duration: 1.5, repeat: Infinity },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`text-black hover:text-[#b7c8a3] text-[32px] 
                  bg-[#DFEAFF] border-[3px] border-black px-4 rounded-md 
                  transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
