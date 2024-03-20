import React, { ReactNode } from "react";
import Reveal from "../Animation/Reveal";

export default function Root({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-10">{children}</div>;
}

const Title = ({ title }: { title: string }) => {
  return (
    <Reveal width="w-fit">
      <h2 className="text-6xl font-black text-copy w-fit">
        {title}
        <span className="text-secondary">.</span>
      </h2>
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
