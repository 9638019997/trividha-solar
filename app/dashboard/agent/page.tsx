const queue = [
  ['Lead conversion', '68%'],
  ['Hot leads today', '34'],
  ['Follow-ups due', '12'],
  ['Qualified prospects', '21'],
];

export default function AgentDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {queue.map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-white/10 bg-slate-900 p-5">
            <div className="text-sm text-slate-400">{label}</div>
            <div className="mt-4 text-3xl font-black text-white">{value}</div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-900 p-6">
        <h2 className="font-display text-2xl font-bold text-white">Priority follow-up list</h2>
        <div className="mt-6 space-y-3">
          {[
            'Rajkot household — site visit requested',
            'Vadodara SME — consent letter pending',
            'Surat commercial unit — ROI discussion in progress',
          ].map((entry) => (
            <div key={entry} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-slate-200">
              {entry}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
