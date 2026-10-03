import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { VisualAssetGallery } from '@/components/home/VisualAssetGallery';
import { ManufacturerSection } from '@/components/home/ManufacturerSection';
import { GovtSchemesSection } from '@/components/home/GovtSchemesSection';
import { TrustSection } from '@/components/home/TrustSection';
import { DownloadCenter } from '@/components/home/DownloadCenter';
import { ServicesSection } from '@/components/marketing/ServicesSection';
import { FaqSection } from '@/components/marketing/FaqSection';
import { MarketingCta } from '@/components/marketing/MarketingCta';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative">
      {/* Complete Enterprise Navigation Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/trividha_logo.png"
              alt="Trividha Solar"
              width={54}
              height={54}
              priority
              className="rounded object-contain"
            />
          </Link>
        </div>

        <nav className="flex items-center gap-3 md:gap-4">
          <Link
            href="/catalogue"
            className="text-xs font-semibold text-slate-300 hover:text-white transition hidden md:inline-block"
          >
            Product Catalogue
          </Link>

          {/* Customer Portal Link */}
          <Link
            href="/customer"
            className="px-3.5 py-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition"
          >
            Customer Portal
          </Link>

          {/* Partner Portal Link */}
          <Link
            href="/partner"
            className="px-3.5 py-1.5 text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 rounded-lg hover:bg-sky-500/20 transition"
          >
            Partner Login
          </Link>

          {/* System Console */}
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition"
          >
            Console
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
          Premium Solar Engineering & Clean Energy Platform
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Powering Gujarat with Sustainable Clean Energy
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Leading renewable integration, rooftop subsidies, institutional EPC installations, and continuous solar asset management.
        </p>

        {/* Quick Portal Action Buttons in Hero */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <Link
            href="/customer"
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md"
          >
            Customer Access & Tracking →
          </Link>
          <Link
            href="/partner"
            className="px-6 py-3 rounded-lg border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 font-bold text-xs transition"
          >
            Partner / EPC Channel Login →
          </Link>
          <Link
            href="/catalogue"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs transition"
          >
            Explore Catalogue
          </Link>
        </div>
      </section>

      {/* Business, Trust, and Showcase Modules */}
      <TrustSection />
      <ServicesSection />
      <VisualAssetGallery />
      <ManufacturerSection />
      <GovtSchemesSection />
      <FaqSection />
      
      <div id="downloads">
        <DownloadCenter />
      </div>

      <MarketingCta />

      <footer className="mt-auto py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Trividha Solar. All rights reserved. Clean Energy Systems & Engineering.</p>
        <div className="flex justify-center gap-4 mt-2 text-[11px] text-slate-400">
          <Link href="/customer" className="hover:underline text-amber-400">Customer Portal</Link>
          <span>•</span>
          <Link href="/partner" className="hover:underline text-sky-400">Partner Portal</Link>
          <span>•</span>
          <Link href="/dashboard" className="hover:underline">Admin Console</Link>
          <span>•</span>
          <Link href="/auth/login" className="hover:underline">Staff Login</Link>
        </div>
      </footer>
    </main>
  );
}
