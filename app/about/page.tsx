import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Trividha Solar',
  description: 'Learn about Trividha Solar, our mission, engineering values, India-wide presence and commitment to sustainable solar EPC execution.',
  openGraph: {
    title: 'About Trividha Solar',
    description: 'A premium solar EPC partner delivering reliable energy systems nationwide.',
    url: 'https://trividhasolar.in/about',
    type: 'website',
  },
};

const values = [
  'Engineering-first decision making',
  'Transparency and long-term trust',
  'Quality above shortcuts',
  'Safety-led execution',
  'Customer-first post-installation support',
];

const reasons = [
  'Engineering Excellence',
  'Premium Components',
  'Certified Installation',
  'Government Scheme Guidance',
  'Warranty Support',
  'After Sales Service',
];

const timeline = [
  { year: '2020', title: 'Foundation', text: 'Trividha Solar began as a focused energy solutions partner for rooftop and commercial projects.' },
  { year: '2021', title: 'Scaling', text: 'Expanded project coverage into industrial and agriculture-focused solar deployment.' },
  { year: '2023', title: 'PAN India Reach', text: 'Strengthened EPC delivery capability and customer support across multiple regions.' },
  { year: '2026', title: 'Trusted Execution', text: 'Continues to build premium solar infrastructure with a strong focus on quality and long-term impact.' },
];

const process = [
  'Site feasibility and load assessment',
  'System design and engineering approval',
  'Premium component selection and procurement',
  'Installation, testing and commissioning',
  'Performance monitoring and after-sales support',
];

const standards = [
  'IEC-compliant engineering practices',
  'Quality documentation at every project stage',
  'Rigorous safety checks for execution teams',
  'Performance monitoring and commissioning validation',
];

const team = [
  { name: 'Amit Shah', role: 'Project Director' },
  { name: 'Nisha Patel', role: 'Design & Engineering Lead' },
  { name: 'Rohan Mehta', role: 'Operations Manager' },
  { name: 'Sonal Verma', role: 'Customer Success Lead' },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-600">About us</p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-slate-900 md:text-5xl">Powering India with reliable, future-ready solar systems</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Trividha Solar is a PAN India solar EPC company committed to delivering premium engineering, dependable project execution and practical energy solutions for homes, businesses and industrial operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/services" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
                Explore services
              </Link>
              <Link href="/contact" className="inline-flex items-center rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100">
                Speak with us
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-100 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1497440001374-f269973280c1?auto=format&fit=crop&w=1200&q=80"
              alt="Solar engineers reviewing a site"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Mission</p>
            <h2 className="mt-4 text-2xl font-black text-slate-900">Deliver clean, dependable energy for every scale of project.</h2>
            <p className="mt-4 text-slate-600 leading-7">To make solar adoption simple, credible and beneficial for Indian homes, businesses and industrial stakeholders.</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Vision</p>
            <h2 className="mt-4 text-2xl font-black text-slate-900">Shape a more resilient and sustainable energy future.</h2>
            <p className="mt-4 text-slate-600 leading-7">To be a trusted solar partner driving the transition to smarter, greener and more efficient power.</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Core values</p>
            <ul className="mt-4 space-y-3 text-slate-600">
              {values.map((value) => (
                <li key={value} className="flex gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">✓</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">Why Trividha</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Why customers choose Trividha Solar</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700">✦</div>
                <p className="text-lg font-semibold text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Timeline</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">A steady, trust-building growth journey</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-[26px] border border-slate-200 bg-white p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-600">{item.year}</div>
              <h3 className="mt-4 text-xl font-black text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Our process</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Clear, disciplined execution from concept to commissioning</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {process.map((step, index) => (
              <div key={step} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{index + 1}</div>
                <p className="mt-4 text-base font-semibold text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Our team</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Leadership and delivery specialists</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {team.map((member) => (
                <div key={member.name} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="h-40 rounded-[18px] bg-gradient-to-br from-amber-100 via-slate-100 to-slate-200" />
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Quality & Safety</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900">Standards we enforce at every site</h2>
              <ul className="mt-6 space-y-4">
                {standards.map((standard) => (
                  <li key={standard} className="flex gap-3 text-slate-700">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700">✓</span>
                    <span>{standard}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Technology</p>
              <h3 className="mt-4 text-2xl font-black">Smart system design with monitored performance</h3>
              <p className="mt-4 text-slate-300 leading-7">We combine site-specific engineering, solar analytics and practical operating insight to maximise output and long-term reliability.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">PAN India</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">A growing reach backed by trusted project execution</h2>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8">
            <div className="grid gap-6 md:grid-cols-4">
              <div className="rounded-[20px] border border-slate-200 bg-white p-5">
                <div className="text-xl font-black text-slate-900">North</div>
                <p className="mt-2 text-slate-600">Delhi, Punjab, Rajasthan</p>
              </div>
              <div className="rounded-[20px] border border-slate-200 bg-white p-5">
                <div className="text-xl font-black text-slate-900">West</div>
                <p className="mt-2 text-slate-600">Gujarat, Maharashtra</p>
              </div>
              <div className="rounded-[20px] border border-slate-200 bg-white p-5">
                <div className="text-xl font-black text-slate-900">South</div>
                <p className="mt-2 text-slate-600">Tamil Nadu, Karnataka</p>
              </div>
              <div className="rounded-[20px] border border-slate-200 bg-white p-5">
                <div className="text-xl font-black text-slate-900">East</div>
                <p className="mt-2 text-slate-600">Bihar, Odisha, West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 md:px-6">
        <div className="rounded-[32px] border border-slate-200 bg-slate-900 p-8 text-white md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Customer commitment</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">We believe clean energy should be reliable, transparent and built to last.</h2>
          <p className="mt-4 max-w-2xl text-slate-300 leading-7">Our relationship does not end at commissioning — we stay engaged with warranties, service clarity and performance optimisation for the long term.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-400">
              Book a consultation
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800">
              See our solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
