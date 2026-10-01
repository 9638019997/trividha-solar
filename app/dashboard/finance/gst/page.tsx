import FinanceNav from '@/components/finance/FinanceNav';

export default function GSTSummaryPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">GST Returns & Tax Compliance (GSTR-1 & 3B)</h1>
        <p className="text-sm text-gray-500">Output tax on solar installations and Input Tax Credit (ITC) claims on solar panels and inverters.</p>
      </div>

      <FinanceNav />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Total Output GST (Liability)</p>
          <p className="text-2xl font-bold text-rose-600 mt-2">₹1,05,254</p>
          <p className="text-xs text-gray-400 mt-1">From Invoices Generated</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Input Tax Credit (ITC Available)</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">₹2,07,000</p>
          <p className="text-xs text-gray-400 mt-1">From Waaree & PowerVolt bills</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Net GST Payable / (Credit Forward)</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">(₹1,01,746)</p>
          <p className="text-xs text-emerald-600 mt-1">Accumulated ITC carryforward</p>
        </div>
      </div>
    </div>
  );
}
