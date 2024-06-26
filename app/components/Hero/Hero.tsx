import Link from "next/link";
import { Inter } from "next/font/google";
import Reveal from "../Animation/Reveal";
const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className="py-20 md:py-40 " id="hero">
      <Reveal>
        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl text-copy transition-all duration-300">
          Hey, I&apos;m Yannis
          <span className="text-primary transition-all duration-300">.</span>
        </h1>
      </Reveal>
      <Reveal>
        <h2 className="font-extralight text-3xl lg:text-4xl text-copy mt-8 md:mt-5 transition-all duration-300">
          I&apos;m a{" "}
          <span className="font-bold text-secondary transition-all duration-300">
            Full Stack Developer
          </span>
        </h2>
      </Reveal>
      <Reveal>
        <p className="text-copy-light mt-8 md:mt-5 text-lg w-full md:text-xl font-light transition-all duration-300">
          I&apos;ve spent the last year hyperfocusing on learning web
          development, and have built some pretty cool stuff along the way 🔨.
          Let&apos;s connect!
        </p>
      </Reveal>
      <Reveal>
        <Link href={"#contact"}>
          <div
            className={`bg-secondary text-copy px-4 py-2.5 w-full rounded text-xl mt-10 md:mt-7 ${inter.className} transition-all duration-300`}
          >
            Contact me
          </div>
        </Link>
      </Reveal>
    </section>
  );
}
