'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from './ProjectCard';
import { FadeIn } from '@/components/ui/animated/FadeIn';
import { Project } from '@/types';

interface ProjectsClientProps {
  title: string;
  subtitle: string;
  projects: Project[];
  labels: {
    viewDemo: string;
    viewCode: string;
    featured: string;
  };
}

export function ProjectsClient({
  title,
  subtitle,
  projects,
  labels,
}: ProjectsClientProps) {
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-tl from-primary/5 via-secondary/5 to-accent/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />

      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} labels={labels} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
