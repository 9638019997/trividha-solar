import React from "react";
import Image from "next/image";
import Link from "next/link";
import { VisualAssetGallery } from "@/components/home/VisualAssetGallery";
import { ManufacturerSection } from "@/components/home/ManufacturerSection";
import { GovtSchemesSection } from "@/components/home/GovtSchemesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { DownloadCenter } from "@/components/home/DownloadCenter";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/trividha_logo.png"
            alt="Trividha Solar"
            width={38}
            height={38}
            className="rounded object-contain"
          />
          <div>
            <span className="text-lg font-bold tracking-tight text-white block leading-tight">TRIVIDHA SOLAR</span>
            <span className="text-[10px] text-amber-500 tracking-wider font-semibold block uppercase">Enterprise Platform</span>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="px-4 py-2 text-xs font-medium bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition"
          >
            Access Dashboard
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
          Premium Solar Engineering & EPC Operations
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Powering Gujarat with Sustainable Clean Energy
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
          Leading renewable integration, rooftop subsidies, institutional EPC installations, and continuous solar asset management.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/dashboard"
            className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm transition"
          >
            Open Enterprise Portal
          </Link>
          <a
            href="#downloads"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-sm transition"
          >
            View Brochures
          </a>
        </div>
      </section>

      {/* Phase 2.2 Functional Blocks */}
      <TrustSection />
      <VisualAssetGallery />
      <ManufacturerSection />
      <GovtSchemesSection />
      
      <div id="downloads">
        <DownloadCenter />
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Trividha Solar. All rights reserved. Clean Energy Systems & Engineering.</p>
      </footer>
    </main>
  );
}
