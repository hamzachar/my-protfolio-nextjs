import { getTranslations } from 'next-intl/server';
import { ContactClient } from './ContactClient';
import { CONTACT_INFO } from '@/constants/data';
import { SOCIAL_LINKS } from '@/constants/social';

export async function ContactSection() {
  const t = await getTranslations('contact');

  return (
    <ContactClient
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      contactInfo={CONTACT_INFO}
      socialLinks={SOCIAL_LINKS}
      infoLabels={{
        email: t('info.email'),
        phone: t('info.phone'),
        location: t('info.location'),
        availability: t('info.availability'),
        status: t('info.status'),
      }}
      formLabels={{
        name: t('form.name'),
        namePlaceholder: t('form.namePlaceholder'),
        email: t('form.email'),
        emailPlaceholder: t('form.emailPlaceholder'),
        subject: t('form.subject'),
        subjectPlaceholder: t('form.subjectPlaceholder'),
        message: t('form.message'),
        messagePlaceholder: t('form.messagePlaceholder'),
        send: t('form.send'),
        sending: t('form.sending'),
        success: t('form.success'),
        error: t('form.error'),
      }}
      socialTitle={t('social.title')}
    />
  );
}
