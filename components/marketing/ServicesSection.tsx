import React from 'react';
import { SOLAR_SERVICES } from '@/lib/marketing/business-data';

export const ServicesSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-900">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-500 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Clean Energy Engineering
        </span>
        <h2 className="text-3xl font-extrabold text-white mt-3">Turnkey Solar EPC & Engineering Services</h2>
        <p className="text-sm text-slate-400 mt-2">
          From residential rooftops to MW-scale industrial plants, we deliver end-to-end solar solutions across Gujarat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SOLAR_SERVICES.map((s) => (
          <div key={s.id} className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">{s.category}</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">{s.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{s.description}</p>
              
              <ul className="space-y-1.5 border-t border-slate-800 pt-3">
                {s.features.map((f, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="text-amber-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
