'use server';

import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * Revalidate specific paths
 * Use this to refresh data on specific pages
 */
export async function revalidatePagePath(path: string) {
  try {
    revalidatePath(path);
    return { success: true };
  } catch (error) {
    console.error('Failed to revalidate path:', error);
    return { success: false, error: 'Failed to revalidate' };
  }
}

/**
 * Revalidate all pages in a specific locale
 */
export async function revalidateLocale(locale: 'en' | 'fr') {
  try {
    revalidatePath(`/${locale}`, 'layout');
    return { success: true };
  } catch (error) {
    console.error('Failed to revalidate locale:', error);
    return { success: false, error: 'Failed to revalidate' };
  }
}

/**
 * Revalidate content by tag
 * Use this with fetch tags for granular cache control
 */
export async function revalidateContentTag(tag: string) {
  try {
    revalidateTag(tag, 'max');
    return { success: true };
  } catch (error) {
    console.error('Failed to revalidate tag:', error);
    return { success: false, error: 'Failed to revalidate' };
  }
}

/**
 * Revalidate multiple tags at once
 */
export async function revalidateMultipleTags(tags: string[]) {
  try {
    tags.forEach(tag => revalidateTag(tag, 'max'));
    return { success: true };
  } catch (error) {
    console.error('Failed to revalidate tags:', error);
    return { success: false, error: 'Failed to revalidate' };
  }
}

/**
 * Example usage in an admin panel or webhook:
 *
 * // Revalidate projects page
 * await revalidatePagePath('/en/projects');
 *
 * // Revalidate all French pages
 * await revalidateLocale('fr');
 *
 * // Revalidate tagged content
 * await revalidateContentTag('projects');
 */
