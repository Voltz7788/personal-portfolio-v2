import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navigation/Navbar";
import ScrollTracker from "../components/Animation/ScrollTracker";
import TopLinks from "../components/Navigation/TopLinks";
import ThemeProvider from "../components/Providers/ThemeProvider";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <ScrollTracker />
      <TopLinks />
      {children}
    </ThemeProvider>
  );
}
