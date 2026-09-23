import Link from 'next/link';

const panelCards = [
  { title: 'Customer pipeline', value: '1,280', tone: 'brand' },
  { title: 'Active projects', value: '142', tone: 'slate' },
  { title: 'Partner net sales', value: '₹8.7Cr', tone: 'emerald' },
  { title: 'Service SLA', value: '96%', tone: 'amber' },
];

export default function DashboardHomePage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {panelCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-glow">
            <div className="text-sm text-slate-400">{card.title}</div>
            <div className="mt-4 text-3xl font-black text-white">{card.value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="font-display text-2xl font-bold text-white">Operational snapshot</h2>
          <div className="mt-6 space-y-4">
            {[
              ['Lead to quote', '72%'],
              ['Quote to project', '61%'],
              ['Invoice collection', '89%'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-brand to-emerald-400" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="font-display text-2xl font-bold text-white">Quick actions</h2>
          <div className="mt-5 space-y-3">
            {navActions.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200 transition hover:border-brand/50 hover:text-brand">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const navActions = [
  { label: 'Open customer portal', href: '/dashboard/customer' },
  { label: 'Open partner operations', href: '/dashboard/partner' },
  { label: 'Open agent desk', href: '/dashboard/agent' },
  { label: 'Open admin control', href: '/dashboard/admin' },
];
