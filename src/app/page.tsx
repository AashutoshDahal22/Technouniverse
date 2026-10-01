"use client";
import About from "./about/page";
import Contact from "./Contact/contact";
import Hero from "./hero/hero";
import Services from "./services/page";
import Team from "./team/page";
import Projects from "./projects/page";
import Careers from "./careers/page";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen cursor-pointer">
      <Hero />
      <About />
      <Team />
      <Services />
      <Projects />
      <Careers />
      <Contact />
    </main>
  );
}
