'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Overview', href: '/dashboard/om' },
  { label: 'Plants', href: '/dashboard/om/plants' },
  { label: 'Service Tickets', href: '/dashboard/om/services' },
  { label: 'Preventive Schedule', href: '/dashboard/om/preventive' },
  { label: 'Breakdowns', href: '/dashboard/om/breakdowns' },
  { label: 'Technicians', href: '/dashboard/om/technicians' },
  { label: 'AMC Contracts', href: '/dashboard/om/amc' },
  { label: 'Monitoring & PR', href: '/dashboard/om/monitoring' },
  { label: 'Documents', href: '/dashboard/om/documents' },
  { label: 'Audit Reports', href: '/dashboard/om/reports' },
];

export default function OMNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 mb-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-3 py-1.5 rounded-lg text-xs md:text-sm font-medium transition-colors ${
              isActive
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
