import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export type Exp = {
  company: string;
  yearStart: string;
  yearEnd: string;
  role: string;
  location: string;
  desc: string;
  techStack: { name: string; icon: JSX.Element }[];
};

export type ProjectProps = {
  title: string;
  repoURL: Url;
  liveURL: Url;
  highlights: string[];
  descShort: string;
  descFull: string;
  image: StaticImageData;
};
