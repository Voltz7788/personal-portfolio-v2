"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScaleRotate({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ scale: 1, rotate: "0deg" }}
      variants={variants}
      transition={{ ease: "easeInOut", duration: 0.16 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

const variants = { hover: { scale: 1.12, rotate: "1deg" } };
