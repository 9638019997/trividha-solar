const documentGroups = [
  {
    title: 'Electricity bills',
    items: ['June 2026 bill.pdf', 'July 2026 bill.pdf'],
  },
  {
    title: 'Quotations',
    items: ['QT-2041.pdf', 'QT-2098.pdf'],
  },
  {
    title: 'Invoices',
    items: ['INV-1182.pdf'],
  },
  {
    title: 'Warranty',
    items: ['Warranty certificate.pdf'],
  },
  {
    title: 'Completion',
    items: ['Completion certificate.pdf'],
  },
  {
    title: 'Uploaded files',
    items: ['Property photo.jpg', 'Roof photo 1.jpg', 'ID proof.pdf'],
  },
];

export default function CustomerDocumentsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Documents</div>
        <h2 className="mt-2 text-3xl font-black text-slate-900">My records and downloads</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {documentGroups.map((group) => (
            <div key={group.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-xl font-black text-slate-900">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <span>{item}</span>
                    <button type="button" className="text-xs font-semibold text-slate-900 underline decoration-amber-500 underline-offset-4">Download</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
