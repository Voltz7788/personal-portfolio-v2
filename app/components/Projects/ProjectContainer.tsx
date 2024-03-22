import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectProps } from "@/app/types/types";
import SlowFadeUp from "../Animation/SlowFadeUp";
import Reveal from "../Animation/Reveal";
import { Project } from "./ProjectParts";
import DetailedProjectCard from "./DetailedProjectCard";

export default function ProjectContainer({
  title,
  image,
  repoURL,
  liveURL,
  highlights,
  desc,
  index,
}: ProjectProps & { index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div key={title} whileHover={"hover"}>
      <SlowFadeUp index={index}>
        <Project.Card image={image} setOpen={setOpen}>
          <Project.Heading title={title} repoURL={repoURL} liveURL={liveURL} />
          <Reveal>
            <Project.Highlights highlights={highlights} />
          </Reveal>
          <Reveal>
            <Project.Content desc={desc} setOpen={setOpen} />
          </Reveal>
        </Project.Card>
      </SlowFadeUp>
      <DetailedProjectCard
        open={open}
        setOpen={setOpen}
        image={image}
        desc={desc}
        title={title}
        repoURL={repoURL}
        liveURL={liveURL}
        highlights={highlights}
      />
    </motion.div>
  );
}
