const profileSections = [
  'Personal Details',
  'Business Details',
  'Bank Details',
  'Documents',
  'Security',
];

export default function PartnerProfilePage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Profile</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Account settings</h2>
          </div>
          <button type="button" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Save changes</button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profileSections.map((section) => (
            <div key={section} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="text-lg font-black text-slate-900">{section}</div>
              <div className="mt-3 text-sm leading-6 text-slate-600">Update and review current information for this area.</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
