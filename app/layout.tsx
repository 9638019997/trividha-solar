import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trividhasolar.in'),
  title: {
    default: 'Trividha Solar',
    template: '%s | Trividha Solar',
  },
  description:
    'Enterprise solar platform for Gujarat rooftops, PM Surya Ghar support, project operations and partner enablement.',
  keywords: ['Trividha Solar', 'Gujarat solar', 'PM Surya Ghar', 'solar EPC', 'enterprise portal'],
  openGraph: {
    title: 'Trividha Solar | Install Solar. Invest in Tomorrow.',
    description: 'Premium rooftop solar solutions and enterprise-grade solar operations for Gujarat.',
    url: 'https://trividhasolar.in',
    siteName: 'Trividha Solar',
    images: [{ url: '/assets/logo.svg', width: 640, height: 180, alt: 'Trividha Solar logo' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
