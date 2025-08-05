"use client";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

export default function TopLinks() {
  return (
    <div className="fixed flex items-center justify-between w-full mx-14 md:mx-16 md:pl-10 pr-[4.5rem] md:pr-24 h-20 backdrop-blur-md z-30">
      <div className="md:-ml-10 max-w-44 w-full">
        <SocialLinks />
      </div>
      <motion.a
        href="yannis-madu-cv.pdf"
        target="_blank"
        whileHover={"hover"}
        initial={{ scale: 1 }}
        variants={buttonMotion}
        transition={{ ease: "easeInOut", duration: 0.08 }}
        className="relative border border-secondary px-3 py-2 md:min-w-[7.5rem] text-center rounded text-base md:text-lg text-secondary 
        hover:text-foreground ml-auto transition-colors duration-150 cursor-pointer"
      >
        <motion.div
          initial={{ scaleY: 0, scaleX: 0 }}
          variants={colorMotion}
          transition={{ ease: "easeInOut", duration: 0.15 }}
          className="-z-10 absolute top-0 left-0 w-full h-full origin-top-left bg-secondary"
        />
        My CV
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
