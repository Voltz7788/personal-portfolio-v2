import Link from "next/link";
import Reveal from "../Animation/Reveal";
import { socials } from "@/app/data/socials";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      className="pt-64 pb-96 flex flex-col items-center justify-center w-full"
      id="contact"
    >
      <Reveal width="w-full">
        <h2 className="font-black text-[5.5rem] text-copy w-full text-center">
          Contact<span className="text-primary">.</span>
        </h2>
      </Reveal>
      <Reveal width="w-fit">
        <p className="text-lg text-center font-light text-copy-lighter mx-auto max-w-[80%] mb-10">
          Shoot me an email if you want to connect! You can also find me on{" "}
          <Link
            href={socials.linkedIn}
            target="_blank"
            className="text-secondary hover:underline"
          >
            Linkedin
          </Link>{" "}
          if that&apos;s more your speed.
        </p>
      </Reveal>
      <Reveal width="w-fit">
        <Link
          href={"mailto: yannismadu777@gmail.com"}
          className="text-xl text-copy hover:text-secondary transition-colors duration-200"
        >
          <MdEmail className="inline text-3xl mr-2" />
          yannismadu777@gmail.com
        </Link>
      </Reveal>
    </section>
  );
}
