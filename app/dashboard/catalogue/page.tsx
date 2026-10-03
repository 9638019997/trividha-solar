import React from 'react';
import Link from 'next/link';
import { INITIAL_MANUFACTURERS, INITIAL_PRODUCTS } from '@/lib/catalogue/data';

export default function AdminCatalogueManager() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">Catalogue & Manufacturer Management</h1>
          <p className="text-xs text-amber-500 font-medium">Configure brands, specifications, datasheets and inventory links</p>
        </div>
        <Link
          href="/dashboard"
          className="px-3.5 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
        >
          Back to Dashboard
        </Link>
      </header>

      <section className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Configured Brands</h2>
            <button className="px-2.5 py-1 text-[11px] bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400">
              + Add Brand
            </button>
          </div>
          <div className="space-y-2">
            {INITIAL_MANUFACTURERS.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-2.5 rounded bg-slate-800/50 border border-slate-800 text-xs">
                <span className="font-medium text-slate-200">{m.name}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Product Models & Equipment</h2>
            <button className="px-2.5 py-1 text-[11px] bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400">
              + Add Product
            </button>
          </div>
          <div className="space-y-3">
            {INITIAL_PRODUCTS.map((p) => (
              <div key={p.id} className="p-3 rounded bg-slate-800/50 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{p.model}</span>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{p.brand} • {p.capacity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-[11px] text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded">
                    Edit Specs
                  </button>
                  <button className="text-[11px] text-amber-500 hover:text-amber-400 px-2 py-1 bg-amber-500/10 rounded border border-amber-500/20">
                    Datasheet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
