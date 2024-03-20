"use client";
import SlowFadeUp from "../Animation/SlowFadeUp";
import Reveal from "../Animation/Reveal";
import { SectionHeading } from "../General/SectionHeading";
import { Project } from "./ProjectParts";
import { projectsList } from "@/app/data/projectsList";

export default function Projects() {
  return (
    <section className="mt-40" id="projects">
      <SectionHeading.Root>
        <SectionHeading.Divider />
        <SectionHeading.Title title="Projects" />
      </SectionHeading.Root>
      <div className="grid grid-cols-2 gap-x-10 gap-y-16 mt-5">
        {projectsList.map((project, index) => (
          <SlowFadeUp key={project.title} index={index}>
            <Project.Card image={project.image}>
              <Project.Heading
                title={project.title}
                repoURL={project.repoURL}
                liveURL={project.liveUrl}
              />
              <Reveal>
                <Project.Highlights highlights={project.highlights} />
              </Reveal>
              <Reveal>
                <Project.Content desc={project.desc} />
              </Reveal>
            </Project.Card>
          </SlowFadeUp>
        ))}
      </div>
    </section>
  );
}
