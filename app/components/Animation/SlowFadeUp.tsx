import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode } from "react";
import { FadeUpProps } from "./FadeUp";

export default function SlowFadeUp({ index = 1, children }: FadeUpProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeUpControls = useAnimation();

  useEffect(() => {
    if (inView) {
      fadeUpControls.start("fadeUp");
    }
  }, [inView, fadeUpControls]);

  return (
    <div ref={ref}>
      <motion.div
        initial={"initial"}
        animate={fadeUpControls}
        variants={variants}
        transition={{ duration: 0.8, delay: 0.12 * index }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const variants = {
  initial: { y: "25%", opacity: 0 },
  fadeUp: { y: "0%", opacity: 1 },
};
