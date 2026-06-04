import { About } from "@/components/About";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudy } from "@/components/CaseStudy";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CaseStudy />
      <Capabilities />
      <About />
      <CTASection />
    </main>
  );
}
