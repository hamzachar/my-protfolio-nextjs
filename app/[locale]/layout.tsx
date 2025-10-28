import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { routing } from '@/i18n/routing';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hamza CHARAFI - Senior Front-End Developer',
  description:
    'Portfolio of Hamza CHARAFI, Senior Front-End Developer specializing in React.js, Next.js, and TypeScript with 9+ years of experience.',
  keywords: [
    'Hamza CHARAFI',
    'Front-End Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  authors: [{ name: 'Hamza CHARAFI' }],
  openGraph: {
    title: 'Hamza CHARAFI - Senior Front-End Developer',
    description:
      'Portfolio of Hamza CHARAFI, Senior Front-End Developer specializing in React.js, Next.js, and TypeScript',
    type: 'website',
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <ScrollProgress />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
