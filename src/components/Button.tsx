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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`text-black text-[32px] bg-[#DFEAFF]  border-[3px] border-black px-4 rounded-md ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
