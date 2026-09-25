import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://trividhasolar.in'),
  title: {
    default: 'Trividha Solar',
    template: '%s | Trividha Solar',
  },
  description:
    'PAN-India solar EPC solutions with rooftop solar, commercial systems, industrial project delivery, PM Surya Ghar guidance and partner support.',
  keywords: ['Trividha Solar', 'solar EPC India', 'PM Surya Ghar', 'rooftop solar', 'industrial solar', 'agricultural solar pumps'],
  openGraph: {
    title: 'Trividha Solar | Premium solar EPC solutions across India',
    description: 'Clean energy systems for homes, businesses, industrial facilities and agricultural operations.',
    url: 'https://trividhasolar.in',
    siteName: 'Trividha Solar',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
