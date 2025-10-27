'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiMapPin,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';
import { Card } from '@/components/ui/Card';
import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
  labels: {
    present: string;
    technologies: string;
    achievements: string;
  };
}

export function ExperienceCard({ experience, labels }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  const startDate = formatDate(experience.startDate);
  const endDate = experience.current
    ? labels.present
    : formatDate(experience.endDate!);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        {/* Colored accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-secondary to-accent" />

        <div className="pl-6">
          {/* Header with Logo */}
          <div className="flex items-start gap-4 mb-4">
            {/* Company Logo */}
            {experience.logo ? (
              <div className="relative w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-white dark:bg-muted shadow-md ring-2 ring-border group-hover:ring-primary transition-all">
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  fill
                  className="object-contain p-2"
                  sizes="64px"
                />
              </div>
            ) : (
              <div className="w-16 h-16 shrink-0 rounded-lg bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-md">
                <FaBuilding className="w-8 h-8 text-primary" />
              </div>
            )}

            {/* Company Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {experience.position}
              </h3>
              <p className="text-lg md:text-xl text-primary font-semibold mb-2">
                {experience.company}
              </p>

              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FiCalendar className="w-4 h-4 shrink-0" />
                  <span>
                    {startDate} - {endDate}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <FiMapPin className="w-4 h-4 shrink-0" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Current badge */}
            {experience.current && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-semibold rounded-full whitespace-nowrap shrink-0 border border-green-500/20"
              >
                Current
              </motion.span>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <span className="w-1 h-4 bg-primary rounded-full"></span>
              {labels.technologies}
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.slice(0, 8).map(tech => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
              {experience.technologies.length > 8 && (
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full font-medium">
                  +{experience.technologies.length - 8} more
                </span>
              )}
            </div>
          </div>

          {/* Expandable Achievements */}
          {experience.achievements.length > 0 && (
            <>
              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-sm mb-3 transition-colors"
              >
                {isExpanded ? (
                  <>
                    <FiChevronUp className="w-4 h-4" />
                    Hide achievements
                  </>
                ) : (
                  <>
                    <FiChevronDown className="w-4 h-4" />
                    Show {experience.achievements.length} key achievements
                  </>
                )}
              </motion.button>

              <motion.div
                initial={false}
                animate={{
                  height: isExpanded ? 'auto' : 0,
                  opacity: isExpanded ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="space-y-2 pt-2 pb-4">
                  {experience.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 group/item"
                    >
                      <span className="text-primary mt-1.5 text-lg leading-none">
                        •
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                        {achievement}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </Card>
  );
}
