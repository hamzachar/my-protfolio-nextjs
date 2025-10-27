import { getTranslations } from 'next-intl/server';
import { SkillsClient } from './SkillsClient';
import { SKILLS } from '@/constants/data/skills';

export async function SkillsSection() {
  const t = await getTranslations('skills');

  const categories = {
    frontend: SKILLS.filter(s => s.category === 'frontend'),
    backend: SKILLS.filter(s => s.category === 'backend'),
    tools: SKILLS.filter(s => s.category === 'tools'),
    methodologies: SKILLS.filter(s => s.category === 'methodologies'),
  };

  return (
    <SkillsClient
      title={t('title')}
      subtitle={t('subtitle')}
      categoryTitles={{
        frontend: t('categories.frontend'),
        backend: t('categories.backend'),
        tools: t('categories.tools'),
        methodologies: t('categories.methodologies'),
      }}
      categories={categories}
    />
  );
}
