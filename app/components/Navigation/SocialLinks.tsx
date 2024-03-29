import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Magnetic from "../Animation/Magnetic";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { socials } from "@/app/data/socials";

type SocialLinkProps = {
  url: Url;
  icon: ReactNode;
};

export default function SocialLinks() {
  return (
    <div className="flex justify-between max-w-36 w-full ml-7 md:max-w-0 md:pl-0 md:justify-evenly md:w-48 py-4">
      {socialLinks.map((link, index) => (
        <motion.div
          initial={{ y: "-300%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ delay: 0.1 * index }}
          key={index}
        >
          <Magnetic>
            <SingleLink url={link.url} icon={link.icon} />
          </Magnetic>
        </motion.div>
      ))}
    </div>
  );
}

const SingleLink = ({ url, icon }: SocialLinkProps) => {
  return (
    <Link href={url} target="_blank" className="transition-all duration-300">
      {icon}
    </Link>
  );
};

export const socialLinks = [
  {
    url: socials.linkedIn,
    icon: (
      <FaLinkedin className="text-2xl text-copy-light hover:text-primary transition-all duration-300" />
    ),
  },
  {
    url: socials.github,
    icon: (
      <FaGithub className="text-2xl text-copy-light hover:text-primary transition-all duration-300" />
    ),
  },
  {
    url: socials.youtube,
    icon: (
      <FaYoutube className="text-2xl text-copy-light hover:text-primary transition-all duration-300" />
    ),
  },
  {
    url: socials.tiktok,
    icon: (
      <FaTiktok className="text-2xl text-copy-light hover:text-primary transition-all duration-300" />
    ),
  },
];
