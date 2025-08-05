import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";
import monotaskrScreenshot from "@/public/monotaskr-screenshot.png";
import onlyFansScreenshot from "@/public/onlyfans-screenshot.png";
import calculatorScreenshot from "@/public/calculator-screenshot.png";
import accountSiteScreenshot from "@/public/account-site-screenshot.png";
import buildBoardScreenshot from "@/public/build-board-screenshot.webp";
import quickbeamScreenshot from "@/public/quickbeam-screenshot.webp";
import measureScreenshot from "@/public/measure-screenshot.webp";
import adhdStashScreenshot from "@/public/adhd-stash-screenshot.webp";

export const projectsList: {
  title: string;
  repoURL?: Url;
  liveURL?: Url;
  highlights: string[];
  descShort: string;
  descFull: string;
  image: StaticImageData;
}[] = [
  {
    title: "Build Board",
    liveURL: "https://www.build-board.io",
    descShort:
      "SaaS 3D printing project management tool I built from zero to paying customers, featuring authentication, Stripe payments, and cost-optimized cloud infrastructure.",
    descFull: "Lorem ipsum",
    highlights: ["React", "Next.js", "Node.js", "Stripe", "AWS", "Firebase"],
    image: buildBoardScreenshot,
  },
  {
    title: "QuickBeam",
    descShort:
      "A geospatial data collection app, with offline-first architecture, automatic data synchronization, and custom drawing system using React Native Skia.",
    descFull: "Lorem ipsum",
    highlights: ["React Native", "Maplibre", "GeoJSON", "Skia"],
    image: quickbeamScreenshot,
  },
  {
    title: "Measure App",
    descShort:
      "A mobile app that lets you annotate measurements on photos, to keep track of dimensions for 3D printing.",
    descFull: "",
    highlights: ["React Native", "Expo", "TypeScript"],
    image: measureScreenshot,
  },
  {
    title: "Monotaskr",
    repoURL: "https://github.com/Voltz7788/full-task-essa",
    liveURL: "https://www.monotaskr.com/",
    descShort:
      "A real-time to-do app that encourages you to only focus on one task at a time.",
    descFull: "Lorem ipsum",
    highlights: ["Next.js", "TailwindCSS", "Pusher", "PostgreSQL"],
    image: monotaskrScreenshot,
  },
  {
    title: "Calculator 2099",
    repoURL: "https://github.com/Voltz7788/calculator",
    liveURL: "https://voltz7788.github.io/calculator/",
    descShort:
      "A simple calculator app…or is it? Put in “2099” and see what happens 🕷️",
    descFull: "Lorem ipsum",
    highlights: ["HTML", "CSS", "JavaScript"],
    image: calculatorScreenshot,
  },
  {
    title: "ADHD Stash",
    liveURL: "https://www.adhdstash.com/",
    descShort:
      "A commissioned platform showcasing curated ADHD-friendly tools and tech for neurodivergent minds.",
    descFull: "Lorem ipsum",
    highlights: ["Webflow"],
    image: adhdStashScreenshot,
  },
];
