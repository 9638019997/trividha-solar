const adminStats = [
  ['Pipeline value', '₹12.9Cr'],
  ['Approved quotations', '96'],
  ['Open service requests', '26'],
  ['Document verification', '84%'],
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {adminStats.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">{label}</div>
            <div className="mt-4 text-3xl font-black text-white">{value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
          <h2 className="font-display text-2xl font-bold text-white">Operational health</h2>
          <div className="mt-6 space-y-4">
            {[
              ['Installation throughput', '94%'],
              ['Document compliance', '92%'],
              ['Support backlog', '8 tickets'],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm text-slate-300">
                  <span>{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800">
                  <div className="h-2 rounded-full bg-gradient-to-r from-brand to-emerald-400" style={{ width: value.includes('%') ? value : '75%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-brand/30 bg-brand/10 p-6">
          <div className="text-sm uppercase tracking-[0.2em] text-brand">Executive summary</div>
          <div className="mt-4 space-y-3 text-slate-200">
            <p>Lead quality remains above benchmark with stronger conversion from partner-managed channels.</p>
            <p>Commercial and industrial opportunities continue to expand across Gujarat demand pockets.</p>
            <p>Recommended priority: accelerate subsidy documentation coverage and support backlog reduction.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
