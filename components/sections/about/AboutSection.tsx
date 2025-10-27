import { getTranslations } from 'next-intl/server';
import { AboutClient } from './AboutClient';
import {
  PERSONAL_INFO,
  EDUCATION,
  CONTINUOUS_LEARNING,
  CV_FILES,
} from '@/constants/data';

export async function AboutSection() {
  const t = await getTranslations('about');

  const stats = [
    {
      icon: 'FiBriefcase',
      value: `${PERSONAL_INFO.yearsOfExperience}+`,
      label: t('stats.experience'),
    },
    {
      icon: 'FiAward',
      value: `${PERSONAL_INFO.projectsCompleted}+`,
      label: t('stats.projects'),
    },
    {
      icon: 'FiUsers',
      value: PERSONAL_INFO.companiesWorked.toString(),
      label: t('stats.companies'),
    },
    {
      icon: 'FiCode',
      value: `${PERSONAL_INFO.technologiesMastered}+`,
      label: t('stats.technologies'),
    },
  ];

  return (
    <AboutClient
      title={t('title')}
      subtitle={t('subtitle')}
      bio={{
        paragraph1: t('bio.paragraph1'),
        paragraph2: t('bio.paragraph2'),
        paragraph3: t('bio.paragraph3'),
      }}
      stats={stats}
      education={{
        title: t('education.title'),
        degree: t('education.degree'),
        field: t('education.field'),
        institution: EDUCATION.institution,
        year: EDUCATION.year,
      }}
      languages={{
        title: t('languages.title'),
        french: t('languages.french'),
        english: t('languages.english'),
        fluent: t('languages.fluent'),
        intermediate: t('languages.intermediate'),
      }}
      learning={{
        title: t('learning.title'),
        platforms: t('learning.platforms'),
        items: CONTINUOUS_LEARNING,
      }}
      downloadCV={t('downloadCV')}
      cvFiles={CV_FILES}
      personalInfo={PERSONAL_INFO}
    />
  );
}
