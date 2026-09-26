import Link from 'next/link';

const steps = [
  'Google Login or Mobile OTP',
  'Basic Details',
  'Property Details',
  'Address',
  'Electricity Information',
  'Upload Documents',
];

export default function CustomerRegisterPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-5xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Customer registration</div>
            <h1 className="mt-3 text-3xl font-black text-slate-900">Complete your profile</h1>
          </div>
          <Link href="/dashboard/customer/login" className="text-sm font-semibold text-slate-700 underline decoration-amber-500 underline-offset-4">
            Back to login
          </Link>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</div>
              <div className="mt-2 text-sm font-medium text-slate-800">{step}</div>
            </div>
          ))}
        </div>

        <form className="mt-8 space-y-8">
          <section className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Full Name</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="Riya Patel" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Mobile</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="9876543210" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="riya@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Property Type</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0">
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Agriculture</option>
              </select>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">State</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="Gujarat" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">District</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="Ahmedabad" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">City</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="Ahmedabad" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">PIN Code</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="380001" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Full Address</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="12 Solar Avenue, Bopal" />
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Electricity Company</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="UGVCL" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Consumer Number</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="A-1456789" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Monthly Electricity Bill</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="₹5,500" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Connected Load</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0" defaultValue="4.8 kW" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Phase</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0">
                <option>Single Phase</option>
                <option>Three Phase</option>
              </select>
            </div>
          </section>

          <section>
            <div className="mb-4 text-lg font-bold text-slate-900">Upload documents</div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {['Electricity Bill', 'Property Photo', 'Roof Photos', 'Identity Proof (Optional)'].map((label) => (
                <div key={label} className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {label}
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-end">
            <Link href="/dashboard/customer" className="inline-flex rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
              Save profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
