import type { Exp } from "@/app/types/types";
import TechPill from "../About/TechPill";

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
    <div className="border-b border-border text-lg mt-8">
      <div className="flex justify-between ">
        <h4 className="text-copy font-bold text-xl ">{company}</h4>
        <p className="text-copy-light">{`${yearStart} - ${yearEnd}`}</p>
      </div>
      <div className="flex justify-between mt-4">
        <p className="text-secondary font-bold">{role}</p>
        <p className="text-copy-light">{location}</p>
      </div>
      <p className="mt-2 text-copy-lighter font-light">{desc}</p>
      <div className="flex gap-3 my-6">
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
