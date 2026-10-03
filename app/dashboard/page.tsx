import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DashboardHome() {
  const modules = [
    { title: "System Branding", desc: "Corporate identity, themes, and white-labeling.", href: "/dashboard/system/branding", badge: "Live" },
    { title: "AI Energy Advisor", desc: "Solar recommendation and load-optimization engine.", href: "/api/ai/advisor", badge: "API Ready" },
    { title: "Smart OCR Processing", desc: "Automated DISCOM bill & tariff extraction pipeline.", href: "/api/automation/ocr", badge: "Active" },
    { title: "Solar Radiation Sync", desc: "NASA POWER & MNRE insolation data sync.", href: "/api/automation/sync", badge: "Active" },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/trividha_logo.png"
            alt="Trividha Solar"
            width={44}
            height={44}
            className="rounded object-contain"
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">TRIVIDHA ENTERPRISE CONSOLE</h1>
            <p className="text-xs text-amber-500 font-medium">Operations & Automation Control Center</p>
          </div>
        </div>
        <Link
          href="/"
          className="px-3.5 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
        >
          Back to Website
        </Link>
      </header>

      <section className="max-w-6xl mx-auto mt-10">
        <h2 className="text-lg font-semibold text-slate-200 mb-6">Available Modules & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, idx) => (
            <Link
              key={idx}
              href={m.href}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition block flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-slate-100 text-base">{m.title}</h3>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {m.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
              </div>
              <div className="mt-6 text-xs text-amber-500 font-medium flex items-center gap-1">
                Open Console →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
