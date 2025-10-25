import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hamza CHARAFI - Senior Front-End Developer',
  description:
    'Portfolio of Hamza CHARAFI, Senior Front-End Developer specializing in React.js, Next.js, and TypeScript',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
