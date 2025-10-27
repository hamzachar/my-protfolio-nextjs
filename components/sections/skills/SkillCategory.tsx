'use client';

import { Card } from '@/components/ui/Card';
import { SkillBar } from './SkillBar';
import { Skill } from '@/types';

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  gradientColor: string;
}

export function SkillCategory({
  title,
  skills,
  gradientColor,
}: SkillCategoryProps) {
  return (
    <Card className="group hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-6">{title}</h3>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            index={index}
            gradientColor={gradientColor}
          />
        ))}
      </div>
    </Card>
  );
}
