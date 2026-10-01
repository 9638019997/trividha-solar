'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Overview', href: '/dashboard/hrms' },
  { label: 'Employees', href: '/dashboard/hrms/employees' },
  { label: 'Departments', href: '/dashboard/hrms/departments' },
  { label: 'Attendance', href: '/dashboard/hrms/attendance' },
  { label: 'Leaves', href: '/dashboard/hrms/leaves' },
  { label: 'Payroll & Salary', href: '/dashboard/hrms/payroll' },
  { label: 'Recruitment', href: '/dashboard/hrms/recruitment' },
  { label: 'Performance', href: '/dashboard/hrms/performance' },
  { label: 'Training', href: '/dashboard/hrms/training' },
  { label: 'Documents Vault', href: '/dashboard/hrms/documents' },
  { label: 'HR Analytics', href: '/dashboard/hrms/reports' },
];

export default function HRMSNav() {
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
