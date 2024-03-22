import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Dispatch, SetStateAction, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { ProjectProps } from "@/app/types/types";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function DetailedProjectCard({
  open,
  setOpen,
  title,
  highlights,
  desc,
  image,
  liveURL,
  repoURL,
}: ProjectProps & {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const overlayControls = useAnimation();

  useEffect(() => {
    if (open) {
      overlayControls.start("opened");
    }
  }, [overlayControls, open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={overlayVariants}
          initial={"closed"}
          animate={overlayControls}
          exit={"closed"}
          transition={{ duration: 0.15 }}
          onClick={() => setOpen(false)}
          className={` ${
            open ? "block" : "hidden"
          } fixed top-0 left-0 bottom-0 right-0 w-full h-full backdrop-blur-xl z-40`}
        >
          {/* Overlay */}
          <div className="bg-black opacity-5 w-full h-full" />
          <button
            className="fixed top-4 right-6"
            onClick={() => setOpen(false)}
          >
            <IoClose className="text-3xl text-white" />
          </button>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    h-5/6 max-w-[750px] rounded-2xl w-full z-50 grid grid-rows-2 grid-cols-1"
          >
            {/* Image */}
            <Image
              src={image}
              alt={title}
              className="rounded-t-2xl h-full object-cover"
            />

            {/* Content */}
            <div className="h-full bg-border rounded-b-2xl px-8 py-10 grid grid-rows-5">
              <div className="row-span-4">
                <h5 className="text-copy text-4xl font-bold transition-all duration-300">
                  {title}
                </h5>
                <p className="text-secondary mt-2 transition-all duration-300">
                  {highlights.toString().replaceAll(",", " - ")}
                </p>
                <p className="text-copy-light font-light mt-5 transition-all duration-300">
                  {desc}
                </p>
              </div>
              <div className="row-span-1">
                <h6 className="mt-4 text-xl font-bold text-copy transition-all duration-300">
                  Project Links
                  <span className="text-secondary transition-all duration-300">
                    .
                  </span>
                </h6>
                <div className="flex gap-5 mt-2">
                  <Link
                    href={repoURL}
                    target="_blank"
                    className="text-secondary transition-all duration-300 flex items-center gap-1"
                  >
                    <FaGithub className="text-xl text-secondary transition-all duration-300" />
                    <p className="hover:underline">source code</p>
                  </Link>
                  <Link
                    href={liveURL}
                    target="_blank"
                    className="text-secondary transition-all duration-300 flex items-center gap-1"
                  >
                    <BiLinkExternal className="text-xl text-secondary transition-all duration-300" />
                    <p className="hover:underline">live project</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const overlayVariants = {
  closed: { opacity: 0 },
  opened: { opacity: 1 },
};
