import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { ReactNode } from "react";

type FadeUpProps = {
  index: number;
  children: ReactNode;
};

export default function FadeUp({ index, children }: FadeUpProps) {
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
        transition={{ delay: 0.05 * index + 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const variants = {
  initial: { y: "100%", opacity: 0 },
  fadeUp: { y: "0%", opacity: 1 },
};
