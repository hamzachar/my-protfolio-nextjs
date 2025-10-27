import { HeroSection } from '@/components/sections/hero/HeroSection';
import { AboutSection } from '@/components/sections/about/AboutSection';
import { ExperienceSection } from '@/components/sections/experiences/ExperienceSection';
import { SkillsSection } from '@/components/sections/skills/SkillsSection';
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection';
import { ContactSection } from '@/components/sections/contact/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
