"use client";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

export default function TopLinks() {
  return (
    <div className="fixed flex items-center justify-between w-full mx-16 pl-10 pr-24 h-20 backdrop-blur-sm">
      <SocialLinks />
      <motion.a
        href="resume.pdf"
        target="_blank"
        whileHover={"hover"}
        initial={{ scale: 1 }}
        variants={buttonMotion}
        transition={{ ease: "easeInOut", duration: 0.08 }}
        className="relative border border-secondary px-4 py-2 rounded text-lg text-secondary 
        hover:text-foreground ml-auto transition-colors duration-150 cursor-pointer"
      >
        <motion.div
          initial={{ scaleY: 0, scaleX: 0 }}
          variants={colorMotion}
          transition={{ ease: "easeInOut", duration: 0.15 }}
          className="-z-10 absolute top-0 left-0 w-full h-full origin-top-left bg-secondary"
        />
        My resume
      </motion.a>
    </div>
  );
}

const colorMotion = {
  hover: { scaleY: 1, scaleX: 1 },
};

const buttonMotion = {
  hover: { scale: 1.1, rotate: "1deg" },
};
