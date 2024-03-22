import { useEffect, useContext, ReactNode } from "react";
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from "../Providers/ThemeProvider";

export default function FadeUpOnPress({
  open,
  children,
  index,
  name,
}: {
  open: boolean;
  children: ReactNode;
  index: number;
  name: string;
}) {
  const [theme] = useContext(ThemeContext);
  const fadeUpControls = useAnimation();

  useEffect(() => {
    if (!open) {
      fadeUpControls.start("fadeUp");
    } else {
    }
  }, [name, open, theme.secondary, fadeUpControls]);

  return (
    <motion.div
      variants={{
        initial: {
          y: "100%",
          opacity: 0,
          scale: 0,
          display: "none",
          transition: { delay: 0.1 },
        },
        fadeUp: {
          y: "0%",
          opacity: 1,
          display: "block",
          scale: 1,
          transition: { delay: 0.04 * index },
        },
      }}
      initial={"initial"}
      animate={"fadeUp"}
      exit={"initial"}
    >
      {children}
    </motion.div>
  );
}
