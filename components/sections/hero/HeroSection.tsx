import { getTranslations } from 'next-intl/server';
import { HeroClient } from './HeroClient';
import { PERSONAL_INFO } from '@/constants/data';
import { SOCIAL_LINKS } from '@/constants/social';

export async function HeroSection() {
  const t = await getTranslations('hero');

  return (
    <HeroClient
      greeting={t('greeting')}
      name={PERSONAL_INFO.name}
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      ctaProjects={t('cta.projects')}
      ctaContact={t('cta.contact')}
      scrollDown={t('scrollDown')}
      socialLinks={SOCIAL_LINKS}
    />
  );
}
