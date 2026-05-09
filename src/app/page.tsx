import { Aurora } from "@/components/backgrounds/aurora";
import { Navbar } from "@/components/navigation/navbar";
import { AboutSection } from "@/sections/about";
import { AdvantageSection } from "@/sections/advantage";
import { ContactSection } from "@/sections/contact";
import { ExperienceSection } from "@/sections/experience";
import { FooterSection } from "@/sections/footer";
import { HeroSection } from "@/sections/hero";
import { ProjectsSection } from "@/sections/projects";
import { ResumeSection } from "@/sections/resume";
import { SkillsSection } from "@/sections/skills";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Aurora className="fixed inset-0 h-screen opacity-60" />
      <Navbar />
      <main id="main" className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <AdvantageSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
