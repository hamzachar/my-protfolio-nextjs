'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className={cn('mb-12', centered ? 'text-center' : '')}
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
