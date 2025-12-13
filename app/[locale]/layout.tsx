import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { routing } from '@/i18n/routing';
import { PERSONAL_INFO } from '@/constants/data';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

// Generate static params for all supported locales
// This enables static generation at build time
export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

// Dynamic metadata generation with i18n support
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'hero' });

  const title = `${PERSONAL_INFO.name} - ${t('title')}`;
  const description = t('description');

  return {
    title,
    description,
    keywords: [
      PERSONAL_INFO.name,
      'Front-End Developer',
      'React Developer',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Portfolio',
      'Web Development',
    ],
    authors: [{ name: PERSONAL_INFO.name }],
    creator: PERSONAL_INFO.name,
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    ),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        fr: '/fr',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale,
      alternateLocale: locale === 'en' ? 'fr' : 'en',
      siteName: `${PERSONAL_INFO.name} Portfolio`,
      images: [
        {
          url: '/images/profile/profile-picture.png',
          width: 1200,
          height: 630,
          alt: PERSONAL_INFO.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/profile/profile-picture.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Fetch messages for the current locale
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <ScrollProgress />
            <main suppressHydrationWarning>{children}</main>
            <Footer />
            <ScrollToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
