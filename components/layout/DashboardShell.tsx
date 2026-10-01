'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { TrividhaLogo } from '@/components/brand/TrividhaLogo';

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface DashboardShellProps {
  title: string;
  role: string;
  navItems: NavItem[];
  children: React.ReactNode;
}

export function DashboardShell({ title, role, navItems, children }: DashboardShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#070c18] text-gray-900 dark:text-gray-100 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#0d1527] border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div>
          <TrividhaLogo size="sm" />
          <div className="mt-2 px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-lg text-xs font-bold uppercase tracking-wider inline-block">
            {role}
          </div>

          <nav className="mt-8 space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-amber-600 transition"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-gray-100 dark:border-gray-800">
          <Link href="/partner/login" className="text-xs font-bold text-red-500 hover:underline">
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 md:pl-64 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="h-16 bg-white dark:bg-[#0d1527] border-b border-gray-200 dark:border-gray-800 px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              ☰
            </button>
            <h2 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Gateway
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-6 md:p-8 flex-1 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
