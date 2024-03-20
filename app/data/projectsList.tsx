import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import monotaskrScreenshot from "../../public/monotaskr-screenshot.png";
import onlyFansScreenshot from "../../public/onlyfans-screenshot.png";
import calculatorScreenshot from "../../public/calculator-screenshot.png";
import accountSiteScreenshot from "../../public/account-site-screenshot.png";

export const projectsList: {
  title: string;
  repoURL: Url;
  liveUrl: Url;
  highlights: string[];
  desc: string;
  image: StaticImageData;
}[] = [
  {
    title: "Monotaskr",
    repoURL: "https://github.com/Voltz7788/full-task-essa",
    liveUrl: "https://www.monotaskr.com/",
    desc: "Lorem ipsum",
    highlights: ["Next", "Tailwind", "Pusher", "PostgreSQL"],
    image: monotaskrScreenshot,
  },
  {
    title: "OnlyFans (Parody)",
    repoURL: "https://github.com/Voltz7788/onlyfans-with-actual-fans",
    liveUrl: "https://onlyfans-with-actual-fans.vercel.app/",
    desc: "Lorem ipsum",
    highlights: ["Next", "Tailwind", "Typescript", "AWS S3"],
    image: onlyFansScreenshot,
  },
  {
    title: "Accountant Site Remake",
    repoURL: "https://github.com/Voltz7788/accountant-site-demo",
    liveUrl: "https://accountant-site-demo.vercel.app/",
    desc: "Lorem ipsum",
    highlights: ["React", "Next", "Tailwind", "Typescript"],
    image: accountSiteScreenshot,
  },
  {
    title: "Calculator 2099",
    repoURL: "https://github.com/Voltz7788/calculator",
    liveUrl: "https://voltz7788.github.io/calculator/",
    desc: "Lorem ipsum",
    highlights: ["HTML", "CSS", "Javascript"],
    image: calculatorScreenshot,
  },
];
