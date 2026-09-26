const notifications = [
  'New lead assigned from Ahmedabad',
  'Survey scheduled for a residential rooftop project',
  'Quotation ready for customer review',
  'Commission released for completed project',
  'Project completed and warranty issued',
];

export default function PartnerNotificationsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Notifications</div>
        <h2 className="mt-2 text-3xl font-black text-slate-900">Recent updates</h2>

        <div className="mt-8 space-y-4">
          {notifications.map((label) => (
            <div key={label} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
              <div className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-500" />
              <div>{label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
