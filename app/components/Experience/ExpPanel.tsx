"use client";
import type { Exp } from "@/app/types/types";
import TechPill from "../About/TechPill";
import Reveal from "../Animation/Reveal";

export default function ExpPanel({
  company,
  desc,
  location,
  role,
  techStack,
  yearEnd,
  yearStart,
  index,
}: Exp & { index: number }) {
  return (
    <div className="border-b border-border text-lg mt-8 transition-all duration-300">
      <div className="flex justify-between items-end">
        <Reveal>
          <h4 className="text-copy font-bold text-xl transition-all duration-300">
            {company}
          </h4>
        </Reveal>
        <Reveal>
          <p className="text-copy-light text-base transition-all duration-300">{`${yearStart} - ${yearEnd}`}</p>
        </Reveal>
      </div>
      <div className="flex justify-between items-end mt-4 ">
        <Reveal>
          <p className="text-secondary font-bold transition-all duration-300">
            {role}
          </p>
        </Reveal>
        <Reveal>
          <p className="text-copy-light text-base transition-all duration-300">
            {location}
          </p>
        </Reveal>
      </div>
      <Reveal>
        <p className="mt-2 text-copy-lighter font-light transition-all duration-300">
          {desc}
        </p>
      </Reveal>
      <div className="flex flex-wrap gap-3 my-6">
        {techStack.map((tech, index) => (
          <TechPill
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
