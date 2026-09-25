"use client";

import Link from 'next/link';
import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  ChevronDown,
  Factory,
  IndianRupee,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  SunMedium,
  Tractor,
  Zap,
} from 'lucide-react';

const navItems = [
  { label: 'Solutions', href: '#solutions', hasDropdown: true },
  { label: 'Why Us', href: '#why-us' },
  { label: 'PM Surya Ghar', href: '#calculator' },
  { label: 'Customer Login', href: '/dashboard/customer' },
];

const solutions = [
  {
    title: 'Residential Rooftop',
    icon: SunMedium,
    description: 'Smart rooftop systems for homes, apartments and villas with subsidy-ready design and hassle-free commissioning.',
  },
  {
    title: 'Commercial Solar',
    icon: Building2,
    description: 'Reduce turnover costs for offices, malls, warehouses and retail campuses with scalable solar power projects.',
  },
  {
    title: 'Industrial EPC',
    icon: Factory,
    description: 'Large-scale engineering, procurement and construction for manufacturing plants, logistics hubs and utility assets.',
  },
  {
    title: 'Agricultural Solar Pumps',
    icon: Tractor,
    description: 'Reliable irrigation support with sustainable pumping systems that improve farm productivity and reduce diesel dependence.',
  },
];

const stats = [
  { value: '5000+', label: 'Sites engineered' },
  { value: '35%', label: 'Average bill reduction' },
  { value: '18 states', label: 'PAN-India delivery' },
  { value: '24/7', label: 'Support coverage' },
];

const partnerBenefits = [
  'Attractive dealer and channel partner margins',
  'Dedicated lead support and sales enablement',
  'Multi-state project execution and site inspection support',
  'Fast documentation and subsidy guidance assistance',
];

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  Solutions: [
    { label: 'Residential', href: '/services/residential' },
    { label: 'Commercial', href: '/services/commercial' },
    { label: 'Industrial', href: '/services/industrial' },
    { label: 'On-Grid', href: '/services/on-grid' },
    { label: 'Off-Grid', href: '/services/off-grid' },
    { label: 'Hybrid', href: '/services/hybrid' },
  ],
};

