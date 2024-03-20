"use client";

import {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type ThemeContextType = [
  { dark: boolean; secondary: string },
  Dispatch<
    SetStateAction<{
      dark: boolean;
      secondary: string;
    }>
  > | null
];

export const ThemeContext = createContext<ThemeContextType>([
  { dark: false, secondary: "default" },
  null,
]);

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState({ dark: false, secondary: "default" });
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div
        className="theme-selector transition-all duration-1000"
        data-theme-primary={theme.dark ? "dark" : "light"}
        data-theme-secondary="joker"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
