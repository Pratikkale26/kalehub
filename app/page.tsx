import HeroSection from "@/components/hero-section"
import {NowSection} from "@/components/now-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import TechStackSection from "@/components/tech-stack-section"
import IdeaBoardSection from "@/components/idea-board-section"
import BuildLogsSection from "@/components/build-logs-section"
import CTASection from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <NowSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <IdeaBoardSection />
      <BuildLogsSection />
      <CTASection />
    </>
  );
}