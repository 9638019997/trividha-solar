import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'glass';
  className?: string;
}

export function Card({ children, variant = 'default', className = '', ...props }: CardProps) {
  const base = "rounded-2xl transition-all duration-200 border";
  const variants = {
    default: "bg-white border-gray-200/80 shadow-xs hover:border-gray-300",
    elevated: "bg-white border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:border-gray-200",
    glass: "bg-white/80 backdrop-blur-md border-white/60 shadow-sm",
  }[variant];

  return (
    <div className={`${base} ${variants} ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 md:p-6 border-b border-gray-100 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-5 md:p-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`p-4 md:p-6 bg-gray-50/50 rounded-b-2xl border-t border-gray-100 ${className}`}>{children}</div>;
}
