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
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-accent/5 via-primary/5 to-secondary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />

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
