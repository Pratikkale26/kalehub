import HeroSection from "@/components/hero-section"
import WorkSection from "@/components/work-section"
import ProofSection from "@/components/proof-section"
import OpenSourceSection from "@/components/open-source-section"
import ExperienceSection from "@/components/experience-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div id="top">
      <HeroSection />
      <WorkSection />
      <ProofSection />
      <OpenSourceSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
