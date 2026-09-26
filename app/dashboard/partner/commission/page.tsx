const commissionStats = [
  { label: 'Total commission', value: '₹12,40,000' },
  { label: 'Pending commission', value: '₹3,20,000' },
  { label: 'Paid commission', value: '₹9,20,000' },
  { label: 'Monthly earnings', value: '₹1,80,000' },
];

const transactions = [
  { title: 'Residential rooftop', amount: '₹64,000', status: 'Paid' },
  { title: 'Commercial rooftop', amount: '₹1,12,000', status: 'Pending' },
  { title: 'Industrial project', amount: '₹1,86,000', status: 'Paid' },
];

export default function PartnerCommissionPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Commission</div>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Earnings overview</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {commissionStats.map((stat) => (
            <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
              <div className="mt-3 text-2xl font-black text-slate-900">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-lg font-black text-slate-900">Transaction history</div>
        <div className="mt-6 space-y-4">
          {transactions.map((item) => (
            <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div>
                <div className="font-semibold text-slate-900">{item.title}</div>
                <div className="mt-1 text-sm text-slate-600">{item.status}</div>
              </div>
              <div className="text-lg font-black text-slate-900">{item.amount}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
