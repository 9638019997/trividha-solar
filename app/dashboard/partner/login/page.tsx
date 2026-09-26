'use client';

import Link from 'next/link';
import { createSupabaseClient } from '@/lib/supabase/client';

export default function PartnerLoginPage() {
  const handleGoogleSignIn = async () => {
    const supabase = createSupabaseClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard/partner` },
    });
  };

  const handleOtpSignIn = async () => {
    const supabase = createSupabaseClient();
    await supabase.auth.signInWithOtp({ phone: '9876543210' });
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="grid md:grid-cols-2">
          <div className="bg-slate-900 p-8 text-white md:p-10">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Channel partner</div>
            <h1 className="mt-6 text-4xl font-black">Partner login</h1>
            <p className="mt-4 max-w-sm text-slate-300">
              Manage leads, customer handoff, commission visibility, and project progress from one secure workspace.
            </p>
            <div className="mt-8 space-y-4 text-sm text-slate-300">
              <div>• Google sign-in</div>
              <div>• Mobile OTP access</div>
              <div>• Automatic profile creation</div>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="mb-8 flex items-center justify-center">
              <img src="/assets/trividha_logo.png" alt="Trividha Solar" className="h-12 w-auto" />
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Continue with Google
              </button>

              <button
                type="button"
                onClick={handleOtpSignIn}
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-amber-500 px-4 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
              >
                Continue with Mobile OTP
              </button>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
              New partner?{' '}
              <Link href="/dashboard/partner/register" className="font-semibold text-slate-900 underline decoration-amber-500 underline-offset-4">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
