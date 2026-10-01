'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const navItems = [
  { label: 'Overview', href: '/dashboard/security' },
  { label: 'Users', href: '/dashboard/security/users' },
  { label: 'Roles', href: '/dashboard/security/roles' },
  { label: 'Permissions', href: '/dashboard/security/permissions' },
  { label: 'Audit Logs', href: '/dashboard/security/audit' },
  { label: 'Sessions', href: '/dashboard/security/sessions' },
  { label: 'Settings', href: '/dashboard/security/settings' },
];
export default function SecurityNav() {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 mb-6">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${pathname === item.href ? 'bg-amber-600 text-white shadow-sm' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}>{item.label}</Link>
      ))}
    </div>
  );
}
