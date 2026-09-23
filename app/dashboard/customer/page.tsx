const activities = [
  { label: 'Proposal status', value: 'Awaiting customer approval' },
  { label: 'Installation stage', value: 'Site survey scheduled' },
  { label: 'Subsidy status', value: 'Documents uploaded' },
];

const details = [
  ['System size', '3.2 kW'],
  ['Expected generation', '4,800 kWh/yr'],
  ['Estimated savings', '₹1.1L/yr'],
  ['Project timeline', '18 days'],
];

export default function CustomerDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-brand">Customer portal</div>
          <h2 className="mt-4 font-display text-3xl font-bold text-white">Project status overview</h2>
          <div className="mt-6 space-y-4">
            {activities.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-brand">Energy impact</div>
          <div className="mt-4 text-4xl font-black text-white">₹1.1L</div>
          <div className="mt-2 text-slate-300">Annual savings estimate</div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <div className="text-sm text-slate-300">Current bill reduction</div>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-brand to-emerald-400" />
            </div>
            <div className="mt-3 text-lg font-bold text-brand">72% projected reduction</div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
        <h3 className="font-display text-2xl font-bold text-white">Project details</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {details.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
              <div className="mt-2 text-lg font-semibold text-white">{value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
