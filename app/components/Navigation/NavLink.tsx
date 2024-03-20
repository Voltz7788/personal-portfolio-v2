import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { motion } from "framer-motion";

export default function NavLink({
  href,
  title,
  index,
  selected,
}: {
  href: Url;
  title: string;
  index: number;
  selected: boolean;
}) {
  return (
    <Link href={href}>
      <div
        className={`grid place-content-center h-24  transition-all 
      duration-100 border-r-2 border-background  font-extralight 
       text-copy-light text-lg ${
         selected ? "text-copy border-primary bg-foreground" : ""
       }`}
      >
        <motion.p
          initial={{ x: "-150%", rotate: "90deg" }}
          animate={{ x: "0%" }}
          transition={{
            ease: "easeInOut",
            delay: 0.1 * index + 0.2,
            duration: 0.5,
          }}
          viewport={{ once: true }}
        >
          {title}
        </motion.p>
      </div>
    </Link>
  );
}
