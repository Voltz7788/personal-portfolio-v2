import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";
import { motion, useAnimation } from "framer-motion";

export default function ToggleSwitch() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [checked, setChecked] = useState(true);

  const toggleControls = useAnimation();
  const backgroundControls = useAnimation();

  useEffect(() => {
    if (setTheme) {
      if (checked) {
        setTheme({ ...theme, dark: true });
        toggleControls.start("active");
        backgroundControls.start("active");
      } else {
        setTheme({ ...theme, dark: false });
        toggleControls.start("inactive");
        backgroundControls.start("inactive");
      }
    }
  }, [checked]);

  return (
    <div className="mb-10">
      <input
        type="checkbox"
        className="hidden"
        id="toggle"
        onChange={() => setChecked(!checked)}
        checked={checked}
      />
      <label htmlFor="toggle" className="cursor-pointer select-none">
        <motion.div
          variants={backgroundVariants}
          // initial={"initial"}
          // animate={backgroundControls}
          className="flex items-center border border-primary rounded-full h-5 w-10  "
        >
          <motion.div
            variants={switchVariants}
            initial={"initial"}
            animate={toggleControls}
            className="rounded-full h-3.5 w-3.5"
          />
        </motion.div>
      </label>
    </div>
  );
}

const switchVariants = {
  inactive: { x: "20%", backgroundColor: "#5c5c5c" },
  active: { x: "150%", backgroundColor: "#5c5c5c" },
};

const backgroundVariants = {
  inactive: { backgroundColor: "bg-background" },
  active: { backgroundColor: "" },
};
