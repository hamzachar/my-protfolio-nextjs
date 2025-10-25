'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { cn } from '@/lib/utils';

export function Navbar() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#contact', label: t('contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-lg border-b border-border'
          : 'bg-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#home"
            className="text-xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            HC
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageSwitcher />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border"
          >
            <Container>
              <div className="py-4 space-y-2">
                {navItems.map(item => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block py-3 px-4 text-sm font-medium hover:text-primary hover:bg-muted rounded-lg transition-all"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
