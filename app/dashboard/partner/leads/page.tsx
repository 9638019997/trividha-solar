const leads = [
  { name: 'Rohit Mehta', status: 'New', city: 'Ahmedabad', value: '₹82,000', owner: 'Self' },
  { name: 'Nisha Shah', status: 'Survey', city: 'Rajkot', value: '₹1,10,000', owner: 'Self' },
  { name: 'Vikram Patel', status: 'Quotation', city: 'Surat', value: '₹1,40,000', owner: 'Self' },
];

const statuses = ['New', 'Contacted', 'Survey', 'Quotation', 'Negotiation', 'Won', 'Lost', 'Installation', 'Completed'];

export default function PartnerLeadsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Lead management</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Pipeline overview</h2>
          </div>
          <button type="button" className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900">Add lead</button>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {statuses.map((status) => (
            <span key={status} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
              {status}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 text-sm uppercase tracking-[0.12em] text-slate-500">
                <th className="pb-4 pr-6">Customer</th>
                <th className="pb-4 pr-6">Status</th>
                <th className="pb-4 pr-6">City</th>
                <th className="pb-4 pr-6">Value</th>
                <th className="pb-4 pr-6">Owner</th>
                <th className="pb-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.name} className="border-b border-slate-200 text-sm text-slate-700">
                  <td className="py-4 pr-6 font-semibold text-slate-900">{lead.name}</td>
                  <td className="py-4 pr-6">
                    <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">{lead.status}</span>
                  </td>
                  <td className="py-4 pr-6">{lead.city}</td>
                  <td className="py-4 pr-6">{lead.value}</td>
                  <td className="py-4 pr-6">{lead.owner}</td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">Edit</button>
                      <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">Assign</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
