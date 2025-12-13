'use server';

import { getTranslations } from 'next-intl/server';

/**
 * Fetch translations with caching
 * Next.js automatically caches this during build for static generation
 */
export async function getProjectsData(locale: string) {
  const t = await getTranslations({ locale, namespace: 'projects' });

  // This data is static and can be cached indefinitely
  return {
    title: t('title'),
    subtitle: t('subtitle'),
    viewDemo: t('viewDemo'),
    viewCode: t('viewCode'),
    featured: t('featured'),
    items: t.raw('items'), // Get the raw array from translations
  };
}

/**
 * Fetch experience data with caching
 */
export async function getExperienceData(locale: string) {
  const t = await getTranslations({ locale, namespace: 'experience' });

  return {
    title: t('title'),
    subtitle: t('subtitle'),
    present: t('present'),
    technologies: t('technologies'),
    achievements: t('achievements'),
    items: t.raw('items'),
  };
}

/**
 * Fetch skills data with caching
 */
export async function getSkillsData(locale: string) {
  const t = await getTranslations({ locale, namespace: 'skills' });

  return {
    title: t('title'),
    subtitle: t('subtitle'),
    categories: {
      frontend: t('categories.frontend'),
      backend: t('categories.backend'),
      tools: t('categories.tools'),
      methodologies: t('categories.methodologies'),
    },
  };
}

/**
 * Fetch about data with caching
 */
export async function getAboutData(locale: string) {
  const t = await getTranslations({ locale, namespace: 'about' });

  return {
    title: t('title'),
    subtitle: t('subtitle'),
    bio: {
      paragraph1: t('bio.paragraph1'),
      paragraph2: t('bio.paragraph2'),
      paragraph3: t('bio.paragraph3'),
    },
    stats: t.raw('stats'),
    education: {
      title: t('education.title'),
      degree: t('education.degree'),
      field: t('education.field'),
    },
    languages: {
      title: t('languages.title'),
      french: t('languages.french'),
      english: t('languages.english'),
      fluent: t('languages.fluent'),
      intermediate: t('languages.intermediate'),
    },
    learning: {
      title: t('learning.title'),
      platforms: t('learning.platforms'),
      items: t.raw('learning.items') || [],
    },
    downloadCV: t('downloadCV'),
  };
}

/**
 * Example of fetching external data with custom caching
 * This could be used for dynamic content like blog posts, analytics, etc.
 */
export async function getDynamicContent() {
  // Force fresh data on every request (SSR)
  const res = await fetch('https://api.example.com/content', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch dynamic content');
  }

  return res.json();
}

/**
 * Example of fetching with revalidation (ISR)
 * Data will be cached and revalidated every 1 hour
 */
export async function getRevalidatedContent() {
  const res = await fetch('https://api.example.com/content', {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error('Failed to fetch content');
  }

  return res.json();
}

/**
 * Example of fetching with tagged caching
 * Can be manually revalidated using revalidateTag('projects')
 */
export async function getTaggedContent() {
  const res = await fetch('https://api.example.com/projects', {
    next: {
      revalidate: 3600,
      tags: ['projects'], // Tag for manual revalidation
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}
