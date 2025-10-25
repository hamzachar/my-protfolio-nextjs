'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow:
                '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            }
          : {}
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={cn(
        'rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
