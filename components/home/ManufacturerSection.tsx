import React from "react";

export const ManufacturerSection = () => {
  const categories = [
    { title: "Tier-1 Solar Panels", items: ["Mono PERC", "TOPCon Bifacial", "DCR Compliant Modules"] },
    { title: "Grid-Tie & Hybrid Inverters", items: ["Single Phase String", "Three Phase Industrial", "Micro-Inverters"] },
    { title: "Energy Storage Systems", items: ["Lithium Iron Phosphate (LFP)", "Tubular Solar Batteries"] },
    { title: "EV Infrastructure", items: ["AC Fast Chargers", "DC Fast Commercial Units"] },
  ];

  return (
    <section className="py-14 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-amber-400">Compatible Technology & Components</h2>
          <p className="text-sm text-slate-400 mt-2">Compatible with leading Tier-1 equipment standards for maximum efficiency.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/80">
              <h3 className="font-semibold text-slate-200 mb-3 text-base">{cat.title}</h3>
              <ul className="space-y-2 text-xs text-slate-400">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
