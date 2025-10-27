'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { SlideIn } from '@/components/ui/animated/SlideIn';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import { ContactInfo as ContactInfoType, SocialLink } from '@/types';

interface ContactClientProps {
  title: string;
  subtitle: string;
  description: string;
  contactInfo: ContactInfoType;
  socialLinks: SocialLink[];
  infoLabels: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    status: string;
  };
  formLabels: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    subject: string;
    subjectPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
  };
  socialTitle: string;
}

export function ContactClient({
  title,
  subtitle,
  description,
  contactInfo,
  socialLinks,
  infoLabels,
  formLabels,
  socialTitle,
}: ContactClientProps) {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-primary/5 via-accent/5 to-secondary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.1),transparent_50%)]" />

      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <SlideIn direction="left">
            <ContactInfo
              contactInfo={contactInfo}
              socialLinks={socialLinks}
              labels={infoLabels}
              socialTitle={socialTitle}
            />
          </SlideIn>

          <SlideIn direction="right">
            <ContactForm labels={formLabels} />
          </SlideIn>
        </div>
      </Container>
    </section>
  );
}
