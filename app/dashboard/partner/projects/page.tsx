const projectTimeline = [
  'Survey',
  'Quotation',
  'Approval',
  'Installation',
  'Inspection',
  'Completed',
];

const projects = [
  { name: 'Rooftop 3.2 kW', status: 'Installation', progress: '4/6 stages', city: 'Ahmedabad' },
  { name: 'Commercial 24 kW', status: 'Approval', progress: '3/6 stages', city: 'Surat' },
  { name: 'Industrial 80 kW', status: 'Inspection', progress: '5/6 stages', city: 'Vadodara' },
];

export default function PartnerProjectsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Projects</div>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Delivery pipeline</h2>

        <div className="mt-8 space-y-5">
          {projects.map((project) => (
            <div key={project.name} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xl font-black text-slate-900">{project.name}</div>
                  <div className="mt-2 text-sm text-slate-600">{project.city}</div>
                </div>
                <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-700">{project.status}</div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-sm text-slate-600">
                  <span>Timeline</span>
                  <span>{project.progress}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectTimeline.map((step, index) => (
                    <span key={step} className={[
                      'rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]',
                      index <= 3 ? 'border border-amber-200 bg-amber-50 text-amber-700' : 'border border-slate-200 bg-white text-slate-600',
                    ].join(' ')}>
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
