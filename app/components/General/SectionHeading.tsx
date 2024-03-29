import React, { ReactNode } from "react";
import Reveal from "../Animation/Reveal";

export default function Root({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-6 lg:gap-10">{children}</div>;
}

const Title = ({ title }: { title: string }) => {
  return (
    <Reveal width="w-fit">
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-copy w-fit py-2 transition-all duration-300">
        {title}
        <span className="text-primary transition-all duration-300">.</span>
      </h3>
    </Reveal>
  );
};

const Divider = () => {
  return <div className="h-0.5 border-t border-copy-lighter grow" />;
};

export const SectionHeading = {
  Title,
  Divider,
  Root,
};
