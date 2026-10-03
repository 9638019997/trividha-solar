import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StructuredData } from '@/components/seo/StructuredData';
import { GoogleEcosystem } from '@/components/seo/GoogleEcosystem';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trividhasolar.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Trividha Solar | Rooftop Solar & Renewable EPC Gujarat',
    template: '%s | Trividha Solar',
  },
  description: 'Authorized turnkey solar EPC engineering, PM Surya Ghar Muft Bijli Yojana subsidies, and high-efficiency solar plants in South Gujarat.',
  keywords: ['Trividha Solar', 'PM Surya Ghar', 'Solar Gujarat', 'Tapi Solar Rooftop', 'Solar EPC Surat', 'MNRE Approved Solar'],
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-placeholder',
  },
  openGraph: {
    title: 'Trividha Solar | Rooftop Solar & Clean Energy EPC',
    description: 'Empowering homes and businesses with clean solar energy & direct government subsidies in Gujarat.',
    url: siteUrl,
    siteName: 'Trividha Solar',
    images: [
      {
        url: '/assets/trividha_logo.png',
        width: 800,
        height: 600,
        alt: 'Trividha Solar Official Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trividha Solar | Clean Energy Gujarat',
    description: 'Turnkey solar solutions, PM Surya Ghar subsidies, and enterprise solar power plants.',
    images: ['/assets/trividha_logo.png'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-slate-950 text-slate-100 min-h-screen antialiased`}>
        <GoogleEcosystem />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
