import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { motion } from "framer-motion";

export default function NavLink({
  href,
  title,
  index,
}: {
  href: Url;
  title: string;
  index: number;
}) {
  return (
    <Link href={href}>
      <div
        className="grid place-content-center h-24 hover:bg-foreground transition-all 
      duration-100 border-r-2 border-background hover:border-primary font-extralight 
      hover:text-copy text-copy-lighter text-lg"
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