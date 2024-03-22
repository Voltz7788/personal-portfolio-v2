import Link from "next/link";
import Reveal from "../Animation/Reveal";
import { socials } from "@/app/data/socials";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      className="pt-64 pb-80 flex flex-col items-center justify-center w-full"
      id="contact"
    >
      <Reveal width="w-full">
        <h2 className="font-black text-7xl lg:text-[5.5rem] text-copy w-full text-center transition-all duration-300">
          Contact
          <span className="text-primary transition-all duration-300">.</span>
        </h2>
      </Reveal>
      <Reveal width="w-fit">
        <p className="text-lg text-center font-light text-copy-lighter mx-auto  lg:max-w-[80%] mb-10 mt-2 transition-all duration-300">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <Link
            href={socials.linkedIn}
            target="_blank"
            className="text-secondary hover:underline transition-all duration-300"
          >
            Linkedin
          </Link>{" "}
          if that&apos;s more your speed.
        </p>
      </Reveal>
      <Reveal width="w-fit">
        <Link
          href={"mailto: yannismadu777@gmail.com"}
          className="text-lg md:text-xl text-copy hover:text-secondary transition-all duration-200"
        >
          <MdEmail className="inline text-2xl md:text-3xl mr-2" />
          yannismadu777@gmail.com
        </Link>
      </Reveal>
    </section>
  );
}
