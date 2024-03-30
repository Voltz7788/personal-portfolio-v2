"use client";
import Reveal from "../Animation/Reveal";
import SocialLinks from "../Navigation/SocialLinks";
import { FaArrowRight } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import TechPill from "./TechPill";
import { workTechStack } from "@/app/data/workTechStack";
import Link from "next/link";

export default function Bio() {
  return (
    <div className="flex flex-col lg:grid lg:grid-cols-5 gap-7 w-full mt-7 md:mt-10">
      <div className="text-copy-light col-span-3 flex flex-col gap-8 md:gap-5 font-light text-lg">
        <Reveal>
          <p className="transition-all duration-300">
            Hello there! I&apos;m Yannis - in case you missed the really small
            text in the header. I&apos;m a musician turned web developer from
            London, UK. I primarily write React apps in Next.js, but love
            learning about new tools to use for my questionable side projects
            👀.
          </p>
        </Reveal>
        <Reveal>
          <p className="transition-all duration-300">
            Currently, I work at Build School, where I lead the technical
            development of our software products. Although since we&apos;re a
            start up, I tend to wear many hats.
          </p>
        </Reveal>
        <Reveal>
          <p className="transition-all duration-300">
            Outside of work, I love to make videos. My greatest creation has to
            be either the video where I likened my ADHD to having a{" "}
            <Link
              href={
                "https://www.tiktok.com/@yannismadu/video/7210397634941488389?lang=en"
              }
              target="_blank"
              className="text-secondary hover:underline"
            >
              monkey in my brain
            </Link>
            , or where I successfully asked a girl out on Hinge by making a{" "}
            <Link
              href={"https://youtu.be/7xoF5MGU738?si=oKa5FEpH2gU1q8TN"}
              target="_blank"
              className="text-secondary hover:underline"
            >
              spreadsheet tutorial
            </Link>{" "}
            (her irrational fear was spreadsheets apparently).
          </p>
        </Reveal>
        <Reveal>
          <p className="transition-all duration-300">
            If you&apos;d like to connect, you can find me on LinkedIn or catch
            my antics on Youtube and Tiktok!
          </p>
        </Reveal>
        <Reveal width="w-full">
          <div className="flex items-center">
            <div className="flex gap-2 items-center text-secondary font-normal transition-all duration-300">
              <p>My links</p>
              <FaArrowRight />
            </div>
            <SocialLinks />
          </div>
        </Reveal>
      </div>
      <div className="col-span-2 w-full text-copy">
        <div>
          <Reveal width="w-full">
            <div className="flex items-center gap-2 text-xl font-bold transition-all duration-300">
              <IoTerminal className="text-secondary transition-all duration-300" />
              <h4>Tech stack</h4>
            </div>
          </Reveal>

          <div className="mt-5 flex flex-wrap gap-5">
            {workTechStack.map((tech, index) => (
              <TechPill
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
