'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiCalendar } from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { EXPERIENCES } from '@/constants/data';
import Image from 'next/image';

export function ExperienceSection() {
  const t = useTranslations('experience');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleExpand = (id: string) => {
    const newExpandedId = expandedId === id ? null : id;
    setExpandedId(newExpandedId);

    // Scroll to card after expansion
    if (newExpandedId) {
      setTimeout(() => {
        const card = cardRefs.current[newExpandedId];
        if (card) {
          const navbarHeight = 80; // Adjust based on your navbar height
          const cardTop = card.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = cardTop - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 300); // Wait for animation to start
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-tr from-accent/5 via-primary/5 to-secondary/5" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl -z-10" />
      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {EXPERIENCES.map(exp => (
            <motion.div
              key={exp.id}
              variants={fadeInUp}
              ref={el => {
                cardRefs.current[exp.id] = el;
              }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Header - Always Visible */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full text-left p-6"
                >
                  <div className="flex items-start gap-4">
                    {/* Company Logo */}
                    <div className="shrink-0 w-16 h-16 bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={exp.company}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-2xl font-bold text-primary">
                          {exp.company[0]}
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <FiChevronDown className="w-5 h-5" />
                        </motion.div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-2">
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        {exp.location && <span>• {exp.location}</span>}
                      </div>

                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedId === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-border space-y-6">
                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-lg mb-3">
                            {t('keyAchievements')}
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-muted-foreground"
                              >
                                <span className="text-primary mt-1.5">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-lg mb-3">
                            {t('technologies')}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map(tech => (
                              <Badge key={tech} variant="primary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
