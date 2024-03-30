import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import monotaskrScreenshot from "../../public/monotaskr-screenshot.png";
import onlyFansScreenshot from "../../public/onlyfans-screenshot.png";
import calculatorScreenshot from "../../public/calculator-screenshot.png";
import accountSiteScreenshot from "../../public/account-site-screenshot.png";

export const projectsList: {
  title: string;
  repoURL: Url;
  liveURL: Url;
  highlights: string[];
  descShort: string;
  descFull: string;
  image: StaticImageData;
}[] = [
  {
    title: "Monotaskr",
    repoURL: "https://github.com/Voltz7788/full-task-essa",
    liveURL: "https://www.monotaskr.com/",
    descShort:
      "A real-time to-do app that encourages you to only focus on one task at a time.",
    descFull: "Lorem ipsum",
    highlights: ["Next", "Tailwind", "Pusher", "PostgreSQL"],
    image: monotaskrScreenshot,
  },
  {
    title: "OnlyFans (Parody)",
    repoURL: "https://github.com/Voltz7788/onlyfans-with-actual-fans",
    liveURL: "https://onlyfans-with-actual-fans.vercel.app/",
    descShort:
      "Welcome to my OnlyFans! This is where I post pictures of my favorite fans. I probably should have made a Facebook clone instead",
    descFull: "Lorem ipsum",
    highlights: ["Next", "Tailwind", "Typescript", "AWS S3"],
    image: onlyFansScreenshot,
  },
  {
    title: "Accountant Site Remake",
    repoURL: "https://github.com/Voltz7788/accountant-site-demo",
    liveURL: "https://accountant-site-demo.vercel.app/",
    descShort: "A recreation of a UK accountancy firm's landing page.",
    descFull: "Lorem ipsum",
    highlights: ["React", "Next", "Tailwind", "Typescript"],
    image: accountSiteScreenshot,
  },
  {
    title: "Calculator 2099",
    repoURL: "https://github.com/Voltz7788/calculator",
    liveURL: "https://voltz7788.github.io/calculator/",
    descShort:
      "A simple calculator app…or is it? Put in “2099” and see what happens 🕷️",
    descFull: "Lorem ipsum",
    highlights: ["HTML", "CSS", "Javascript"],
    image: calculatorScreenshot,
  },
];
