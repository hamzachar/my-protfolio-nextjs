'use client';

import { motion, useScroll } from 'framer-motion';
import { useSyncExternalStore } from 'react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Use useSyncExternalStore to avoid hydration mismatch
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
      suppressHydrationWarning
    />
  );
}
