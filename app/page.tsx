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
  const publicPortals = [
    { title: 'Customer Portal', desc: 'Solar status tracking, billing, generation & subsidy status', link: '/customer', badge: 'Client Access', color: 'border-amber-500/40 text-amber-400 bg-amber-500/10' },
    { title: 'Partner & EPC Portal', desc: 'Channel partner onboarding, project assignments & commissions', link: '/partner', badge: 'EPC Channel', color: 'border-sky-500/40 text-sky-400 bg-sky-500/10' },
    { title: 'Solar Calculator', desc: 'Instant rooftop sizing, annual units savings & subsidy estimations', link: '/calculator', badge: 'Live Tool', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' },
    { title: 'Product Catalogue', desc: '12 Tier-1 brands, ALMM/BIS certifications & datasheets', link: '/catalogue', badge: '12 Categories', color: 'border-purple-500/40 text-purple-400 bg-purple-500/10' },
    { title: 'Book Site Survey', desc: 'On-site engineering assessment, DGVCL feasibility inspection', link: '/contact', badge: 'Direct Request', color: 'border-cyan-500/40 text-cyan-400 bg-cyan-500/10' },
    { title: 'Careers & Hiring', desc: 'Apply for solar EPC sales, field technicians and engineering roles', link: '/careers', badge: 'Careers', color: 'border-teal-500/40 text-teal-400 bg-teal-500/10' },
  ];

  const adminModules = [
    { title: 'CRM & Live Leads', desc: 'Lead qualification, subsidy application queue & customer calls', link: '/dashboard/communication', badge: 'CRM Module', color: 'border-rose-500/40 text-rose-400 bg-rose-500/10' },
    { title: 'Employees & HRMS', desc: 'Internal engineering staff, field attendance and payroll records', link: '/dashboard/hrms', badge: 'HRMS Module', color: 'border-blue-500/40 text-blue-400 bg-blue-500/10' },
    { title: 'Field Agents & Partners', desc: 'Commission calculations, VLE channel networks & KYC approvals', link: '/dashboard/agent', badge: 'Partner Ops', color: 'border-indigo-500/40 text-indigo-400 bg-indigo-500/10' },
    { title: 'BI & Financial Reports', desc: 'Generation audits, revenue projections & subsidy disbursement KPIs', link: '/dashboard/reports', badge: 'Analytics', color: 'border-amber-500/40 text-amber-400 bg-amber-500/10' },
    { title: 'Catalogue & Inventory Admin', desc: 'Manage hardware specs, warranty durations & Tier-1 datasheets', link: '/dashboard/catalogue', badge: 'Inventory Ops', color: 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' },
    { title: 'Marketing & FAQs Manager', desc: 'Control website content, services list, FAQs and banners', link: '/dashboard/marketing', badge: 'CMS Admin', color: 'border-fuchsia-500/40 text-fuchsia-400 bg-fuchsia-500/10' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur border-b border-slate-800 px-4 md:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/trividha_logo.png"
              alt="Trividha Solar"
              width={52}
              height={52}
              priority
              className="rounded object-contain"
            />
          </Link>
        </div>

        <nav className="flex items-center gap-2 md:gap-3 flex-wrap justify-end">
          <Link
            href="/calculator"
            className="px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition"
          >
            Solar Calculator
          </Link>
          <Link
            href="/catalogue"
            className="px-3 py-1.5 text-xs font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition"
          >
            Catalogue
          </Link>
          <Link
            href="/customer"
            className="px-3 py-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition"
          >
            Customer Portal
          </Link>
          <Link
            href="/partner"
            className="px-3 py-1.5 text-xs font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 rounded-lg hover:bg-sky-500/20 transition"
          >
            Partner Login
          </Link>
          <Link
            href="/dashboard"
            className="px-3.5 py-1.5 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition"
          >
            Console
          </Link>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section className="py-16 md:py-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
          Enterprise Clean Energy & EPC Platform • Gujarat
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Powering Gujarat with Sustainable Clean Energy
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-8">
          End-to-end solar engineering, PM Surya Ghar rooftop subsidies, institutional C&I EPC plants, and comprehensive asset maintenance.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Link
            href="/calculator"
            className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-lg"
          >
            Calculate Savings & Subsidy →
          </Link>
          <Link
            href="/customer"
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-lg"
          >
            Customer Access & Status →
          </Link>
          <Link
            href="/partner"
            className="px-5 py-2.5 rounded-lg border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 font-bold text-xs transition"
          >
            Partner / EPC Channel Login →
          </Link>
        </div>
      </section>

      {/* 3. Consumer & Partner Portals Directory */}
      <section className="py-10 px-6 max-w-7xl mx-auto w-full border-t border-slate-900">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Portals & Tools
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-2">Consumer & Partner Portals</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {publicPortals.map((m, idx) => (
            <Link
              key={idx}
              href={m.link}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 hover:bg-slate-850 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-slate-500">PORTAL 0{idx + 1}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${m.color}`}>
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition">{m.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-amber-500 flex items-center justify-between">
                <span>Access Portal</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4. Enterprise Operations Console Directory */}
      <section className="py-10 px-6 max-w-7xl mx-auto w-full border-t border-slate-900">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-rose-500 bg-rose-500/10 px-3 py-1 rounded-full border border-rose-500/20">
            Enterprise Operations
          </span>
          <h2 className="text-2xl font-extrabold text-white mt-2">System Console, CRM & HRMS Modules</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {adminModules.map((m, idx) => (
            <Link
              key={idx}
              href={m.link}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:bg-slate-850 transition flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-slate-500">ENTERPRISE 0{idx + 1}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${m.color}`}>
                    {m.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-rose-400 transition">{m.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs font-semibold text-rose-400 flex items-center justify-between">
                <span>Open System Module</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Business, Trust, and Ecosystem Sections */}
      <TrustSection />
      <ServicesSection />
      <VisualAssetGallery />
      <ManufacturerSection />
      <div id="schemes">
        <GovtSchemesSection />
      </div>
      <FaqSection />
      <div id="downloads">
        <DownloadCenter />
      </div>

      <MarketingCta />

      {/* 6. Footer Navigation */}
      <footer className="mt-auto py-10 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500 px-6">
        <p>© {new Date().getFullYear()} Trividha Solar. All rights reserved. Clean Energy Systems & Engineering.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-3 text-xs text-slate-400">
          <Link href="/customer" className="hover:text-amber-400 transition">Customer Portal</Link>
          <span>•</span>
          <Link href="/partner" className="hover:text-sky-400 transition">Partner Portal</Link>
          <span>•</span>
          <Link href="/dashboard/communication" className="hover:text-rose-400 transition">CRM & Leads</Link>
          <span>•</span>
          <Link href="/dashboard/hrms" className="hover:text-blue-400 transition">Employees & HRMS</Link>
          <span>•</span>
          <Link href="/dashboard/agent" className="hover:text-indigo-400 transition">Field Agents</Link>
          <span>•</span>
          <Link href="/dashboard/reports" className="hover:text-amber-400 transition">Reports</Link>
          <span>•</span>
          <Link href="/dashboard" className="hover:text-amber-400 transition">Console</Link>
          <span>•</span>
          <Link href="/auth/login" className="hover:text-slate-300 transition">Staff Login</Link>
        </div>
      </footer>
    </main>
  );
}
