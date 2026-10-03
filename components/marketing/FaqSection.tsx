import React from 'react';
import { MARKETING_FAQS } from '@/lib/marketing/business-data';

export const FaqSection = () => {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-900">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <p className="text-xs text-slate-400 mt-1">Everything you need to know about rooftop solar, subsidies, and net metering.</p>
      </div>
      <div className="space-y-4">
        {MARKETING_FAQS.map((faq, idx) => (
          <div key={idx} className="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 className="text-sm font-semibold text-amber-400 mb-2">{faq.q}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
