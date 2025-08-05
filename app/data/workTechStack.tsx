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
  StripeIcon,
  Firebase,
  DockerIcon,
  ExpoIcon,
  PrismaIcon,
} from "../components/About/DevIcons";

export const workTechStack: { name: string; icon: JSX.Element }[] = [
  // Core languages - absolute must-haves
  { name: "TypeScript", icon: TSIcon() },
  { name: "JavaScript", icon: JSIcon() },

  // Frontend frameworks - high demand
  { name: "React", icon: ReactIcon() },
  { name: "Next.js", icon: NextIcon() },

  // Backend & databases - full-stack credibility
  { name: "Node.js", icon: NodeIcon() },
  { name: "PostgreSQL", icon: PostgresIcon() },
  { name: "Express.js", icon: ExpressIcon() },

  // Cloud & DevOps - senior-level skills
  { name: "Amazon Web Services", icon: AWSIcon() },
  { name: "Docker", icon: DockerIcon() },

  // Essential tools
  { name: "Git", icon: GitIcon() },
  { name: "Prisma", icon: PrismaIcon() },

  // Business-critical integrations
  { name: "Stripe", icon: StripeIcon() },

  // Styling & mobile
  { name: "TailwindCSS", icon: TailwindIcon() },
  { name: "Expo", icon: ExpoIcon() },

  // Supporting technologies
  { name: "Firebase", icon: Firebase() },
  { name: "MongoDB", icon: MongoDBIcon() },
  { name: "GitHub", icon: GithubIcon() },
  { name: "Bash", icon: BashIcon() },
  { name: "HTML", icon: HTMLIcon() },
  { name: "CSS", icon: CSSIcon() },
];
