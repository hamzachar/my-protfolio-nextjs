'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { LanguageSwitcher } from '@/components/common/LanguageSwitcher';
import { useScroll } from '@/lib/hooks/useScroll';

interface HeaderClientProps {
  navigation: Array<{
    href: string;
    label: string;
  }>;
}

export function HeaderClient({ navigation }: HeaderClientProps) {
  const { scrollY, scrollDirection } = useScroll();

  // Derive state from scroll values instead of using effects
  const isScrolled = scrollY > 50;
  const isVisible = scrollDirection === 'up' || scrollY < 100;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? 'bg-background/80 backdrop-blur-lg shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <Container>
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <a href="#home" className="text-xl font-bold gradient-text">
                HC
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <Navigation items={navigation} />
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher />
                <div className="md:hidden">
                  <MobileMenu items={navigation} />
                </div>
              </div>
            </div>
          </Container>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
