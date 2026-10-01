'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navItems = [
  { label: 'AI Dashboard', href: '/dashboard/ai' },
  { label: 'Advisor', href: '/dashboard/ai/advisor' },
  { label: 'Lead Scoring', href: '/dashboard/ai/leads' },
  { label: 'Quotation Gen', href: '/dashboard/ai/quotation' },
  { label: 'Reports', href: '/dashboard/ai/reports' },
  { label: 'Settings', href: '/dashboard/ai/settings' },
];
export default function AINav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 mb-6">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${pathname === item.href ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>{item.label}</Link>
      ))}
    </div>
  );
}
