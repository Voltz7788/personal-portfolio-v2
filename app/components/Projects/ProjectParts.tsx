import { Dispatch, ReactNode, SetStateAction } from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import Image, { StaticImageData } from "next/image";
import ScaleRotate from "../Animation/ScaleRotate";
import { Url } from "next/dist/shared/lib/router/router";
import { motion } from "framer-motion";

export default function Card({
  children,
  image,
  liveUrl,
  setOpen,
}: {
  children: ReactNode;
  image: StaticImageData;
  liveUrl?: Url;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex flex-col w-full transition-all duration-300 aspect-video">
      <motion.a
        initial={"initial"}
        whileHover={"hover"}
        href={liveUrl as string}
        target="_blank"
        className="bg-border w-full h-full max-h-60 rounded-xl flex items-end overflow-hidden transition-all duration-300"
      >
        <ScaleRotate>
          <Image
            src={image}
            alt="Project image"
            className="w-4/5 aspect-video mx-auto max-h-52 rounded-t-lg object-cover"
          />
        </ScaleRotate>
      </motion.a>
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
  repoURL?: Url;
  liveURL?: Url;
}) => (
  <div className="flex items-center gap-3 mt-4 transition-all duration-300">
    <h4 className="text-2xl text-copy font-bold transition-all duration-300">
      {title}
    </h4>
    <div className="h-0.5 border-t border-copy-lighter grow transition-all duration-300" />

    {/* Repository Link */}
    {!!repoURL && (
      <Link href={repoURL} target="_blank">
        <FaGithub className="text-[27px] text-copy-lighter hover:text-copy transition-all duration-300" />
      </Link>
    )}

    {/* Live Link */}
    {!!liveURL && (
      <Link href={liveURL} target="_blank">
        <BiLinkExternal className="text-[27px] text-copy-lighter hover:text-copy transition-all duration-300" />
      </Link>
    )}
  </div>
);

const Highlights = ({ highlights }: { highlights: string[] }) => (
  <p className="text-secondary mt-1 transition-all duration-300">
    {highlights.toString().replaceAll(",", " - ")}
  </p>
);

const Content = ({
  descShort,
  setOpen,
}: {
  descShort: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => (
  <p className="text-copy-light font-light mt-3 transition-all duration-300">
    {descShort}{" "}
    {/* <button
      onClick={() => setOpen(true)}
      className="text-secondary font-normal inline hover:underline transition-all duration-300"
    >
      <p className="flex items-center">
        Learn more
        <IoIosArrowForward className="inline" />
      </p>
    </button> */}
  </p>
);

export const Project = {
  Card,
  Heading,
  Highlights,
  Content,
};
