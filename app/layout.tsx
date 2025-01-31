import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navigation/Navbar";
import TopLinks from "./components/Navigation/TopLinks";
import ScrollTracker from "./components/Animation/ScrollTracker";
import ThemeProvider from "./components/Providers/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yannis Madu | Web Developer",
  description: "Yannis Madu website developer portfolio",
  icons: {
    icon: ["/ico.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-28 overflow-x-hidden">
      <body
        className={`h-screen bg-stone-800 selection:bg-secondary selection:text-copy  ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
