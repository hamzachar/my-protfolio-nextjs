import dynamic from 'next/dynamic';

import { HeroSection } from '@/components/sections/hero/HeroSection';
import { AboutSection } from '@/components/sections/about/AboutSection';

// Dynamically import sections below to optimize performance
const ExperienceSection = dynamic(
  () =>
    import('@/components/sections/experiences/ExperienceSection').then(
      m => m.ExperienceSection
    ),
  { ssr: true }
);

const SkillsSection = dynamic(
  () =>
    import('@/components/sections/skills/SkillsSection').then(
      m => m.SkillsSection
    ),
  { ssr: true }
);

const ProjectsSection = dynamic(
  () =>
    import('@/components/sections/projects/ProjectsSection').then(
      m => m.ProjectsSection
    ),
  { ssr: true }
);

const ContactSection = dynamic(
  () =>
    import('@/components/sections/contact/ContactSection').then(
      m => m.ContactSection
    ),
  { ssr: true }
);

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
