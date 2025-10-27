'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SkillCategory } from './SkillCategory';
import { StaggerContainer } from '@/components/ui/animated/StaggerContainer';
import { FadeIn } from '@/components/ui/animated/FadeIn';
import { Skill } from '@/types';

interface SkillsClientProps {
  title: string;
  subtitle: string;
  categoryTitles: {
    frontend: string;
    backend: string;
    tools: string;
    methodologies: string;
  };
  categories: {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
    methodologies: Skill[];
  };
}

const gradientColors = {
  frontend: 'bg-primary',
  backend: 'bg-secondary',
  tools: 'bg-accent',
  methodologies: 'bg-linear-to-r from-primary to-secondary',
};

export function SkillsClient({
  title,
  subtitle,
  categoryTitles,
  categories,
}: SkillsClientProps) {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-accent/5 via-primary/5 to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <StaggerContainer
          className="grid md:grid-cols-2 gap-8"
          staggerDelay={0.2}
        >
          <FadeIn>
            <SkillCategory
              title={categoryTitles.frontend}
              skills={categories.frontend}
              gradientColor={gradientColors.frontend}
            />
          </FadeIn>

          <FadeIn>
            <SkillCategory
              title={categoryTitles.backend}
              skills={categories.backend}
              gradientColor={gradientColors.backend}
            />
          </FadeIn>

          <FadeIn>
            <SkillCategory
              title={categoryTitles.tools}
              skills={categories.tools}
              gradientColor={gradientColors.tools}
            />
          </FadeIn>

          <FadeIn>
            <SkillCategory
              title={categoryTitles.methodologies}
              skills={categories.methodologies}
              gradientColor={gradientColors.methodologies}
            />
          </FadeIn>
        </StaggerContainer>
      </Container>
    </section>
  );
}
