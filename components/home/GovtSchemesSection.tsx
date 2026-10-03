import React from "react";

export const GovtSchemesSection = () => {
  const initiatives = [
    { name: "PM Surya Ghar: Muft Bijli Yojana", desc: "Subsidies up to ₹78,000 for residential rooftop solar systems across India." },
    { name: "MNRE Guidelines", desc: "Compliance with Ministry of New and Renewable Energy technical standards and safety." },
    { name: "GEDA Gujarat Directives", desc: "State-level grid-connectivity, net metering facilitation, and DISCOM coordination." },
    { name: "MSME & Make in India", desc: "Supporting indigenous manufacturing standards and sustainable clean tech development." }
  ];

  return (
    <section className="py-14 bg-slate-950 border-t border-slate-800 text-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Policy & Subsidies</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 text-white">Government Schemes & Solar Awareness</h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto mt-2">
            * Informational resource. Trividha Solar facilitates end-to-end liaisoning and portal registration under applicable government solar schemes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {initiatives.map((scheme, i) => (
            <div key={i} className="p-5 rounded-lg bg-slate-900 border border-slate-800">
              <h4 className="font-bold text-amber-400 text-sm mb-2">{scheme.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{scheme.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
