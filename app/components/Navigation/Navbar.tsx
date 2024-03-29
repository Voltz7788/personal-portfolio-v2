"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import useNavScrollCheck from "@/app/hooks/useNavScrollCheck";
import ToggleSwitch from "../Animation/ToggleSwitch";
import ThemeSelector from "./ThemeSelector";

const navLinks: { title: string; href: string }[] = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Exp.", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { selected } = useNavScrollCheck();

  return (
    <motion.nav
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen md:w-16 w-14 fixed top-0 bg-background transition-all duration-300"
    >
      <div className="flex flex-col justify-between items-center h-screen transition-all duration-300">
        <div className="w-full">
          <Link
            href={"#hero"}
            className="h-20 grid place-content-center border-r-2 border-background text-copy text-xl font-bold transition-all duration-300"
          >
            <div className="h-11 w-11 md:h-12 md:w-12 bg-foreground rounded grid place-content-center transition-all duration-300">
              <p>
                YM
                <span className="text-secondary transition-all duration-300">
                  .
                </span>
              </p>
            </div>
          </Link>
          {navLinks.map((link, index) => (
            <NavLink
              key={link.title}
              title={link.title}
              href={link.href}
              index={index}
              selected={selected === link.href ? true : false}
            />
          ))}
        </div>
        <div>
          <ThemeSelector />
          {/* <ToggleSwitch /> */}
        </div>
      </div>
    </motion.nav>
  );
}
