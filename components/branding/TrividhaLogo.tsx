import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export default function TrividhaLogo({ className = '', variant = 'full', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-10',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 font-sans ${className}`}>
      <div className={`aspect-square ${sizeClasses} relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-1.5 shadow-md shadow-amber-500/20`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
        </svg>
      </div>
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className="font-extrabold tracking-tight text-gray-950 text-base md:text-lg leading-none">
            TRIVIDHA <span className="text-amber-600">SOLAR</span>
          </span>
          <span className="text-[10px] font-semibold text-gray-400 tracking-widest uppercase mt-0.5">
            Enterprise CleanTech
          </span>
        </div>
      )}
    </div>
  );
}
