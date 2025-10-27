'use client';

import { useParams } from 'next/navigation';
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
import { FadeIn } from '@/components/ui/animated/FadeIn';
import { SlideIn } from '@/components/ui/animated/SlideIn';
import { ScaleIn } from '@/components/ui/animated/ScaleIn';
import { PersonalInfo, CVFiles } from '@/types';

interface AboutClientProps {
  title: string;
  subtitle: string;
  bio: {
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  stats: Array<{
    icon: string;
    value: string;
    label: string;
  }>;
  education: {
    title: string;
    degree: string;
    field: string;
    institution: string;
    year: string;
  };
  languages: {
    title: string;
    french: string;
    english: string;
    fluent: string;
    intermediate: string;
  };
  learning: {
    title: string;
    platforms: string;
    items: string[];
  };
  downloadCV: string;
  cvFiles: CVFiles;
  personalInfo: PersonalInfo;
}

const iconMap = {
  FiBriefcase,
  FiAward,
  FiUsers,
  FiCode,
};

const statColors = [
  { gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10' },
  { gradient: 'from-purple-500 to-pink-500', bg: 'bg-purple-500/10' },
  { gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10' },
  { gradient: 'from-orange-500 to-red-500', bg: 'bg-orange-500/10' },
];

export function AboutClient({
  title,
  subtitle,
  bio,
  stats,
  education,
  languages,
  learning,
  downloadCV,
  cvFiles,
  personalInfo,
}: AboutClientProps) {
  const params = useParams();
  const locale = (params.locale as 'en' | 'fr') || 'en';
  const cvFile = cvFiles[locale];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-bl from-secondary/5 via-accent/5 to-primary/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />

      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Image */}
          <SlideIn direction="left">
            <div className="relative aspect-square max-w-md mx-auto">
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
                  alt={personalInfo.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </SlideIn>

          {/* Bio */}
          <SlideIn direction="right">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {bio.paragraph1}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {bio.paragraph2}
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {bio.paragraph3}
                </p>
              </div>

              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={cvFile} download>
                  <FiDownload className="mr-2" />
                  {downloadCV}
                </a>
              </Button>
            </div>
          </SlideIn>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap];
            const colors = statColors[index];

            return (
              <ScaleIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center relative overflow-hidden group">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    <div className="relative">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-4 rounded-xl ${colors.bg} flex items-center justify-center`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-primary" />
                      </motion.div>

                      <div className="text-4xl font-bold mb-2 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>

                      <div className="text-sm text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </ScaleIn>
            );
          })}
        </div>

        {/* Education & Languages */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={0.2}>
            <Card className="group hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FiBookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{education.title}</h3>
              </div>

              <div className="space-y-3">
                <div className="pl-1 border-l-4 border-primary">
                  <p className="font-semibold text-lg text-foreground pl-3">
                    {education.degree}
                  </p>
                  <p className="text-muted-foreground pl-3">
                    {education.field}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {education.institution}
                  </span>
                  <span>•</span>
                  <span className="font-semibold">{education.year}</span>
                </div>
              </div>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="group hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <FiGlobe className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">{languages.title}</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{languages.french}</span>
                    <span className="text-primary font-medium">
                      {languages.fluent}
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

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{languages.english}</span>
                    <span className="text-secondary font-medium">
                      {languages.intermediate}
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
          </FadeIn>
        </div>

        {/* Learning */}
        <FadeIn delay={0.4}>
          <Card className="group hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-accent/20 to-transparent rounded-bl-full" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FiCode className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{learning.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {learning.platforms}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {learning.items.map((platform, index) => (
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
        </FadeIn>
      </Container>
    </section>
  );
}
