import React from "react";

export const TrustSection = () => {
  const stats = [
    { label: "Total Capacity Installed", value: "2.5+ MW" },
    { label: "Successful Installations", value: "450+" },
    { label: "CO2 Emissions Reduced", value: "3,200 Tons" },
    { label: "Active Districts Covered", value: "Tapi, Surat & South Gujarat" }
  ];

  return (
    <section className="py-12 bg-slate-900 border-t border-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-lg bg-slate-800/40 border border-slate-700/50">
              <div className="text-2xl md:text-3xl font-extrabold text-amber-400">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
