import { ReactNode } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Image, { StaticImageData } from "next/image";
import monotaskrScreenshot from "../../../public/monotaskr-screenshot.png";
import ScaleRotate from "../Animation/ScaleRotate";
import { Url } from "next/dist/shared/lib/router/router";

export default function Card({
  children,
  image,
}: {
  children: ReactNode;
  image: StaticImageData;
}) {
  return (
    <div className="flex flex-col  w-full">
      <div className="bg-border w-full h-60 rounded-xl flex items-end overflow-hidden">
        <ScaleRotate>
          <Image
            src={image}
            alt="Monotaskr.com"
            className="w-4/5 mx-auto h-44 rounded-t-lg object-cover"
          />
        </ScaleRotate>
      </div>
      {children}
    </div>
  );
}

const Heading = ({
  title,
  repoURL,
  liveURL,
}: {
  title: string;
  repoURL: Url;
  liveURL: Url;
}) => (
  <div className="flex items-center gap-3 mt-4">
    <h4 className="text-2xl text-copy font-bold">{title}</h4>
    <div className="h-0.5 border-t border-copy-lighter grow" />

    {/* Repository Link */}
    <Link href={repoURL} target="_blank">
      <FaGithub className="text-[27px] text-copy-lighter hover:text-copy transition-colors duration-200" />
    </Link>

    {/* Live Link */}
    <Link href={liveURL} target="_blank">
      <BiLinkExternal className="text-[27px] text-copy-lighter hover:text-copy transition-colors duration-200" />
    </Link>
  </div>
);

const Highlights = ({ highlights }: { highlights: string[] }) => (
  <p className="text-secondary mt-1">
    {highlights.toString().replaceAll(",", " - ")}
  </p>
);

const Content = ({ desc }: { desc: string }) => (
  <p className="text-copy-light font-light mt-3">
    {desc}{" "}
    <button className="text-secondary font-normal inline hover:underline">
      <p className="flex items-center">
        Learn more
        <IoIosArrowForward className="inline" />
      </p>
    </button>
  </p>
);

export const Project = {
  Card,
  Heading,
  Highlights,
  Content,
};
