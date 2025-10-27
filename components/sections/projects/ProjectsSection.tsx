import { getTranslations } from 'next-intl/server';
import { ProjectsClient } from './ProjectsClient';

export async function ProjectsSection() {
  const t = await getTranslations('projects');

  // Get projects from translations
  const projectsCount = 5; // You know you have 3 projects
  const projects = Array.from({ length: projectsCount }, (_, i) => {
    const proj = t.raw(`items.${i}`);
    return proj;
  });

  return (
    <ProjectsClient
      title={t('title')}
      subtitle={t('subtitle')}
      projects={projects}
      labels={{
        viewDemo: t('viewDemo'),
        viewCode: t('viewCode'),
        featured: t('featured'),
      }}
    />
  );
}
