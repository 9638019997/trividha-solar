import Link from 'next/link';

const timeline = [
  'Lead Created',
  'Survey Scheduled',
  'Survey Completed',
  'Quotation Sent',
  'Quotation Approved',
  'Installation Scheduled',
  'Installation Completed',
  'Inspection',
  'Project Completed',
];

const projectStatus = [
  { label: 'Project status', value: 'Installation scheduled' },
  { label: 'System size', value: '3.2 kW' },
  { label: 'Expected generation', value: '4,800 kWh/yr' },
  { label: 'Installation date', value: '12 Nov 2026' },
];

export default function CustomerProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Project tracker</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Your solar project journey</h2>
          </div>
          <Link href="/dashboard/customer/quotations" className="text-sm font-semibold text-slate-900 underline decoration-amber-500 underline-offset-8">
            View quotation
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {projectStatus.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
              <div className="mt-2 text-lg font-bold text-slate-900">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-slate-200" />
          <div className="space-y-5">
            {timeline.map((step, index) => (
              <div key={step} className="relative flex items-start gap-4 pl-8">
                <div className={[
                  'absolute left-0 top-1 h-8 w-8 rounded-full border-4 border-white',
                  index <= 5 ? 'bg-amber-500' : 'bg-slate-300',
                ].join(' ')} />
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">{step}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