export default function HomePage() {
  const [monthlyBill, setMonthlyBill] = useState(4500);

  const estimate = useMemo(() => {
    const safeBill = Math.max(1000, Math.min(25000, monthlyBill));
    const systemSize = 1.5 + (safeBill / 2500) * 1.6;
    const subsidy = Math.min(78000, 60000 + Math.max(0, systemSize - 2) * 18000);
    const annualSavings = Math.round(systemSize * 1600 * 6.5);
    const projectCost = Math.round(systemSize * 52000);
    const netCost = Math.max(projectCost - subsidy, 0);

    return {
      systemSize: Number(systemSize.toFixed(1)),
      subsidy: Number(subsidy.toFixed(0)),
      annualSavings,
      projectCost,
      netCost,
    };
  }, [monthlyBill]);

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="border-b border-slate-200 bg-slate-900 text-sm text-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4 text-amber-400" /> +91 96380 19997</span>
            <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-amber-400" /> hello@trividhasolar.in</span>
            <span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-amber-400" /> WhatsApp</span>
          </div>
          <div className="inline-flex items-center gap-2 text-amber-300">
            <MapPin className="h-4 w-4" /> PAN-India Solar EPC Partner Network
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-emerald-500 text-lg font-black text-slate-900 shadow-lg shadow-amber-200">
              T
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-slate-900">Trividha Solar</div>
              <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500">Division of Trividha Synergy LLP</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 text-sm font-medium text-slate-700 lg:flex">
            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 transition hover:bg-slate-100">
                Solutions <ChevronDown className="h-4 w-4 text-slate-500" />
              </button>
              <div className="invisible absolute left-0 top-full mt-3 min-w-[220px] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {solutions.map((item) => (
                  <Link key={item.title} href="#solutions" className="block rounded-xl px-3 py-2 text-left text-slate-700 transition hover:bg-slate-100 hover:text-slate-900">
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            {navItems.filter((item) => item.label !== 'Solutions').map((item) => (
              <Link key={item.label} href={item.href} className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/dashboard/partner" className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-amber-400 hover:text-slate-900 sm:inline-flex">
              Partner Portal
            </Link>
            <Link href="#calculator" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
              Book Free Site Survey <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-amber-100 via-white to-emerald-100 opacity-70" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div className="space-y-8 pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              <Zap className="h-4 w-4" /> Smart solar for every scale
            </div>

            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
                Premium solar EPC for homes, businesses and industries.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                From rooftop systems to industrial execution, we design and deliver clean energy solutions across India with premium engineering, transparent advisory, and PM Surya Ghar support.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="#calculator" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-amber-400">
                Book Free Site Survey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-amber-200/60 blur-3xl" />
            <div className="absolute -right-6 bottom-6 h-48 w-48 rounded-full bg-emerald-200/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Site estimate</div>
                    <h2 className="mt-2 text-2xl font-extrabold text-slate-900">Solar potential</h2>
                  </div>
                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">PM Surya Ghar</div>
                </div>

                <div className="mt-6 rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <span className="text-sm text-slate-500">Monthly bill</span>
                    <span className="text-xl font-bold text-slate-900">₹{monthlyBill.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Recommended system</span>
                      <span className="font-semibold text-slate-900">{estimate.systemSize} kW</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Subsidy</span>
                      <span className="font-semibold text-emerald-700">₹{estimate.subsidy.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <span>Annual savings</span>
                      <span className="font-semibold text-amber-700">₹{estimate.annualSavings.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[22px] border border-slate-200 bg-slate-900 p-4 text-white">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">Rooftop view</div>
                      <div className="mt-1 text-lg font-bold">Residential estimate</div>
                    </div>
                    <div className="rounded-full bg-amber-400 px-2 py-1 text-[11px] font-bold text-slate-900">Solar ready</div>
                  </div>

                  <div className="relative h-40 overflow-hidden rounded-[18px] border border-slate-700 bg-[linear-gradient(180deg,#e2e8f0_0%,#f8fafc_100%)]">
                    <div className="absolute left-4 right-4 top-3 h-16 rounded-[14px] bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700" />
                    <div className="absolute inset-x-4 bottom-6 h-20 rounded-[18px] border border-slate-200 bg-slate-100" />
                    <div className="absolute inset-x-8 bottom-8 grid grid-cols-4 gap-2">
                      {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="h-10 rounded-md border border-emerald-300 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-600" />
                      ))}
                    </div>
                    <div className="absolute left-1/2 top-3 h-10 w-10 -translate-x-1/2 rounded-full bg-amber-300 shadow-[0_0_25px_rgba(252,211,77,0.9)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">Our solutions</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Made for growth across every energy profile.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div key={solution.title} className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg hover:shadow-amber-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{solution.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>
                <Link href="#calculator" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section id="why-us" className="bg-slate-100 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">Why Trividha</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Execution-led solar support from enquiry to generation.</h2>
            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, text: 'Transparent project planning and engineering standards' },
                { icon: BadgeCheck, text: 'Reliable delivery with skilled EPC and installation teams' },
                { icon: Leaf, text: 'Sustainability-first advice for long-term energy ROI' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <p className="text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-900 p-5 text-white">
                <div className="text-sm text-slate-300">Project pipeline</div>
                <div className="mt-3 text-3xl font-black">₹32 Cr+</div>
                <div className="mt-3 text-sm text-slate-300">Across residential, institutional and commercial deployments.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-amber-50 p-5">
                <div className="text-sm text-slate-600">Energy offset</div>
                <div className="mt-3 text-3xl font-black text-slate-900">68%</div>
                <div className="mt-3 text-sm text-slate-600">Average power cost reduction for solar-ready facilities.</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 md:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Delivery values</span>
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">High quality</span>
                </div>
                <div className="space-y-4">
                  {['Finance assistance and ROI modeling', 'Electrical and structural compliance reviews', 'Turnkey execution and after-sales support'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-700">
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calculator" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">PM Surya Ghar</p>
                <h2 className="text-3xl font-black">Subsidy calculator</h2>
              </div>
            </div>

            <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                <span>Monthly electricity bill</span>
                <span className="font-bold text-slate-900">₹{monthlyBill.toLocaleString('en-IN')}</span>
              </div>
              <input
                aria-label="Monthly electricity bill"
                type="range"
                min={1000}
                max={25000}
                step={100}
                value={monthlyBill}
                onChange={(event) => setMonthlyBill(Number(event.target.value))}
                className="mt-5 h-2 w-full cursor-pointer accent-amber-500"
              />
              <div className="mt-3 flex justify-between text-xs font-medium text-slate-500">
                <span>₹1,000</span>
                <span>₹25,000</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm text-slate-500">Recommended size</div>
                <div className="mt-2 text-2xl font-black text-slate-900">{estimate.systemSize} kW</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm text-slate-500">Annual savings</div>
                <div className="mt-2 text-2xl font-black text-slate-900">₹{estimate.annualSavings.toLocaleString('en-IN')}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm text-slate-500">Subsidy</div>
                <div className="mt-2 text-2xl font-black text-emerald-700">₹{estimate.subsidy.toLocaleString('en-IN')}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white shadow-[0_30px_70px_rgba(15,23,42,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">Estimated breakdown</p>
            <h3 className="mt-3 text-3xl font-black">Your subsidy snapshot</h3>
            <div className="mt-8 space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <span className="text-slate-300">Project cost</span>
                <span className="text-lg font-bold">₹{estimate.projectCost.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <span className="text-slate-300">Government subsidy</span>
                <span className="text-lg font-bold text-emerald-400">₹{estimate.subsidy.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <span className="text-slate-300">Net investment</span>
                <span className="text-lg font-bold">₹{estimate.netCost.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-amber-500 p-5 text-slate-900">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.18em]">Insight</span>
                <IndianRupee className="h-5 w-5" />
              </div>
              <p className="mt-2 text-lg font-bold">
                Based on your monthly bill, a {estimate.systemSize} kW rooftop solar setup is a strong fit for the PM Surya Ghar subsidy scheme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">Channel partner program</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900">Build your solar business with Trividha.</h2>
              <div className="mt-8 space-y-4">
                {partnerBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <div className="text-slate-700">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">Commission overview</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-slate-900 p-4 text-white">
                  <div className="text-sm text-slate-300">Residential rooftop</div>
                  <div className="mt-2 text-3xl font-black">Up to 12%</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Commercial & industrial</div>
                  <div className="mt-2 text-3xl font-black text-slate-900">Up to 18%</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">Agricultural pumps</div>
                  <div className="mt-2 text-3xl font-black text-slate-900">Priority support</div>
                </div>
              </div>

              <Link href="/dashboard/partner" className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
                Apply as a partner <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-emerald-500 text-lg font-black text-slate-900">
                  T
                </div>
                <div>
                  <div className="text-lg font-extrabold text-white">Trividha Solar</div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">Division of Trividha Synergy LLP</div>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                PAN-India solar EPC solutions for homes, businesses and agriculture—designed for long-term energy savings, sustainability and trust.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Company</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {footerLinks.Company.map((link) => (
                  <li key={link.label}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Solutions</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                {footerLinks.Solutions.map((link) => (
                  <li key={link.label}><Link href={link.href} className="transition hover:text-white">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-200">Contact</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-400">
                <li className="inline-flex items-center gap-2"><PhoneCall className="h-4 w-4 text-amber-400" /> +91 96380 19997</li>
                <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-amber-400" /> hello@trividhasolar.in</li>
                <li className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-amber-400" /> WhatsApp support</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
            © 2026 Trividha Solar. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
