"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { motion, useScroll, useTransform } from "framer-motion";
import useNavScrollCheck from "@/app/hooks/useNavScrollCheck";

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
      className="h-screen w-16 fixed top-0 bg-background"
    >
      <div className="flex flex-col">
        <Link
          href={"#hero"}
          className="h-20 grid place-content-center border-r-2 border-background text-white"
        >
          L
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
        <div className="h-screen border-r-2 border-background" />
      </div>
    </motion.nav>
  );
}
