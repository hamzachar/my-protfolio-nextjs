import { Skill } from '@/types';

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'React.js',
    level: 95,
    category: 'frontend',
    icon: 'SiReact', // ✅ String name, not component
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    icon: 'SiNextdotjs',
    color: '#000000',
  },
  {
    name: 'TypeScript',
    level: 90,
    category: 'frontend',
    icon: 'SiTypescript',
    color: '#3178C6',
  },
  {
    name: 'JavaScript',
    level: 95,
    category: 'frontend',
    icon: 'SiJavascript',
    color: '#F7DF1E',
  },
  {
    name: 'Redux',
    level: 85,
    category: 'frontend',
    icon: 'SiRedux',
    color: '#764ABC',
  },
  {
    name: 'HTML5',
    level: 95,
    category: 'frontend',
    icon: 'SiHtml5',
    color: '#E34F26',
  },
  {
    name: 'CSS3',
    level: 90,
    category: 'frontend',
    icon: 'SiCss3',
    color: '#1572B6',
  },
  {
    name: 'Tailwind CSS',
    level: 90,
    category: 'frontend',
    icon: 'SiTailwindcss',
    color: '#06B6D4',
  },
  {
    name: 'Sass',
    level: 85,
    category: 'frontend',
    icon: 'FaSass',
    color: '#CC6699',
  },

  // Backend
  {
    name: 'Node.js',
    level: 80,
    category: 'backend',
    icon: 'SiNodedotjs',
    color: '#339933',
  },
  {
    name: 'Express.js',
    level: 75,
    category: 'backend',
    icon: 'SiExpress',
    color: '#000000',
  },
  {
    name: 'NestJS',
    level: 75,
    category: 'backend',
    icon: 'SiNestjs',
    color: '#E0234E',
  },
  {
    name: 'MongoDB',
    level: 70,
    category: 'backend',
    icon: 'SiMongodb',
    color: '#47A248',
  },
  {
    name: 'PostgreSQL',
    level: 70,
    category: 'backend',
    icon: 'SiPostgresql',
    color: '#4169E1',
  },

  // Tools
  {
    name: 'Git',
    level: 90,
    category: 'tools',
    icon: 'SiGit',
    color: '#F05032',
  },
  {
    name: 'GitHub',
    level: 90,
    category: 'tools',
    icon: 'SiGithub',
    color: '#181717',
  },
  {
    name: 'Jest',
    level: 80,
    category: 'tools',
    icon: 'SiJest',
    color: '#C21325',
  },
  {
    name: 'Cypress',
    level: 75,
    category: 'tools',
    icon: 'SiCypress',
    color: '#17202C',
  },
  {
    name: 'Playwright',
    level: 80,
    category: 'tools',
    icon: 'SiTestcafe',
    color: '#2EAD33',
  },
  {
    name: 'Figma',
    level: 75,
    category: 'tools',
    icon: 'SiFigma',
    color: '#F24E1E',
  },
  {
    name: 'Docker',
    level: 70,
    category: 'tools',
    icon: 'SiDocker',
    color: '#2496ED',
  },
  {
    name: 'Jira',
    level: 85,
    category: 'tools',
    icon: 'SiJira',
    color: '#0052CC',
  },

  // Methodologies (no icons)
  {
    name: 'Agile/Scrum',
    level: 90,
    category: 'methodologies',
  },
  {
    name: 'REST API',
    level: 85,
    category: 'methodologies',
  },
  {
    name: 'GraphQL (Apollo)',
    level: 75,
    category: 'methodologies',
  },
  {
    name: 'CI/CD',
    level: 80,
    category: 'methodologies',
  },
  {
    name: 'TDD',
    level: 75,
    category: 'methodologies',
  },
];

export const SKILL_CATEGORIES = {
  frontend: 'Frontend Development',
  backend: 'Backend Development',
  tools: 'Tools & Technologies',
  methodologies: 'Methodologies & Practices',
} as const;
