'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ExperienceCard } from './ExperienceCard';
import { FadeIn } from '@/components/ui/animated/FadeIn';
import { Experience } from '@/types';

interface ExperienceClientProps {
  title: string;
  subtitle: string;
  experiences: Experience[];
  labels: {
    present: string;
    technologies: string;
    achievements: string;
  };
}

export function ExperienceClient({
  title,
  subtitle,
  experiences,
  labels,
}: ExperienceClientProps) {
  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden section-gradient-experience"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <FadeIn key={experience.id} delay={index * 0.1}>
              <ExperienceCard experience={experience} labels={labels} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
