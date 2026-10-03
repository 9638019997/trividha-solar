import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm p-6 bg-slate-900 border border-slate-800 rounded-xl text-center">
        <h1 className="text-xl font-bold text-white mb-2">Trividha Console Login</h1>
        <p className="text-xs text-slate-400 mb-6">Enter your credentials to access the enterprise platform.</p>
        
        <form className="space-y-4 text-left">
          <div>
            <label className="text-xs text-slate-300 block mb-1">Email / Username</label>
            <input 
              type="text" 
              placeholder="admin@trividhasolar.com" 
              className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="text-xs text-slate-300 block mb-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-3 py-2 text-xs bg-slate-800 border border-slate-700 rounded text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>
          <Link
            href="/dashboard"
            className="block text-center w-full py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs rounded transition mt-4"
          >
            Sign In to Dashboard
          </Link>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-800 text-[11px] text-slate-500">
          <Link href="/" className="hover:text-amber-400">← Back to Main Website</Link>
        </div>
      </div>
    </main>
  );
}
