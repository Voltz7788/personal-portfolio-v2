import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import CenterContainer from "./components/General/CenterContainer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main className="bg-foreground min-h-full">
      <CenterContainer>
        <Hero />
        <About />
        <Projects />
        <Experience />
      </CenterContainer>
    </main>
  );
}
