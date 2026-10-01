import FinanceNav from '@/components/finance/FinanceNav';

export default function FinancialReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Audited Financial Statements & Reports</h1>
        <p className="text-sm text-gray-500">Corporate balance sheet, monthly profit & loss, and cash flow forecasts.</p>
      </div>

      <FinanceNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Key Financial Summary (FY 2025-26)</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Total Billed Revenue</span>
              <span className="font-bold text-gray-900">₹27,90,000</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Direct Cost of Goods Sold (COGS)</span>
              <span className="font-semibold text-rose-600">₹21,50,000</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Gross Solar Profit</span>
              <span className="font-bold text-emerald-600">₹6,40,000 (22.9%)</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Operating Overheads</span>
              <span className="font-semibold text-gray-700">₹55,300</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600 font-semibold">Net Operating Income (EBIT)</span>
              <span className="font-bold text-emerald-700">₹5,84,700</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Cash Collection Efficiency</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Debtor Days (DSO)</span>
              <span className="font-semibold text-gray-800">18.4 Days</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Average Collection Period</span>
              <span className="font-semibold text-gray-800">12 Days</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Current Ratio</span>
              <span className="font-semibold text-emerald-600">2.41 (Healthy)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
