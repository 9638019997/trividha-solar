import React from 'react';
import Link from 'next/link';
import { SOLAR_SERVICES, MARKETING_FAQS } from '@/lib/marketing/business-data';

export default function MarketingAdmin() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">Marketing & Content Management</h1>
          <p className="text-xs text-amber-500 font-medium">Configure services, promotional CTAs, testimonials, and FAQs</p>
        </div>
        <Link
          href="/dashboard"
          className="px-3.5 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
        >
          Back to Dashboard
        </Link>
      </header>

      <section className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Configured Solar Services ({SOLAR_SERVICES.length})</h2>
            <button className="px-2.5 py-1 text-[11px] bg-amber-500 text-slate-950 font-bold rounded">+ Add Service</button>
          </div>
          <div className="space-y-2">
            {SOLAR_SERVICES.map((s) => (
              <div key={s.id} className="p-3 rounded bg-slate-800/50 border border-slate-800 text-xs">
                <span className="font-bold text-white">{s.title}</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{s.category}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Configured FAQs ({MARKETING_FAQS.length})</h2>
            <button className="px-2.5 py-1 text-[11px] bg-amber-500 text-slate-950 font-bold rounded">+ Add FAQ</button>
          </div>
          <div className="space-y-2">
            {MARKETING_FAQS.map((f, i) => (
              <div key={i} className="p-3 rounded bg-slate-800/50 border border-slate-800 text-xs">
                <span className="font-semibold text-amber-400">{f.q}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
