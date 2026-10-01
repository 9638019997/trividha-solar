import React from 'react';

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white dark:bg-[#0d1527] border border-gray-100 dark:border-gray-800 rounded-2xl p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export function Button({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) {
  const styles = {
    primary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-md shadow-amber-500/20',
    secondary: 'bg-gray-900 hover:bg-gray-800 text-white',
    outline: 'border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200'
  };
  return (
    <button className={`px-4 py-2.5 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Badge({ children, variant = 'amber' }: { children: React.ReactNode; variant?: 'amber' | 'green' | 'blue' }) {
  const colors = {
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    blue: 'bg-blue-50 text-blue-700 border-blue-200'
  };
  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${colors[variant]}`}>
      {children}
    </span>
  );
}

export function StatCard({ title, value, change, icon }: { title: string; value: string; change?: string; icon?: React.ReactNode }) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{title}</p>
        <h4 className="text-2xl font-black text-gray-900 dark:text-white mt-1">{value}</h4>
        {change && <p className="text-xs font-medium text-emerald-600 mt-1">{change}</p>}
      </div>
      {icon && <div className="p-3 bg-amber-50 dark:bg-gray-800 rounded-xl text-amber-600">{icon}</div>}
    </Card>
  );
}
