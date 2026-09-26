const documentGroups = [
  {
    title: 'Partner documents',
    items: ['PAN card', 'Aadhaar card', 'GST certificate', 'Cancelled cheque'],
  },
  {
    title: 'Customer documents',
    items: ['Invoice', 'Warranty', 'Completion certificate', 'Installation photo'],
  },
  {
    title: 'Invoices',
    items: ['INV-1021.pdf', 'INV-1042.pdf'],
  },
];

export default function PartnerDocumentsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Document vault</div>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Secure records</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {documentGroups.map((group) => (
            <div key={group.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-xl font-black text-slate-900">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-white px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
