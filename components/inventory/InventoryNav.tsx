'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Overview', href: '/dashboard/inventory' },
  { label: 'Products & Stock', href: '/dashboard/inventory/products' },
  { label: 'Warehouses', href: '/dashboard/inventory/warehouses' },
  { label: 'Vendors & POs', href: '/dashboard/inventory/vendors' },
  { label: 'Operations & GRN', href: '/dashboard/inventory/operations' },
  { label: 'Reports', href: '/dashboard/inventory/reports' },
];

export default function InventoryNav() {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3 mb-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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
