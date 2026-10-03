import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-block px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-4">
        404 — Page Not Found
      </div>
      <h1 className="text-4xl font-extrabold text-white mb-2">Lost in Transition?</h1>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        The page or clean energy resource you are looking for has been moved or does not exist.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
        >
          Return Home
        </Link>
        <Link
          href="/catalogue"
          className="px-5 py-2.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 font-semibold text-xs transition"
        >
          Browse Catalogue
        </Link>
      </div>
    </main>
  );
}
