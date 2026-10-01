'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navItems = [
  { label: 'Dashboard', href: '/dashboard/system' },
  { label: 'Company Info', href: '/dashboard/system/company' },
  { label: 'Branches', href: '/dashboard/system/branches' },
  { label: 'Branding', href: '/dashboard/system/branding' },
  { label: 'Settings', href: '/dashboard/system/settings' },
  { label: 'Backups', href: '/dashboard/system/backup' },
  { label: 'Monitoring', href: '/dashboard/system/monitoring' },
  { label: 'Logs', href: '/dashboard/system/logs' },
];
export default function SystemNav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 mb-6">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${pathname === item.href ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>{item.label}</Link>
      ))}
    </div>
  );
}
