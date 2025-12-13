'use client';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiJest,
  SiCypress,
  SiTestcafe,
  SiFigma,
  SiDocker,
  SiJira,
} from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import { IconType } from 'react-icons';

// Icon mapping
const iconMap: Record<string, IconType> = {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiJest,
  SiCypress,
  SiTestcafe,
  SiFigma,
  SiDocker,
  SiJira,
  FaSass,
};

interface SkillsIconProps {
  iconName?: string;
  color?: string;
  className?: string;
}

export function SkillsIcon({
  iconName,
  color,
  className = 'w-5 h-5',
}: SkillsIconProps) {
  if (!iconName) return null;

  const Icon = iconMap[iconName];

  if (!Icon) {
    console.warn(`Icon "${iconName}" not found in iconMap`);
    return null;
  }

  return <Icon className={className} style={{ color }} />;
}
