import React from "react";

export const VisualAssetGallery = () => {
  const categories = [
    {
      title: "Residential Solar",
      desc: "Grid-tied rooftop solar systems optimized for zero-electricity bills with PM Surya Ghar subsidy support.",
      badge: "Residential",
    },
    {
      title: "Commercial & Institutional",
      desc: "High-yield distributed solar power plants for schools, colleges, hospitals, and office complexes.",
      badge: "Commercial",
    },
    {
      title: "Industrial Solar Solutions",
      desc: "Megawatt-scale rooftop and ground-mounted captive installations for factories and cold storage.",
      badge: "Industrial",
    },
    {
      title: "Solar Water Pumps (KUSUM)",
      desc: "Robust DC and AC solar pumping solutions for uninterrupted agricultural irrigation.",
      badge: "Agriculture",
    },
  ];

  return (
    <section className="py-14 bg-slate-900 border-t border-slate-800 text-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">Turnkey EPC Solutions</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 text-white">Visual Identity & Project Portfolio</h2>
          <p className="text-xs text-slate-400 max-w-xl mx-auto mt-2">
            Engineering excellence delivered across domestic, enterprise, and agricultural clean-energy domains.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition">
              <div className="h-40 bg-gradient-to-br from-amber-600/20 via-slate-800 to-slate-900 flex items-center justify-center p-4 border-b border-slate-700/60">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {cat.badge}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-slate-100 mb-2">{cat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
