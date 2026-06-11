import { About } from "@/components/About";
import { ActivitySection } from "@/components/ActivitySection";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SystemsSection } from "@/components/SystemsSection";
import { VelocityDivider } from "@/components/VelocityDivider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <VelocityDivider />
      <CaseStudySection />
      <SystemsSection />
      <ProjectsSection />
      <Capabilities />
      <About />
      <ActivitySection />
      <CTASection />
      <Footer />
    </main>
  );
}
