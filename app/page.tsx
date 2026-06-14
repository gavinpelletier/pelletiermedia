import { About } from "@/components/About";
import { ActivitySection } from "@/components/ActivitySection";
import { Capabilities } from "@/components/Capabilities";
import { CaseStudySection } from "@/components/CaseStudySection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { SystemsSection } from "@/components/SystemsSection";
import { WorkflowStack } from "@/components/WorkflowStack";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CaseStudySection />
      <SystemsSection />
      <Capabilities />
      <WorkflowStack />
      <About />
      <ActivitySection />
      <CTASection />
      <Footer />
    </main>
  );
}