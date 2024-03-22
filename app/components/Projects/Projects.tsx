"use client";
import SlowFadeUp from "../Animation/SlowFadeUp";
import Reveal from "../Animation/Reveal";
import { SectionHeading } from "../General/SectionHeading";
import { Project } from "./ProjectParts";
import { projectsList } from "@/app/data/projectsList";
import { motion } from "framer-motion";
import DetailedProjectCard from "./DetailedProjectCard";
import ProjectContainer from "./ProjectContainer";

const variants = { hover: { scale: 1.12, rotate: "1deg" } };

export default function Projects() {
  return (
    <section className="mt-40" id="projects">
      <SectionHeading.Root>
        <SectionHeading.Divider />
        <SectionHeading.Title title="Projects" />
      </SectionHeading.Root>
      <div className="grid grid-cols-2 gap-x-10 gap-y-16 mt-5">
        {projectsList.map((project, index) => (
          <ProjectContainer
            key={project.title}
            title={project.title}
            descShort={project.descShort}
            descFull={project.descFull}
            index={index}
            liveURL={project.liveURL}
            repoURL={project.repoURL}
            image={project.image}
            highlights={project.highlights}
          />
        ))}
      </div>
    </section>
  );
}
