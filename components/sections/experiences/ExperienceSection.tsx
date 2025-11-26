import { getTranslations } from 'next-intl/server';
import { ExperienceClient } from './ExperienceClient';

export async function ExperienceSection() {
  const t = await getTranslations('experience');

  // Get experiences from translations
  const experiencesCount = 4;
  const experiences = Array.from({ length: experiencesCount }, (_, i) => {
    const exp = t.raw(`items.${i}`);
    return exp;
  });

  return (
    <ExperienceClient
      title={t('title')}
      subtitle={t('subtitle')}
      experiences={experiences}
      labels={{
        present: t('present'),
        technologies: t('technologies'),
        achievements: t('achievements'),
      }}
    />
  );
}
