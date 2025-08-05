import {
  JSIcon,
  TSIcon,
  HTMLIcon,
  CSSIcon,
  ReactIcon,
  NextIcon,
  GitIcon,
  TailwindIcon,
  BashIcon,
  AWSIcon,
  ReduxIcon,
  NodeIcon,
  ExpressIcon,
  GithubIcon,
  PostgresIcon,
  MongoDBIcon,
} from "../components/About/DevIcons";

export const experienceList: {
  company: string;
  yearStart: string;
  yearEnd: string;
  role: string;
  location: string;
  desc: string;
  techStack: { name: string; icon: JSX.Element }[];
}[] = [
  {
    company: "Build Board",
    yearStart: "Feb 2024",
    yearEnd: "Aug 2025",
    role: "Founding Full-Stack Engineer",
    desc: "Spearheaded Build Board from concept to launch as the solo engineer. Built a kanban-based project management tool for 3D printing hobbyists, handling frontend, backend, DevOps, and database systems. Cut image storage costs by 50% and developed a queue-based asynchronous project import system.",
    location: "London, UK",
    techStack: [
      { name: "TypeScript", icon: TSIcon() },
      { name: "React", icon: ReactIcon() },
      { name: "Next.js", icon: NextIcon() },
      { name: "Node.js", icon: NodeIcon() },
      { name: "PostgreSQL", icon: PostgresIcon() },
      { name: "Amazon Web Services", icon: AWSIcon() },
    ],
  },
  {
    company: "Omanos Analytics",
    yearStart: "Oct 2024",
    yearEnd: "Feb 2025",
    role: "Frontend Engineer (Contract)",
    desc: "Delivered a React Native geospatial data collection app with offline-first functionality, interactive mapping, and data visualization. Built a high-performance freehand drawing system using React Native Skia and completed the project 1 month ahead of schedule.",
    location: "Remote, UK",
    techStack: [
      { name: "React Native", icon: ReactIcon() },
      { name: "TypeScript", icon: TSIcon() },
    ],
  },
];
