import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solar Services',
  description: 'Residential, commercial, industrial and agricultural solar solutions by Trividha Solar, including EV charging and solar water pumping.',
  openGraph: {
    title: 'Solar Services | Trividha Solar',
    description: 'Turnkey solar EPC services for homes, businesses, industry and agriculture across India.',
    url: 'https://trividhasolar.in/services',
    type: 'website',
  },
};

const services = [
  {
    name: 'Residential',
    href: '/services/residential',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    description: 'Smart rooftop solar systems designed for homes, villas and apartment communities to lower power bills and improve energy independence.',
  },
  {
    name: 'Commercial',
    href: '/services/commercial',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    description: 'Premium commercial solar infrastructure for offices, retail spaces, malls and industrial premises seeking efficient energy savings.',
  },
  {
    name: 'Industrial',
    href: '/services/industrial',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    description: 'Large-scale turnkey EPC solutions for factories, plants and manufacturing facilities with high-demand power loads.',
  },
  {
    name: 'Agriculture',
    href: '/services/agriculture',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80',
    description: 'Agriculture solar systems that support irrigation, farm operations and improved efficiency without heavy diesel dependence.',
  },
  {
    name: 'Solar Water Pump',
    href: '/services/solar-water-pump',
    image:
      'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80',
    description: 'Reliable solar-powered pumping solutions built for irrigation, rural water delivery and agriculture operations across seasons.',
  },
  {
    name: 'EV Charging',
    href: '/services/ev-charging',
    image:
      'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80',
    description: 'Future-ready EV charging stations designed to integrate with clean solar power and support residential, commercial and fleet use.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">Our Services</p>
              <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Solar energy built around your power needs</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                From rooftop installations to industrial EPC and sustainable utility support, Trividha Solar delivers practical solar systems engineered for performance, trust and long-term savings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
                  Request a site assessment
                </Link>
                <Link href="/about" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
                  Why Trividha
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                alt="Solar installation and energy systems"
                loading="lazy"
                className="h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Service Categories</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Designed for homes, businesses and industry</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
              <div className="overflow-hidden">
                <img src={service.image} alt={service.name} loading="lazy" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Solar Solution</p>
                <h3 className="mt-4 text-2xl font-black text-slate-900">{service.name}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{service.description}</p>
                <Link href={service.href} className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 underline decoration-amber-500 underline-offset-8 hover:text-amber-700">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl font-black text-slate-900">1.2 GW+</div>
              <p className="mt-3 text-slate-600">Projected capacity delivered or supported through EPC planning.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl font-black text-slate-900">3000+</div>
              <p className="mt-3 text-slate-600">Project touchpoints across residential, commercial and industrial sectors.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <div className="text-3xl font-black text-slate-900">PAN India</div>
              <p className="mt-3 text-slate-600">Execution and support coverage across regions with local project coordination.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
