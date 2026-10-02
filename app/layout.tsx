import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "Trividha Synergy | Rooftop Solar EPC & PM Surya Ghar Subsidy Gujarat",
    template: "%s | Trividha Solar",
  },
  description: "Official authorized rooftop solar EPC in South Gujarat (Surat, Tapi, Vyara, Navsari, Valsad). PM Surya Ghar Muft Bijli Yojana installation, subsidy guidance & commercial plants.",
  keywords: [
    "Solar Rooftop Gujarat",
    "PM Surya Ghar Muft Bijli Yojana",
    "Trividha Synergy Solar",
    "Solar Panel Installation Surat",
    "Solar Inverter Tapi Vyara",
    "DGVCL Solar Subsidy",
    "Industrial Solar Gujarat"
  ],
  authors: [{ name: "Trividha Synergy LLP" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://trividhasolar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Trividha Synergy - Leading Rooftop Solar EPC Gujarat",
    description: "Avail up to ₹78,000 subsidy under PM Surya Ghar Yojana. Trusted residential, commercial and industrial solar installations in South Gujarat.",
    url: "https://trividhasolar.com",
    siteName: "Trividha Synergy LLP",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trividha Synergy Solar Gujarat",
    description: "Empowering homes and businesses with clean solar energy & direct government subsidy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
