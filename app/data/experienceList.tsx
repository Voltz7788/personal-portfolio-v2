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
    company: "Build School",
    yearStart: "2024",
    yearEnd: "Present",
    role: "Web Developer",
    desc: "I'm responsible for building our frontend UI and serverless backend in Next. Out latest product release gained 12k page visits within the first week of launch.",
    location: "London",
    techStack: [
      { name: "Typescript", icon: TSIcon() },
      { name: "React", icon: ReactIcon() },
      { name: "Next", icon: NextIcon() },
      { name: "Postgres", icon: PostgresIcon() },
      { name: "Tailwind", icon: TailwindIcon() },
      { name: "Git", icon: GitIcon() },
    ],
  },
  {
    company: "Inclusive Jobs",
    yearStart: "2023",
    yearEnd: "2024",
    role: "Web Developer",
    desc: "I helped implement the company website. We primarily used Webflow initially but eventually migrated to Embedded Ruby (ERB), where we used Tailwind to continue styling our frontend.",
    location: "London",
    techStack: [
      { name: "HTML", icon: HTMLIcon() },
      { name: "CSS", icon: CSSIcon() },
      { name: "Tailwind", icon: TailwindIcon() },
      { name: "Git", icon: GitIcon() },
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
