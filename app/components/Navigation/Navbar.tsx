"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="h-screen w-16 fixed top-0 bg-background ">
      <div className="flex flex-col">
        <Link
          href={"#hero"}
          className="h-20 grid place-content-center border-r-2 border-background text-white"
        >
          L
        </Link>
        <NavLink href={"#about"} title="About" />
        <NavLink href={"#projects"} title="Projects" />
        <NavLink href={"#experience"} title="Exp." />
        <NavLink href={"#contact"} title="Contact" />
        <div className="h-screen border-r-2 border-background" />
      </div>
    </nav>
  );
}
