const tickets = [
  {
    id: 'TK-221',
    subject: 'System inspection request',
    status: 'In progress',
    reply: 'Site visit scheduled for 10 Nov 2026',
  },
  {
    id: 'TK-190',
    subject: 'Quotation clarification',
    status: 'Awaiting customer response',
    reply: 'Our team has sent an updated proposal.',
  },
];

export default function CustomerSupportPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">Support</div>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Ticket center</h2>
          </div>
          <button type="button" className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-slate-900">Raise ticket</button>
        </div>

        <div className="mt-8 space-y-5">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{ticket.id}</div>
                  <h3 className="mt-2 text-xl font-black text-slate-900">{ticket.subject}</h3>
                </div>
                <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">{ticket.status}</div>
              </div>
              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 text-slate-700">{ticket.reply}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
