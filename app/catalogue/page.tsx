import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INITIAL_PRODUCTS } from '@/lib/catalogue/data';

export default function ProductCataloguePage() {
  const categories = [
    'Solar Panels', 'Inverters', 'Batteries', 'Solar Structures',
    'ACDB/DCDB', 'Cables', 'Earthing', 'Lightning Arresters',
    'Net Meter Accessories', 'Solar Water Pumps', 'EV Chargers', 'BOS (Balance of System)'
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="max-w-7xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/trividha_logo.png"
            alt="Trividha Solar"
            width={48}
            height={48}
            className="rounded object-contain"
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">TRIVIDHA SOLAR</h1>
            <p className="text-xs text-amber-500 font-medium">Enterprise Product Catalogue & Components</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3 py-1.5 text-xs font-medium rounded border border-slate-700 hover:bg-slate-800 text-slate-300 transition"
          >
            Website
          </Link>
          <Link
            href="/dashboard/catalogue"
            className="px-3.5 py-1.5 text-xs font-semibold rounded bg-amber-500 hover:bg-amber-400 text-slate-950 transition"
          >
            Admin Manager
          </Link>
        </div>
      </header>

      <section className="max-w-7xl mx-auto mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-white">Clean Energy Equipment & Components</h2>
          <p className="text-sm text-slate-400 mt-1">
            Engineered systems, ALMM approved modules, BIS certified inverters, and BOS accessories.
          </p>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-4">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300 whitespace-nowrap hover:border-amber-500/40 cursor-pointer transition"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {INITIAL_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {prod.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{prod.brand}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{prod.model}</h3>
                <p className="text-xs text-amber-500 font-semibold mb-4">Capacity: {prod.capacity}</p>

                <div className="space-y-1.5 py-3 border-t border-slate-800 text-xs text-slate-300">
                  {Object.entries(prod.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-500">{key}:</span>
                      <span className="font-medium text-slate-200">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Warranty: {prod.warranty}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {prod.certifications.map((cert, cIdx) => (
                      <span key={cIdx} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-amber-500 font-medium cursor-pointer hover:underline">
                  View Technical Datasheet →
                </span>
                <span className="text-slate-500 text-[10px]">Tier-1 Specs</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <p>
          All trademarks, logos, brand names and product names are the property of their respective owners and are used only for identification and informational purposes.
        </p>
      </footer>
    </main>
  );
}
