import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex justify-between w-36">
      <Link href={"https://www.linkedin.com/in/yannismadu/"} target="_blank">
        <FaLinkedin className="text-2xl text-primary-light hover:text-primary transition-colors" />
      </Link>
      <Link href={"https://github.com/Voltz7788"} target="_blank">
        <FaGithub className="text-2xl text-primary-light hover:text-primary transition-colors" />
      </Link>
      <Link
        href={"https://www.youtube.com/channel/UCgxPKeb3nrpenK3XGvzp2tA"}
        target="_blank"
      >
        <FaYoutube className="text-2xl text-primary-light hover:text-primary transition-colors" />
      </Link>
      <Link href={"https://www.tiktok.com/@yannismadu?lang=en"} target="_blank">
        <FaTiktok className="text-2xl text-primary-light hover:text-primary transition-colors" />
      </Link>
    </div>
  );
}
