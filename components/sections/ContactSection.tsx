'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiMapPin,
  FiCheck,
  FiGithub,
  FiLinkedin,
  FiPhone,
} from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { slideInLeft, slideInRight } from '@/lib/animations';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/constants/data';
import { isValidEmail } from '@/lib/utils';

export function ContactSection() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const iconMap: Record<string, any> = {
    FaGithub: FiGithub,
    FaLinkedin: FiLinkedin,
    FaEnvelope: FiMail,
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t('form.required');
    }
    if (!formData.email.trim()) {
      newErrors.email = t('form.required');
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t('form.invalidEmail');
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t('form.required');
    }
    if (!formData.message.trim()) {
      newErrors.message = t('form.required');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('loading');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-primary/5 via-accent/5 to-secondary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.1),transparent_50%)]" />

      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <p className="text-center text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="space-y-6"
          >
            {/* Email */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FiMail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('info.email')}</h3>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 group hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <FiPhone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('info.phone')}</h3>
                  <a
                    href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <FiMapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t('info.location')}</h3>
                  <p className="text-muted-foreground">
                    {CONTACT_INFO.location}
                  </p>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <FiCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">
                    {t('info.availability')}
                  </h3>
                  <p className="text-muted-foreground">{t('info.status')}</p>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4">{t('social.title')}</h3>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map(link => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                      aria-label={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('form.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('form.emailPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('form.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('form.subjectPlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {t('form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('form.messagePlaceholder')}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? t('form.sending') : t('form.send')}
                </Button>

                {/* Success Message */}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center"
                  >
                    {t('form.success')}
                  </motion.p>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-center"
                  >
                    {t('form.error')}
                  </motion.p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
