import React, { ReactNode, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const glowControls = useAnimation();

  const mouseMove = (e: { clientX: number; clientY: number }) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = (e: { clientX: number; clientY: number }) => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      animate={{ x, y }}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      transition={{ type: "spring", stiffness: 100, damping: 7, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}

// const variants = {
//   glow: {
//     box,
//   },
// };
