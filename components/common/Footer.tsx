'use client';

import { useTranslations } from 'next-intl';
import { FiHeart, FiCoffee } from 'react-icons/fi';
import { Container } from '@/components/ui/Container';
import { PERSONAL_INFO } from '@/constants/data';

export function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} {PERSONAL_INFO.name}. {t('rights')}
          </p>
          <p className="flex items-center gap-2">
            {t('madeWith')} <FiHeart className="text-red-500 animate-pulse" />{' '}
            {t('and')} <FiCoffee className="text-primary" />{' '}
          </p>
        </div>
      </Container>
    </footer>
  );
}
