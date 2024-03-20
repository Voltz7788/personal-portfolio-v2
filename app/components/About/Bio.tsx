"use client";
import Reveal from "../Animation/Reveal";
import SocialLinks from "../Navigation/SocialLinks";
import { FaArrowRight } from "react-icons/fa";
import { IoTerminal } from "react-icons/io5";
import TechPill from "./TechPill";
import { workTechStack } from "@/app/data/workTechStack";

export default function Bio() {
  return (
    <div className="grid grid-cols-5 gap-7 w-full mt-10">
      <div className="text-copy-light col-span-3 flex flex-col gap-5 font-light text-lg">
        <Reveal>
          <p>
            Hey! I&apos;m Bob, if you haven&apos;t already gathered that by now.
            I&apos;m a painter turned software engineer from Daytona, Florida. I
            specialize in the backend, primarily Node and Rust, but love
            building with whatever tools are right for the job.
          </p>
        </Reveal>
        <Reveal>
          <p>
            I currently work for Google on Google Photos. I also toss in my ¢2
            with the design systems teams from time to time (once an artist,
            always an artist, amirite?).
          </p>
        </Reveal>
        <Reveal>
          <p>
            Outside of work, I still love to paint. Any given Sunday you&apos;ll
            find me scribbling some happy clouds with my son ☁️ I even teach
            courses online if you&apos;re looking to learn!
          </p>
        </Reveal>
        <Reveal>
          <p>
            I&apos;m passively looking for new positions where I can merge my
            love for code with my love for the canvas. If you think you&apos;ve
            got an opening that I might like, let&apos;s connect 🔗
          </p>
        </Reveal>
        <Reveal>
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center text-secondary font-normal">
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
            <div className="flex items-center gap-2 text-xl font-bold">
              <IoTerminal className="text-secondary" />
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
