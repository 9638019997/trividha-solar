import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: { value: string; isPositive: boolean };
  icon?: React.ReactNode;
  gradient?: 'amber' | 'blue' | 'emerald' | 'purple';
}

export default function StatCard({ title, value, subtitle, trend, icon, gradient = 'amber' }: StatCardProps) {
  const borderStyles = {
    amber: 'border-l-4 border-l-amber-500',
    blue: 'border-l-4 border-l-blue-500',
    emerald: 'border-l-4 border-l-emerald-500',
    purple: 'border-l-4 border-l-purple-500',
  }[gradient];

  return (
    <div className={`p-5 bg-white rounded-2xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow ${borderStyles}`}>
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{title}</p>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <div className="mt-3 flex items-baseline justify-between">
        <p className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">{value}</p>
        {trend && (
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trend.isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}
          </span>
        )}
      </div>
      {subtitle && <p className="text-xs text-gray-500 mt-1.5">{subtitle}</p>}
    </div>
  );
}
