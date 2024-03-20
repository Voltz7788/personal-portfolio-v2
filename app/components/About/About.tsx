import React from "react";
import { SectionHeading } from "../General/SectionHeading";
import Bio from "./Bio";

export default function About() {
  return (
    <section className="mt-28 mx-16 px-10" id="about">
      <SectionHeading.Root>
        <SectionHeading.Title title="About" />
        <SectionHeading.Divider />
      </SectionHeading.Root>
      <Bio />
    </section>
  );
}
