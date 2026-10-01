'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import TrividhaLogo from '../branding/TrividhaLogo';

export default function UnifiedHeader() {
  const [partnerOpen, setPartnerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <TrividhaLogo />
        </Link>

        {/* Global Action Links */}
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/customer/login"
            className="px-3.5 py-2 text-xs md:text-sm font-semibold text-gray-700 hover:text-amber-600 rounded-xl hover:bg-amber-50/50 transition-colors"
          >
            Customer Login
          </Link>

          {/* Become a Partner dropdown */}
          <div className="relative">
            <button
              onClick={() => setPartnerOpen(!partnerOpen)}
              className="flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-sm hover:from-amber-700 hover:to-amber-600 transition-all shadow-amber-500/20"
            >
              <span>Become a Partner</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {partnerOpen && (
              <div 
                onMouseLeave={() => setPartnerOpen(false)}
                className="absolute right-0 mt-2 w-52 rounded-2xl bg-white p-2 shadow-xl border border-gray-100 z-50 text-xs md:text-sm font-medium"
              >
                <Link
                  href="/partner/register"
                  onClick={() => setPartnerOpen(false)}
                  className="flex flex-col p-2.5 rounded-xl hover:bg-amber-50 text-gray-800 hover:text-amber-800 transition"
                >
                  <span className="font-bold">Channel Partner</span>
                  <span className="text-[11px] text-gray-500">EPC contractors & Dealers</span>
                </Link>
                <Link
                  href="/agent/login"
                  onClick={() => setPartnerOpen(false)}
                  className="flex flex-col p-2.5 rounded-xl hover:bg-amber-50 text-gray-800 hover:text-amber-800 transition"
                >
                  <span className="font-bold">Solar Agent</span>
                  <span className="text-[11px] text-gray-500">Field sales & Surveyors</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
