const stats = [
  { label: 'KYC Status', value: '82% complete' },
  { label: 'Leads', value: '24 active' },
  { label: 'Customers', value: '12 onboarded' },
  { label: 'Quotations', value: '8 in review' },
  { label: 'Projects', value: '6 live' },
  { label: 'Commission', value: '₹12.4L' },
  { label: 'Wallet', value: '₹3.8L' },
  { label: 'Notifications', value: '5 new' },
];

const leadSummary = [
  { label: 'New', value: '08' },
  { label: 'Contacted', value: '05' },
  { label: 'Survey', value: '04' },
  { label: 'Won', value: '03' },
  { label: 'Lost', value: '02' },
  { label: 'Completed', value: '02' },
];

export default function PartnerDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Welcome</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Hello, Aman</h2>
            <p className="mt-3 max-w-xl text-slate-600">Track your leads, customers, commissions and project delivery momentum from your channel partner workspace.</p>
          </div>
          <div className="rounded-[24px] border border-amber-200 bg-amber-50 px-5 py-4 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">KYC</div>
            <div className="mt-2 text-2xl font-black text-slate-900">82% complete</div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
            <div className="mt-3 text-2xl font-black text-slate-900">{stat.value}</div>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Lead summary</div>
          <h3 className="mt-3 text-2xl font-black text-slate-900">Pipeline health</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {leadSummary.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                <div className="mt-2 text-2xl font-black text-slate-900">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Notifications</div>
          <h3 className="mt-3 text-2xl font-black text-slate-900">Action items</h3>
          <div className="mt-6 space-y-4">
            {['New lead from Ahmedabad', 'Quotation ready for review', 'Commission released', 'Project completed'].map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">{item}</div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
