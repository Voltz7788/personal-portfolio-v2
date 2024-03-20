import About from "./components/About/About";
import CenterContainer from "./components/General/CenterContainer";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="bg-foreground min-h-full">
      <CenterContainer>
        <Hero />
        <About />
      </CenterContainer>
    </main>
  );
}
