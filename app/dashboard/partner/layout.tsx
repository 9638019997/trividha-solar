'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { createSupabaseClient } from '@/lib/supabase/client';

const navItems = [
  { href: '/dashboard/partner', label: 'Overview' },
  { href: '/dashboard/partner/leads', label: 'Leads' },
  { href: '/dashboard/partner/customers', label: 'Customers' },
  { href: '/dashboard/partner/quotations', label: 'Quotations' },
  { href: '/dashboard/partner/projects', label: 'Projects' },
  { href: '/dashboard/partner/commission', label: 'Commission' },
  { href: '/dashboard/partner/documents', label: 'Documents' },
  { href: '/dashboard/partner/notifications', label: 'Notifications' },
  { href: '/dashboard/partner/profile', label: 'Profile' },
];

export default function PartnerPortalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const supabase = createSupabaseClient();

    const loadSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(Boolean(data.session));
    };

    loadSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_: string, session: any) => {
      setIsAuthenticated(Boolean(session));
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const isAuthPage = useMemo(
    () => pathname?.startsWith('/dashboard/partner/login') || pathname?.startsWith('/dashboard/partner/register'),
    [pathname]
  );

  useEffect(() => {
    if (isAuthenticated === false && !isAuthPage) {
      router.replace('/dashboard/partner/login');
    }
  }, [isAuthenticated, isAuthPage, router]);

  if (isAuthenticated === null && !isAuthPage) {
    return <div className="min-h-screen bg-slate-50 p-8 text-slate-700">Loading partner portal...</div>;
  }

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-slate-200 bg-white p-6 shadow-sm lg:block">
        <div className="flex items-center gap-3 border-b border-slate-200 pb-6">
          <img src="/assets/trividha_logo.png" alt="Trividha Solar logo" className="h-10 w-auto" />
        </div>

        <div className="mt-8">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Channel partner</div>
          <div className="mt-3 text-2xl font-black text-slate-900">Business portal</div>
        </div>

        <nav className="mt-8 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'block rounded-2xl border px-4 py-3 text-sm font-medium transition',
                  isActive
                    ? 'border-amber-200 bg-amber-50 text-slate-900'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100',
                ].join(' ')}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 rounded-[24px] border border-slate-200 bg-slate-50 p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">KYC status</div>
          <div className="mt-2 text-2xl font-black text-slate-900">82%</div>
          <div className="mt-3 h-2 rounded-full bg-slate-200">
            <div className="h-2 w-[82%] rounded-full bg-amber-500" />
          </div>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-4 md:px-6">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-600">Trividha Solar</div>
              <h1 className="mt-1 text-xl font-black text-slate-900 md:text-2xl">Partner dashboard</h1>
            </div>
            <Link href="/dashboard/partner/login" className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
              Sign out
            </Link>
          </div>
        </header>

        <main className="p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
