import { Suspense } from 'react';
import { HeroSection } from '@/components/sections/hero/HeroSection';
import { AboutSection } from '@/components/sections/about/AboutSection';
import { ExperienceSection } from '@/components/sections/experiences/ExperienceSection';
import { SkillsSection } from '@/components/sections/skills/SkillsSection';
import { ProjectsSection } from '@/components/sections/projects/ProjectsSection';
import { ContactSection } from '@/components/sections/contact/ContactSection';

// Loading fallback components
function SectionSkeleton() {
  return (
    <div className="py-20 animate-pulse">
      <div className="container mx-auto px-4">
        <div className="h-8 bg-muted rounded w-1/4 mx-auto mb-4" />
        <div className="h-4 bg-muted rounded w-1/3 mx-auto mb-8" />
        <div className="space-y-4">
          <div className="h-32 bg-muted rounded" />
          <div className="h-32 bg-muted rounded" />
        </div>
      </div>
    </div>
  );
}

// Server Component - No 'use client' needed
export default function Home() {
  return (
    <>
      {/* Hero loads immediately - critical content */}
      <HeroSection />

      {/* About section with Suspense for streaming */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Experience section with Suspense */}
      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>

      {/* Projects section with Suspense */}
      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      {/* Skills section with Suspense */}
      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>

      {/* Contact section with Suspense */}
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
}
