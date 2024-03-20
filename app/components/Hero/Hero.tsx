import Link from "next/link";
import { Inter } from "next/font/google";
import Reveal from "../Animation/Reveal";
const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="py-40" id="hero">
      <Reveal>
        <h1 className="font-black text-[6rem] text-copy">
          Hey, I&apos;m Yannis<span className="text-primary">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="font-extralight text-4xl text-copy mt-5">
          I&apos;m a{" "}
          <span className="font-bold text-secondary">Full Stack Developer</span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-copy-light mt-5 w-4/5 text-xl font-light">
          I&apos;ve spent the last 5 years building and scaling software for
          some pretty cool companies. I also teach people to paint online
          (incase you&apos;ve got an empty canvas layin&apos; around 🎨).
          Let&apos;s connect!
        </p>
      </Reveal>
      <Reveal>
        <Link href={"#contact"}>
          <div
            className={`bg-secondary px-4 py-2.5 w-full rounded text-xl mt-7 ${inter.className}`}
          >
            Contact me
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
