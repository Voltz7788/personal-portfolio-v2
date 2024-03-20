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
    company: "Google",
    yearStart: "2022",
    yearEnd: "Present",
    role: "Software Engineer",
    desc: "I help build and scale Google Photos. Increased throughput of our primary services by 70%. Migrated backend service from Java to Go. Also helped make it look prettier.",
    location: "Atlanta",
    techStack: [
      { name: "React", icon: ReactIcon() },
      { name: "AWS", icon: AWSIcon() },
      { name: "Git", icon: GitIcon() },
    ],
  },
  {
    company: "Facebook",
    yearStart: "2020",
    yearEnd: "2022",
    role: "Software Engineer",
    desc: "Senior Full Stack Engineer for Facebook Marketplace. Created a service from scratch to handle new listings. Also played some ping pong. It was fun.",
    location: "San Francisco",
    techStack: [
      { name: "React", icon: ReactIcon() },
      { name: "AWS", icon: AWSIcon() },
      { name: "Git", icon: GitIcon() },
    ],
  },
  {
    company: "Amazon",
    yearStart: "2016",
    yearEnd: "2020",
    role: "Software Engineer",
    desc: "Data Engineer for store front. Built data pipelines with Spark and Airflow. Saw Bezos one time. He said he liked my paintings. I said I liked his hair.",
    location: "Seattle",
    techStack: [
      { name: "React", icon: ReactIcon() },
      { name: "AWS", icon: AWSIcon() },
      { name: "Git", icon: GitIcon() },
    ],
  },
];
