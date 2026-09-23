import Link from 'next/link';

const stats = [
  { label: 'Projects commissioned', value: '520+' },
  { label: 'Avg. energy savings', value: '32%' },
  { label: 'Gujarat districts served', value: '18' },
  { label: 'Support response SLA', value: '< 24h' },
];

const services = [
  'Residential rooftop solar design',
  'Commercial and industrial EPC execution',
  'PM Surya Ghar application processing',
  'Partner and channel performance management',
];

const enterpriseModules = [
  {
    title: 'Customer Portal',
    href: '/dashboard/customer',
    description: 'Track proposals, subsidy stages, installation progress and service requests in one place.',
  },
  {
    title: 'Partner Hub',
    href: '/dashboard/partner',
    description: 'Enable dealers, channel partners and project coordinators with a shared operating view.',
  },
  {
    title: 'Agent Desk',
    href: '/dashboard/agent',
    description: 'Capture leads, manage prospect quality and push high-converting customer journeys.',
  },
  {
    title: 'Admin Control',
    href: '/dashboard/admin',
    description: 'Monitor pipeline, documents, financials and mission-critical operational KPIs.',
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="Trividha Solar logo" className="h-11 w-11" />
            <div>
              <div className="font-display text-lg font-semibold tracking-tight text-white">Trividha Solar</div>
              <div className="text-xs text-slate-400">Install Solar. Invest in Tomorrow.</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="#solutions">Solutions</Link>
            <Link href="#platform">Platform</Link>
            <Link href="#impact">Impact</Link>
            <Link href="/dashboard">Portal</Link>
          </nav>
          <Link
            href="/dashboard"
            className="rounded-full border border-brand/60 bg-brand px-4 py-2 text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.01]"
          >
            Explore Portal
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-sun-grid">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,197,66,0.2),_transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-brand">
              Enterprise solar platform
            </div>
            <div className="space-y-6">
              <h1 className="font-display text-5xl font-black leading-tight text-white md:text-6xl">
                Install Solar.
                <span className="block bg-gradient-to-r from-brand via-yellow-300 to-amber-200 bg-clip-text text-transparent">
                  Invest in Tomorrow.
                </span>
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                Trividha Solar powers Gujarat homes, businesses and partner networks with premium rooftop EPC,
                subsidy guidance and a connected enterprise operating system.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/dashboard/customer"
                className="rounded-full bg-brand px-6 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300"
              >
                Book a free consultation
              </Link>
              <Link
                href="#platform"
                className="rounded-full border border-slate-600 bg-slate-900/70 px-6 py-3 font-semibold text-white transition hover:border-brand/60 hover:text-brand"
              >
                View platform
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-glow">
                  <div className="text-2xl font-black text-brand">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.14em] text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -translate-y-6 rounded-[32px] bg-gradient-to-br from-brand/20 via-slate-900/50 to-transparent blur-2xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-2xl shadow-brand/10 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-brand">Solar advisor</div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-white">Live Gujarat estimate</h2>
                </div>
                <div className="rounded-full border border-brand/40 bg-brand/10 px-2 py-1 text-xs font-medium text-brand">
                  PM Surya Ghar
                </div>
              </div>
              <div className="space-y-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-400">Monthly bill</span>
                  <span className="text-xl font-bold text-white">₹4,500</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-400">Recommended size</span>
                  <span className="text-xl font-bold text-white">3.2 kW</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <span className="text-slate-400">Estimated annual savings</span>
                  <span className="text-xl font-bold text-brand">₹1.1L</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Subsidy estimate</span>
                  <span className="text-xl font-bold text-emerald-400">₹78,000</span>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Capacity</div>
                  <div className="mt-2 text-lg font-bold text-white">3.2 kW</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-400">IRR</div>
                  <div className="mt-2 text-lg font-bold text-white">18-22%</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900 p-3">
                  <div className="text-xs uppercase tracking-[0.16em] text-slate-400">Payback</div>
                  <div className="mt-2 text-lg font-bold text-white">4-6 yrs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Why Trividha Solar</p>
          <h2 className="mt-4 font-display text-4xl font-bold text-white">Built for solar growth across every touchpoint.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {enterpriseModules.map((item) => (
            <Link key={item.title} href={item.href} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6 transition hover:border-brand/60 hover:bg-slate-900">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-xl text-brand">⚡</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="platform" className="bg-slate-900/70 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Platform features</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white">A connected operating layer for solar success.</h2>
              <ul className="mt-8 space-y-4 text-slate-300">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <span className="mt-1 text-brand">•</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-glow">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-slate-400">Operational KPI</div>
                  <div className="mt-2 text-3xl font-black text-white">₹3.4Cr</div>
                </div>
                <div className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                  +26% QoQ
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {[
                  ['Lead conversion', '67%'],
                  ['On-time installation', '94%'],
                  ['Customer satisfaction', '4.8/5'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-slate-900 p-4">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                      <span>{label}</span>
                      <span className="font-semibold text-white">{value}</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-brand to-emerald-400" style={{ width: value.includes('%') ? value : '75%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[32px] border border-brand/30 bg-gradient-to-r from-brand/10 via-slate-900 to-slate-950 p-8">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Gujarat impact</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-white">Powering cleaner growth across the state.</h2>
            </div>
            <div className="space-y-5 text-slate-200">
              <p>Residential homes, SMEs and industrial facilities benefit from future-ready solar design, procurement and upkeep.</p>
              <p>Our platform keeps customers, partners and internal teams aligned from enquiry to commissioning and support.</p>
            </div>
            <div className="flex items-end justify-end">
              <Link href="/dashboard/admin" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-brand">
                View admin dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
