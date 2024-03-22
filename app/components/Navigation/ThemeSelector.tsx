import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { themesList } from "@/app/data/themesList";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import FadeUpOnPress from "../Animation/FadeUpOnPress";

export default function ThemeSelector() {
  const [mainTheme, setMainTheme] = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleThemeChange = (newTheme: string) => {
    if (setMainTheme) {
      setMainTheme({ ...mainTheme, secondary: newTheme });
      localStorage.setItem("theme", newTheme);
    }
  };

  const containerControls = useAnimation();
  const previewControls = useAnimation();

  useEffect(() => {
    if (open) {
      containerControls.start("animate");
      previewControls.start("animate");
    } else {
      containerControls.start("initial");
      previewControls.start("initial");
    }
  }, [open, containerControls, previewControls]);

  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial={"initial"}
        animate={containerControls}
        className={`mx-auto relative mb-10 flex justify-between
       flex-col items-center border border-border gap-2  transition-colors duration-300 
        rounded-full overflow-hidden cursor-pointer ${
          open ? "bg-foreground py-3" : "bg-foreground py-0"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="grid place-content-center absolute bg-transparent h-full w-full rounded-full">
          <motion.div
            variants={previewVariants}
            initial={"initial"}
            animate={previewControls}
            className="top-1 bg-secondary h-7 w-7 rounded-full hover:bg-primary transition-colors duration-300"
          />
        </div>

        {themesList.map((theme, index) => (
          <motion.div key={theme.name} className={` h-7 w-7 rounded-full`}>
            {open && (
              <FadeUpOnPress
                open={open}
                index={themesList.length - index}
                name={theme.name}
              >
                <motion.button
                  className={`h-7 w-7 rounded-full ${theme.color.secondary} hover:scale-110 transition-transform`}
                  onClick={() => handleThemeChange(theme.name)}
                />
              </FadeUpOnPress>
            )}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

const containerVariants = {
  initial: {
    height: 40,
    width: 40,
    transition: {
      duration: 0.13,
    },
  },
  animate: {
    height: 40 * 6,
    width: 40,
    transition: { type: "spring", duration: 0.3, delay: 0.1 },
  },
};

const previewVariants = {
  initial: {
    scale: 1,
    transition: { type: "spring", duration: 0.7, delay: 0.1 },
  },
  animate: { scale: 0, transition: { duration: 0.1 } },
};
