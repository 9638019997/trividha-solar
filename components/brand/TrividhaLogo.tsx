'use client';
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function TrividhaLogo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`${sizeMap[size]} shrink-0 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-emerald-500 p-2 shadow-md flex items-center justify-center`}>
        <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
          <circle cx="32" cy="22" r="9" fill="#FFFFFF" />
          <path d="M32 5V9M32 35V39M15 22H19M45 22H49M19.98 9.98L22.81 12.81M41.19 31.19L44.02 34.02M19.98 34.02L22.81 31.19M41.19 12.81L44.02 9.98" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M14 48L24 38H40L50 48H14Z" fill="#047857" stroke="#FFFFFF" strokeWidth="1.5" />
          <path d="M32 38V48M23 43H41" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold tracking-tight text-gray-900 dark:text-white leading-none text-base">
            TRIVIDHA <span className="text-amber-500">SOLAR</span>
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 mt-1">
            Green Energy Network
          </span>
        </div>
      )}
    </div>
  );
}
