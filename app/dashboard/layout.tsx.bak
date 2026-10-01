import Link from 'next/link';

const nav = [
  { label: 'Customer', href: '/dashboard/customer' },
  { label: 'Partner', href: '/dashboard/partner' },
  { label: 'Agent', href: '/dashboard/agent' },
  { label: 'Admin', href: '/dashboard/admin' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-white/10 bg-slate-900/90 p-6 md:block">
        <Link href="/" className="flex items-center gap-3 pb-10">
          <img src="/assets/logo.svg" alt="Trividha Solar logo" className="h-10 w-10" />
          <div>
            <div className="font-display text-lg font-bold text-white">Trividha Solar</div>
            <div className="text-xs text-slate-400">Enterprise Platform</div>
          </div>
        </Link>

        <nav className="space-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-brand/50 hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 rounded-2xl border border-brand/30 bg-brand/10 p-4">
          <div className="text-xs uppercase tracking-[0.2em] text-brand">Live status</div>
          <div className="mt-3 text-2xl font-black text-white">98.4%</div>
          <div className="text-sm text-slate-300">System uptime across Gujarat operations</div>
        </div>
      </aside>

      <div className="md:pl-72">
        <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-brand">Trividha Solar</div>
              <h1 className="mt-2 font-display text-2xl font-bold text-white">Enterprise dashboard</h1>
            </div>
            <div className="rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-sm font-medium text-brand">
              Gujarat operations
            </div>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
