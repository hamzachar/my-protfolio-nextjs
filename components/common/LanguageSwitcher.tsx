'use client';

import { useParams, usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiGlobe } from 'react-icons/fi';

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = params.locale as string;

  const toggleLocale = currentLocale === 'en' ? 'fr' : 'en';
  const newPath = pathname.replace(`/${currentLocale}`, `/${toggleLocale}`);

  const handleLanguageChange = () => {
    // Scroll to top before changing language
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Small delay to let scroll finish
    setTimeout(() => {
      router.push(newPath);
    }, 300);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleLanguageChange}
      className="flex items-center gap-2 rounded-lg p-2 hover:bg-muted transition-colors"
      aria-label="Change language"
    >
      <FiGlobe className="w-5 h-5" />
      <span className="text-sm font-medium uppercase">{toggleLocale}</span>
    </motion.button>
  );
}
