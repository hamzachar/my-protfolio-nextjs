'use client';

import { motion } from 'framer-motion';
import { SkillsIcon } from '@/components/ui/SkillsIcon';
import { Skill } from '@/types';

interface SkillBarProps {
  skill: Skill;
  index: number;
  gradientColor: string;
}

export function SkillBar({ skill, index, gradientColor }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {/* Skill header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          {skill.icon && (
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                backgroundColor: skill.color
                  ? `${skill.color}15`
                  : 'rgba(59, 130, 246, 0.1)',
              }}
            >
              <SkillsIcon
                iconName={skill.icon}
                color={skill.color}
                className="w-5 h-5"
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
          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.1 }}
          className={`h-full ${gradientColor} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  );
}
