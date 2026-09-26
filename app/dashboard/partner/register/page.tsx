import Link from 'next/link';

const steps = ['Basic Details', 'Business Type', 'Business Details', 'Bank Details', 'Documents'];

export default function PartnerRegisterPage() {
  return (
    <div className="min-h-screen bg-slate-100 px-4 py-12">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-600">Partner registration</div>
            <h1 className="mt-3 text-3xl font-black text-slate-900">Complete your profile</h1>
          </div>
          <Link href="/dashboard/partner/login" className="text-sm font-semibold text-slate-700 underline decoration-amber-500 underline-offset-4">
            Back to login
          </Link>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Step {index + 1}</div>
              <div className="mt-2 text-sm font-medium text-slate-800">{step}</div>
            </div>
          ))}
        </div>

        <form className="mt-8 space-y-8">
          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Partner Name</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="Aman Shah" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Mobile</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="9876543210" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="aman@sunbeamenergy.in" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Business Type</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none">
                <option>Proprietorship</option>
                <option>Partnership</option>
                <option>LLP</option>
                <option>Private Limited</option>
                <option>OPC</option>
                <option>NGO</option>
                <option>Other</option>
              </select>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Firm Name</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="Sunbeam Energy Solutions" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">GST Number</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="24ABCDE1234F1Z5" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">PAN</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="ABCDE1234F" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">CIN / LLPIN</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="U74999GJ2020PTC123456" />
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">Business Address</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="34 Solar Road, Ahmedabad, Gujarat" />
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Account Holder Name</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="Aman Shah" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Account Number</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="123456789012" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">IFSC</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="HDFC0001234" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Bank Name</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none" defaultValue="HDFC Bank" />
            </div>
          </section>

          <section>
            <div className="mb-4 text-lg font-bold text-slate-900">Upload documents</div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {['PAN', 'Aadhaar', 'GST Certificate', 'Cancelled Cheque', 'Business Registration', 'Address Proof', 'Profile Photo'].map((label) => (
                <div key={label} className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm font-medium text-slate-700">
                  {label}
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-end">
            <Link href="/dashboard/partner" className="inline-flex rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-400">
              Save profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
