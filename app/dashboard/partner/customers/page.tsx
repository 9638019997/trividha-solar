const customers = [
  { name: 'Riya Patel', site: 'Ahmedabad', project: 'Residential 3.2 kW', status: 'Installation' },
  { name: 'Sanjay Joshi', site: 'Rajkot', project: 'Commercial 24 kW', status: 'Quotation' },
  { name: 'Mehul Shah', site: 'Vadodara', project: 'Industrial 80 kW', status: 'Inspection' },
];

export default function PartnerCustomersPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Customers</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Customer portfolio</h2>
          </div>
          <button type="button" className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900">Add customer</button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {customers.map((customer) => (
            <div key={customer.name} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center justify-between">
                <div className="text-xl font-black text-slate-900">{customer.name}</div>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-amber-700">{customer.status}</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div>Site: {customer.site}</div>
                <div>Project: {customer.project}</div>
              </div>
              <div className="mt-5 flex gap-2">
                <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">View</button>
                <button type="button" className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">Upload docs</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
