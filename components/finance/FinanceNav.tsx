'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Overview', href: '/dashboard/finance' },
  { label: 'Customer Ledgers', href: '/dashboard/finance/customers' },
  { label: 'Vendor Ledgers', href: '/dashboard/finance/vendors' },
  { label: 'Quotations', href: '/dashboard/finance/quotations' },
  { label: 'Invoices', href: '/dashboard/finance/invoices' },
  { label: 'Payments & Receipts', href: '/dashboard/finance/payments' },
  { label: 'Expenses', href: '/dashboard/finance/expenses' },
  { label: 'GST Summary', href: '/dashboard/finance/gst' },
  { label: 'Commissions', href: '/dashboard/finance/commissions' },
  { label: 'Loans & JanSamarth', href: '/dashboard/finance/loans' },
  { label: 'Financial Reports', href: '/dashboard/finance/reports' },
];

export default function FinanceNav() {
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
