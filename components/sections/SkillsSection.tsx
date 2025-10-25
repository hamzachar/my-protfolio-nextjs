'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { SKILLS } from '@/constants/data';
import { Skill } from '@/types';

export function SkillsSection() {
  const t = useTranslations('skills');

  const categories = {
    frontend: SKILLS.filter(s => s.category === 'frontend'),
    backend: SKILLS.filter(s => s.category === 'backend'),
    tools: SKILLS.filter(s => s.category === 'tools'),
    methodologies: SKILLS.filter(s => s.category === 'methodologies'),
  };

  const renderSkillCategory = (
    title: string,
    skills: Skill[],
    gradientColor: string
  ) => (
    <Card className="group hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Skill header with icon */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: `${skill.color}15`,
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: skill.color }}
                      />
                    </div>
                  )}
                  <span className="font-semibold">{skill.name}</span>
                </div>
                <span className="text-sm text-muted-foreground font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: 'easeOut',
                    delay: index * 0.1,
                  }}
                  className={`h-full ${gradientColor} rounded-full relative`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Card>
  );

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-accent/5 via-primary/5 to-secondary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10" />

      <Container>
        <SectionHeader title={t('title')} subtitle={t('subtitle')} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp}>
            {renderSkillCategory(
              t('categories.frontend'),
              categories.frontend,
              'bg-primary'
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            {renderSkillCategory(
              t('categories.backend'),
              categories.backend,
              'bg-secondary'
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            {renderSkillCategory(
              t('categories.tools'),
              categories.tools,
              'bg-accent'
            )}
          </motion.div>

          <motion.div variants={fadeInUp}>
            {renderSkillCategory(
              t('categories.methodologies'),
              categories.methodologies,
              'bg-linear-to-r from-primary to-secondary'
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
