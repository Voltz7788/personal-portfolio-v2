import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "hsla(var(--primary))",
        "primary-content": "hsla(var(--primary-content))",
        "primary-dark": "hsla(var(--primary-dark))",
        "primary-light": "hsla(var(--primary-light))",

        secondary: "hsla(var(--secondary))",
        "secondary-content": "hsla(var(--secondary-content))",
        "secondary-dark": "hsla(var(--secondary-dark))",
        "secondary-light": "hsla(var(--secondary-light))",

        background: "hsla(var(--background))",
        foreground: "hsla(var(--foreground))",
        border: "hsla(var(--border))",

        copy: "hsla(var(--copy))",
        "copy-light": "hsla(var(--copy-light))",
        "copy-lighter": "hsla(var(--copy-lighter))",

        success: "hsla(var(--success))",
        warning: "hsla(var(--warning))",
        error: "hsla(var(--error))",

        "success-content": "hsla(var(--success-content))",
        "warning-content": "hsla(var(--warning-content))",
        "error-content": "hsla(var(--error-content))",
      },
    },
  },
  plugins: [],
};
export default config;
