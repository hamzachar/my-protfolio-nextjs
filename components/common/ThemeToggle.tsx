'use client';

import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check for saved theme preference or default to light
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as
        | 'light'
        | 'dark'
        | null;
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      return savedTheme || (prefersDark ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    // Apply theme class to document element
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="rounded-lg p-2 hover:bg-muted transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FiMoon className="w-5 h-5" />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </motion.button>
  );
}
