import Link from 'next/link';
import FinanceNav from '@/components/finance/FinanceNav';
import {
  mockCustomerLedgers,
  mockVendorLedgers,
  mockExpenses,
  mockPayments,
} from '@/lib/mock/financeData';

export default function FinanceDashboardPage() {
  const totalRevenue = mockCustomerLedgers.reduce((acc, c) => acc + c.totalBilled, 0);
  const receivedRevenue = mockCustomerLedgers.reduce((acc, c) => acc + c.paidAmount, 0);
  const outstandingReceivable = mockCustomerLedgers.reduce((acc, c) => acc + c.outstandingBalance, 0);
  const totalVendorPurchases = mockVendorLedgers.reduce((acc, v) => acc + v.totalPurchased, 0);
  const totalExpenses = mockExpenses.reduce((acc, e) => acc + e.amount, 0) + totalVendorPurchases;
  const grossProfit = totalRevenue - totalVendorPurchases;
  const netProfit = grossProfit - mockExpenses.reduce((acc, e) => acc + e.amount, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Finance & Accounting ERP</h1>
          <p className="text-sm text-gray-500">Corporate balance sheet, billing, cash flow, GST, and profit & loss analytics.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/finance/invoices" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition-colors">
            + New Invoice
          </Link>
        </div>
      </div>

      <FinanceNav />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Total Revenue (Billed)</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹{(totalRevenue / 100000).toFixed(2)} <span className="text-sm font-normal text-gray-500">Lakhs</span></p>
          <p className="text-xs text-emerald-600 mt-1">₹{(receivedRevenue / 100000).toFixed(2)} L Collected</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Outstanding Receivables</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">₹{(outstandingReceivable / 100000).toFixed(2)} <span className="text-sm font-normal text-gray-500">Lakhs</span></p>
          <p className="text-xs text-gray-400 mt-1">From active installations</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Gross Profit Margin</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹{(grossProfit / 100000).toFixed(2)} <span className="text-sm font-normal text-gray-500">Lakhs</span></p>
          <p className="text-xs text-emerald-600 mt-1">{((grossProfit / totalRevenue) * 100).toFixed(1)}% Gross Margin</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">Net Operating Profit</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">₹{(netProfit / 100000).toFixed(2)} <span className="text-sm font-normal text-gray-500">Lakhs</span></p>
          <p className="text-xs text-gray-500 mt-1">Post operational overheads</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <h2 className="font-semibold text-gray-900">Recent Cash Inflow & Outflow</h2>
            <Link href="/dashboard/finance/payments" className="text-xs font-semibold text-amber-600 hover:underline">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {mockPayments.map((txn) => (
              <div key={txn.id} className="flex justify-between items-center p-3 rounded-lg bg-gray-50 border border-gray-100 text-sm">
                <div>
                  <p className="font-medium text-gray-900">{txn.partyName}</p>
                  <p className="text-xs text-gray-500">{txn.type} • {txn.mode} • {txn.date}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${txn.type.includes('Collection') ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {txn.type.includes('Collection') ? '+' : '-'}₹{txn.amount.toLocaleString('en-IN')}
                  </p>
                  <span className="text-[10px] font-semibold text-gray-400 capitalize">{txn.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3">
            <h2 className="font-semibold text-gray-900">Operational Overheads</h2>
            <Link href="/dashboard/finance/expenses" className="text-xs font-semibold text-amber-600 hover:underline">
              Expense Log →
            </Link>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Material & OEM Procurement</span>
                <span className="font-semibold">₹{(totalVendorPurchases / 100000).toFixed(2)} L ({((totalVendorPurchases / totalExpenses) * 100).toFixed(0)}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-600 h-2 rounded-full" style={{ width: '97%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Office, Logistics & Labour</span>
                <span className="font-semibold">₹{(mockExpenses.reduce((a, b) => a + b.amount, 0) / 1000).toFixed(0)}k</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '3%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
