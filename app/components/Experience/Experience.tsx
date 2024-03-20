import { SectionHeading } from "../General/SectionHeading";
import ExpPanel from "./ExpPanel";
import { experienceList } from "@/app/data/experienceList";

export default function Experience() {
  return (
    <section className="mt-64" id="experience">
      <SectionHeading.Root>
        <SectionHeading.Title title="Experience" />
        <SectionHeading.Divider />
      </SectionHeading.Root>
      <div>
        {experienceList.map((exp, index) => (
          <ExpPanel
            key={index}
            company={exp.company}
            desc={exp.desc}
            location={exp.location}
            role={exp.role}
            techStack={exp.techStack}
            yearEnd={exp.yearEnd}
            yearStart={exp.yearStart}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
