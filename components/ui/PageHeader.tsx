import React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({ title, description, action, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="mb-6 space-y-2">
      {breadcrumbs && (
        <nav className="flex items-center text-xs text-gray-400 space-x-1.5 mb-2 font-medium">
          {breadcrumbs.map((b, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <span>/</span>}
              <span className={idx === breadcrumbs.length - 1 ? 'text-gray-700 font-semibold' : 'hover:text-gray-600'}>
                {b.label}
              </span>
            </React.Fragment>
          ))}
        </nav>
      )}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight">{title}</h1>
          {description && <p className="text-sm text-gray-500 mt-1 max-w-2xl">{description}</p>}
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
    </div>
  );
}
