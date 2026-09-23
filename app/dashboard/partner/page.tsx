const metrics = [
  ['Active partner accounts', '48'],
  ['Closed deals this month', '18'],
  ['Partner revenue', '₹2.4Cr'],
  ['Avg. commission', '12%'],
];

export default function PartnerDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">{label}</div>
            <div className="mt-4 text-3xl font-black text-white">{value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="font-display text-2xl font-bold text-white">Top performing channels</h2>
          <div className="mt-6 space-y-4">
            {[
              ['North Gujarat', '7 projects'],
              ['South Gujarat', '5 projects'],
              ['Saurashtra', '4 projects'],
            ].map(([region, projects]) => (
              <div key={region} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <span className="text-slate-200">{region}</span>
                <span className="font-semibold text-brand">{projects}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-brand">Partner incentive</div>
          <div className="mt-4 text-4xl font-black text-white">₹4.8L</div>
          <div className="mt-2 text-slate-300">Qualified payouts this cycle</div>
        </div>
      </section>
    </div>
  );
}
