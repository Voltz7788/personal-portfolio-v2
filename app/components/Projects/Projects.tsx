"use client";
import { SectionHeading } from "../General/SectionHeading";
import { projectsList } from "@/app/data/projectsList";
import ProjectContainer from "./ProjectContainer";

export default function Projects() {
  return (
    <section className="mt-40" id="projects">
      <SectionHeading.Root>
        <SectionHeading.Divider />
        <SectionHeading.Title title="Projects" />
      </SectionHeading.Root>
      <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-16 mt-5">
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
