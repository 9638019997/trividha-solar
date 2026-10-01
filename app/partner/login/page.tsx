'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PartnerLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');

  const [role, setRole] = useState('channel');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const roleLabels: Record<string, { title: string; placeholder: string; target: string }> = {
    channel: { title: 'Channel Partner', placeholder: 'PTR-10023 or email', target: '/dashboard/partner' },
    agent: { title: 'Independent Agent', placeholder: 'AGT-5501 or mobile', target: '/dashboard/crm' },
    transport: { title: 'Transport Partner', placeholder: 'TRP-3021 or mobile', target: '/dashboard/inventory' },
    epc: { title: 'EPC Partner', placeholder: 'EPC-4011 or email', target: '/dashboard/projects' },
    installation: { title: 'Installation Partner', placeholder: 'INS-2045 or mobile', target: '/dashboard/projects' }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(redirect || roleLabels[role]?.target || '/dashboard/partner');
  };

  const handleOAuthLogin = (provider: string) => {
    router.push(redirect || roleLabels[role]?.target || '/dashboard/partner');
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-white flex flex-col justify-center items-center p-4 md:p-8 font-sans">
      {/* Top Bar Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-6">
        <div>
          <span className="text-[11px] font-bold tracking-widest text-amber-500 uppercase">TRIVIDHA SOLAR</span>
          <h1 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">Enterprise dashboard</h1>
        </div>
      </div>

      {/* Main Dual Card Container */}
      <div className="w-full max-w-4xl bg-[#eef1f6] rounded-[2rem] p-4 md:p-6 shadow-2xl flex flex-col md:flex-row gap-6 border border-gray-200">
        
        {/* Left Dark Card */}
        <div className="w-full md:w-1/2 bg-[#0d1527] rounded-3xl p-8 md:p-10 flex flex-col justify-between text-white shadow-lg">
          <div>
            <span className="text-[11px] font-extrabold tracking-widest text-amber-500 uppercase">
              PARTNER PORTAL
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-4 tracking-tight">
              Welcome back
            </h2>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Sign in to manage solar projects, leads, survey allocations, commission payouts and support.
            </p>
          </div>

          <div className="mt-8 space-y-3.5 text-xs text-gray-300 font-medium">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Secure partner & agent access</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Google, Microsoft, Yahoo & Corporate SSO</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              <span>Multi-tier enterprise project management</span>
            </div>
          </div>
        </div>

        {/* Right White Card */}
        <div className="w-full md:w-1/2 bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center shadow-lg border border-gray-100">
          <div className="w-full max-w-xs space-y-3">
            
            {/* Crisp HD Vector Logo */}
            <div className="flex flex-col items-center justify-center pb-2">
              <div className="w-16 h-16 relative flex items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-3 shadow-md shadow-amber-500/20">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full text-white" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Central Sun */}
                  <circle cx="20" cy="20" r="7" fill="currentColor" fillOpacity="0.25" />
                  {/* Rays */}
                  <line x1="20" y1="4" x2="20" y2="8" />
                  <line x1="20" y1="32" x2="20" y2="36" />
                  <line x1="4" y1="20" x2="8" y2="20" />
                  <line x1="32" y1="20" x2="36" y2="20" />
                  <line x1="8.69" y1="8.69" x2="11.52" y2="11.52" />
                  <line x1="28.48" y1="28.48" x2="31.31" y2="31.31" />
                  <line x1="8.69" y1="31.31" x2="11.52" y2="28.48" />
                  <line x1="28.48" y1="11.52" x2="31.31" y2="8.69" />
                </svg>
              </div>
              <span className="mt-2 text-sm font-black tracking-wider text-gray-900 uppercase">
                TRIVIDHA <span className="text-amber-600">SOLAR</span>
              </span>
            </div>

            {/* Select Partner Role */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-1 text-center">
                Select Partner Type
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs font-semibold text-gray-800 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="channel">🏢 Channel Partner</option>
                <option value="agent">💼 Independent Agent</option>
                <option value="transport">🚚 Transport Partner</option>
                <option value="epc">⚡ EPC Partner</option>
                <option value="installation">🔧 Installation Partner</option>
              </select>
            </div>

            {/* Social Logins */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => handleOAuthLogin('google')}
                className="w-full py-2 px-3 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold flex items-center justify-center gap-2.5 transition"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                onClick={() => handleOAuthLogin('microsoft')}
                className="w-full py-2 px-3 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold flex items-center justify-center gap-2.5 transition"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 21 21">
                  <rect x="1" y="1" width="9" height="9" fill="#f25022" />
                  <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
                  <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
                  <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
                </svg>
                <span>Continue with Microsoft 365</span>
              </button>

              <button
                type="button"
                onClick={() => handleOAuthLogin('yahoo')}
                className="w-full py-2 px-3 rounded-xl border border-gray-300 hover:bg-purple-50 text-gray-700 text-xs font-semibold flex items-center justify-center gap-2.5 transition"
              >
                <div className="w-4 h-4 shrink-0 rounded-full bg-[#6001d2] flex items-center justify-center text-white text-[10px] font-black italic">
                  Y!
                </div>
                <span>Continue with Yahoo Mail</span>
              </button>

              <button
                type="button"
                onClick={() => handleOAuthLogin('corporate')}
                className="w-full py-2 px-3 rounded-xl border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-semibold flex items-center justify-center gap-2.5 transition"
              >
                <svg className="w-4 h-4 shrink-0 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Any Work / Company Email</span>
              </button>
            </div>

            {/* Credentials / Password Button */}
            {!showPasswordForm ? (
              <button
                type="button"
                onClick={() => setShowPasswordForm(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs md:text-sm font-bold shadow-md shadow-amber-500/30 transition text-center"
              >
                Continue with ID / Password
              </button>
            ) : (
              <form onSubmit={handleLogin} className="space-y-2 pt-1">
                <input
                  type="text"
                  required
                  placeholder={`${roleLabels[role]?.title} ID / Email`}
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-1.5 border border-gray-300 rounded-xl text-xs focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow transition"
                >
                  Sign In
                </button>
              </form>
            )}

            <div className="pt-1 text-center text-xs text-gray-500">
              New partner?{' '}
              <Link href="/partner/register" className="text-gray-900 font-bold hover:underline">
                Create account
              </Link>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function PartnerLoginPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading portal...</div>}>
      <PartnerLoginForm />
    </Suspense>
  );
}
