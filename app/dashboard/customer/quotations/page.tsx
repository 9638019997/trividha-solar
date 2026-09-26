const quotations = [
  {
    id: 'QT-2041',
    title: 'Residential solar package',
    amount: '₹4,20,000',
    status: 'Pending approval',
    expiry: 'Valid until 15 Nov 2026',
  },
  {
    id: 'QT-2098',
    title: 'Commercial rooftop proposal',
    amount: '₹18,60,000',
    status: 'Approved',
    expiry: 'Valid until 30 Nov 2026',
  },
];

export default function CustomerQuotationsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Quotations</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Your project proposals</h2>
          </div>
        </div>

        <div className="mt-8 space-y-5">
          {quotations.map((quote) => (
            <div key={quote.id} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{quote.id}</div>
                  <h3 className="mt-2 text-2xl font-black text-slate-900">{quote.title}</h3>
                  <div className="mt-2 text-sm text-slate-600">{quote.expiry}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-slate-900">{quote.amount}</div>
                  <div className="mt-2 text-sm font-medium text-amber-700">{quote.status}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button type="button" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Download PDF</button>
                <button type="button" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">Accept</button>
                <button type="button" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">Reject</button>
                <button type="button" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900">Request changes</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
