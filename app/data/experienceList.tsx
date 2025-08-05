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
    company: "Omanos Analytics",
    yearStart: "Oct 2024",
    yearEnd: "Feb 2025",
    role: "Frontend Engineer (Contract)",
    desc: "Delivered a React Native geospatial data collection app with offline functionality, interactive mapping, and real-time coordinate conversion. Built a high-performance freehand drawing system using React Native Skia and completed the project 1 month ahead of schedule.",
    location: "Remote, UK",
    techStack: [
      { name: "React Native", icon: ReactIcon() },
      { name: "Typescript", icon: TSIcon() },
      { name: "SQLite", icon: PostgresIcon() },
      { name: "Expo", icon: ExpressIcon() },
    ],
  },
  {
    company: "Build Board",
    yearStart: "Feb 2024",
    yearEnd: "Present",
    role: "Founding Full-Stack Engineer",
    desc: "Spearheaded Build Board from concept to launch as the solo engineer. Built a kanban-based project management tool for 3D printing hobbyists, handling frontend, backend, DevOps, and database systems. Cut image storage costs by 50% and developed a queue-based asynchronous web scraping system.",
    location: "Remote, UK",
    techStack: [
      { name: "Typescript", icon: TSIcon() },
      { name: "React", icon: ReactIcon() },
      { name: "Next", icon: NextIcon() },
      { name: "Node.js", icon: NodeIcon() },
      { name: "Postgres", icon: PostgresIcon() },
      { name: "AWS", icon: AWSIcon() },
    ],
  },
  // {
  //   company: "Vortex Labs",
  //   yearStart: "2023",
  //   yearEnd: "2023",
  //   role: "Web Developer",
  //   desc: "I worked alongside Vortex labs as elastic dev capacity on their main website. I primarily worked on the frontend with React and Tailwind and contributed to the remote repository with Git.",
  //   location: "London",
  //   techStack: [
  //     { name: "Javascript", icon: JSIcon() },
  //     { name: "React", icon: ReactIcon() },
  //     { name: "Next", icon: NextIcon() },
  //     { name: "Tailwind", icon: TailwindIcon() },

  //     { name: "Git", icon: GitIcon() },
  //   ],
  // },
];
