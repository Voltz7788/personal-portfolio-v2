import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

export default function NavLink({ href, title }: { href: Url; title: string }) {
  return (
    <Link
      href={href}
      className="grid place-content-center h-24 hover:bg-foreground transition-all 
      duration-100 border-r-2 border-background hover:border-secondary font-extralight 
      hover:text-copy text-copy-lighter text-lg"
    >
      <p className="rotate-90 ">{title}</p>
    </Link>
  );
}
