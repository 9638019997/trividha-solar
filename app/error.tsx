'use client';

import React, { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('System Exception:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="inline-block px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-semibold mb-4">
        System Exception
      </div>
      <h1 className="text-3xl font-extrabold text-white mb-2">Unexpected Engine Interrupt</h1>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        An error occurred while rendering the clean energy portal. Our systems have logged this incident.
      </p>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition"
      >
        Try Again
      </button>
    </main>
  );
}
