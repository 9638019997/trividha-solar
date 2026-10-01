'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  const [role, setRole] = useState('channel');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const roleLabels: Record<string, { title: string; placeholder: string; target: string }> = {
    channel: { title: 'Channel Partner', placeholder: 'PTR-10023 or email', target: '/dashboard/partner' },
    agent: { title: 'Independent Agent', placeholder: 'AGT-5501 or mobile', target: '/dashboard/crm' },
    transport: { title: 'Transport Partner', placeholder: 'TRP-3021 or mobile', target: '/dashboard/inventory' },
    epc: { title: 'EPC Partner', placeholder: 'EPC-4011 or email', target: '/dashboard/projects' },
    installation: { title: 'Installation Partner', placeholder: 'INS-2045 or mobile', target: '/dashboard/projects' }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (redirect) {
      router.push(redirect);
      return;
    }
    router.push(roleLabels[role]?.target || '/dashboard/partner');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Partner & Agent Portal</h2>
          <p className="text-sm text-gray-500 mt-1">Select your partner role to log in</p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Select Partner Type
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 font-medium focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
            >
              <option value="channel">🏢 Channel Partner</option>
              <option value="agent">💼 Independent Agent</option>
              <option value="transport">🚚 Transport Partner</option>
              <option value="epc">⚡ EPC Partner</option>
              <option value="installation">🔧 Installation Partner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {roleLabels[role]?.title} ID / Email / Mobile
            </label>
            <input 
              type="text" 
              required 
              value={identifier} 
              onChange={(e) => setIdentifier(e.target.value)} 
              className="mt-1 w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" 
              placeholder={roleLabels[role]?.placeholder} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password / OTP</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="mt-1 w-full px-3.5 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500" 
              placeholder="••••••••" 
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md transition"
          >
            Sign In as {roleLabels[role]?.title}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Not registered yet?{' '}
          <Link href="/partner/register" className="text-amber-600 font-semibold hover:underline">
            Become a Partner
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PartnerLoginPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading portal...</div>}>
      <LoginForm />
    </Suspense>
  );
}
