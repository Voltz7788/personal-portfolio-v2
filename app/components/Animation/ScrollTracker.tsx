"use client";
import { useScroll, motion, useSpring, useTransform } from "framer-motion";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className={`bg-secondary fixed top-0 w-full origin-left h-0.5 mx-14 md:mx-16 z-40`}
    />
  );
}
