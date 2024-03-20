import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";

export default function ToggleSwitch() {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <input
      type="checkbox"
      onClick={() => {
        if (setTheme) {
          setTheme({ dark: !theme.dark, secondary: "default" });
        }
      }}
    />
  );
}
