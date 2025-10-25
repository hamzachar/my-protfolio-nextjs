'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { fadeIn, fadeInUp, staggerContainer } from '@/lib/animations';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/constants/data';

export function HeroSection() {
  const t = useTranslations('hero');

  const iconMap: Record<string, any> = {
    FaGithub: FiGithub,
    FaLinkedin: FiLinkedin,
    FaEnvelope: FiMail,
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5" />

      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeIn}
            className="text-lg text-muted-foreground mb-4"
          >
            {t('greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
          >
            <span className="gradient-text">{PERSONAL_INFO.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4"
          >
            {t('title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-primary font-medium mb-6"
          >
            {t('subtitle')}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {t('description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button asChild size="lg">
              <a href="#projects">{t('cta.projects')}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">{t('cta.contact')}</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            {SOCIAL_LINKS.map(link => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">{t('scrollDown')}</span>
            <FiArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
