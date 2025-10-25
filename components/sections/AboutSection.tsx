'use client';

import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiBriefcase,
  FiAward,
  FiUsers,
  FiCode,
  FiDownload,
  FiBookOpen,
  FiGlobe,
} from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, slideInLeft, slideInRight, scaleIn } from '@/lib/animations';
import {
  PERSONAL_INFO,
  EDUCATION,
  CONTINUOUS_LEARNING,
} from '@/constants/data';

export function AboutSection() {
  const t = useTranslations('about');
  const params = useParams();
  const locale = params.locale as string;

  // Determine CV file based on language
  const cvFile =
    locale === 'fr'
      ? '/cv/Hamza_CHARAFI_FR_DDC_11-2025.pdf'
      : '/cv/Hamza_CHARAFI_EN_DDC_11-2025.pdf';

  const stats = [
    {
      icon: FiBriefcase,
      value: `${PERSONAL_INFO.yearsOfExperience}+`,
      label: t('stats.experience'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: FiAward,
      value: `${PERSONAL_INFO.projectsCompleted}+`,
      label: t('stats.projects'),
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: FiUsers,
      value: PERSONAL_INFO.companiesWorked,
      label: t('stats.companies'),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: FiCode,
      value: `${PERSONAL_INFO.technologiesMastered}+`,
      label: t('stats.technologies'),
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-bl from-secondary/5 via-accent/5 to-primary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />

      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Image */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated background blob */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-primary to-secondary rounded-2xl rotate-6 opacity-20"
                animate={{
                  rotate: [6, 8, 6],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative bg-muted rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile/profile-picture.png"
                  alt={PERSONAL_INFO.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
            className="space-y-6"
          >
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('bio.paragraph1')}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('bio.paragraph2')}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t('bio.paragraph3')}
              </p>
            </div>

            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={cvFile} download>
                <FiDownload className="mr-2" />
                {t('downloadCV')}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats Grid - Enhanced */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="text-center relative overflow-hidden group">
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon with animated background */}
                <div className="relative">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Stat value with counter animation */}
                  <motion.div
                    className="text-4xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>

                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Education & Languages - Enhanced */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Education Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="group hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FiBookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{t('education.title')}</h3>
              </div>

              <div className="space-y-3">
                <div className="pl-1 border-l-4 border-primary">
                  <p className="font-semibold text-lg text-foreground pl-3">
                    {t('education.degree')}
                  </p>
                  <p className="text-muted-foreground pl-3">
                    {t('education.field')}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {EDUCATION.institution}
                  </span>
                  <span>•</span>
                  <span className="font-semibold">{EDUCATION.year}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="group hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FiGlobe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">{t('languages.title')}</h3>
              </div>

              <div className="space-y-4">
                {/* French */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">
                      {t('languages.french')}
                    </span>
                    <span className="text-primary font-medium">
                      {t('languages.fluent')}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-primary to-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                    />
                  </div>
                </div>

                {/* English */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">
                      {t('languages.english')}
                    </span>
                    <span className="text-secondary font-medium">
                      {t('languages.intermediate')}
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-linear-to-r from-secondary to-accent rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Continuous Learning - Enhanced */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="group hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            {/* Decorative corner gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-accent/20 to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FiCode className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{t('learning.title')}</h3>
                  <p className="text-sm text-muted-foreground">
                    {t('learning.platforms')}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {CONTINUOUS_LEARNING.map((platform, index) => (
                  <motion.span
                    key={platform}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-linear-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-semibold cursor-pointer border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {platform}
                  </motion.span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
