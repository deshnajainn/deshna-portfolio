import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <main className="relative">
      {/* Option 5: Scroll Progress Bar + Active Section HUD */}
      <ScrollIndicator />

      <Navbar />
      <Hero />

      {/* Option 2: Infinite-scroll retro ribbon */}
      <Marquee />

      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
