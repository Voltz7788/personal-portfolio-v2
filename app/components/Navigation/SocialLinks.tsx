import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Magnetic from "../Animation/Magnetic";
import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type SocialLinkProps = {
  url: Url;
  icon: ReactNode;
};

export default function SocialLinks() {
  return (
    <div className="flex justify-between w-44">
      {socialLinks.map((link, index) => (
        <motion.div
          initial={{ y: "-500%" }}
          animate={{ y: "0%" }}
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
    <Link href={url} target="_blank">
      {icon}
    </Link>
  );
};

const socialLinks = [
  {
    url: "https://www.linkedin.com/in/yannismadu/",
    icon: (
      <FaLinkedin className="text-2xl text-copy-light hover:text-primary transition-colors" />
    ),
  },
  {
    url: "https://github.com/Voltz7788",
    icon: (
      <FaGithub className="text-2xl text-copy-light hover:text-primary transition-colors" />
    ),
  },
  {
    url: "https://www.youtube.com/channel/UCgxPKeb3nrpenK3XGvzp2tA",
    icon: (
      <FaYoutube className="text-2xl text-copy-light hover:text-primary transition-colors" />
    ),
  },
  {
    url: "https://www.tiktok.com/@yannismadu?lang=en",
    icon: (
      <FaTiktok className="text-2xl text-copy-light hover:text-primary transition-colors" />
    ),
  },
];
