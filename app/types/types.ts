export type Exp = {
  company: string;
  yearStart: string;
  yearEnd: string;
  role: string;
  location: string;
  desc: string;
  techStack: { name: string; icon: JSX.Element }[];
};
