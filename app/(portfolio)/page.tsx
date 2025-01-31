import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import CenterContainer from "../components/General/CenterContainer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <main className="bg-foreground min-h-full transition-all duration-300">
      <CenterContainer>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </CenterContainer>
    </main>
  );
}
