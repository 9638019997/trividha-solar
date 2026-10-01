'use client';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PartnerLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/dashboard/partner';

  const [partnerId, setPartnerId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(redirect);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Partner Portal Login</h2>
        <p className="text-sm text-gray-500 text-center mt-1">Channel Partners & EPC Contractors</p>
        
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Partner ID / Email</label>
            <input 
              type="text" 
              required 
              value={partnerId} 
              onChange={(e) => setPartnerId(e.target.value)} 
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" 
              placeholder="PTR-10023 or partner@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-amber-500 focus:border-amber-500" 
              placeholder="••••••••" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-sm transition"
          >
            Sign In to Partner Portal
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Not a registered partner yet?{' '}
          <Link href="/partner/register" className="text-amber-600 font-semibold hover:underline">
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}
