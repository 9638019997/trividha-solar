import FinanceNav from '@/components/finance/FinanceNav';
import { mockCustomerLedgers } from '@/lib/mock/financeData';

export default function CustomerLedgersPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Customer Accounts & Ledger</h1>
        <p className="text-sm text-gray-500">Track client invoicing, collections, and pending payment balances.</p>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Project Ref</th>
              <th className="py-3 px-4">Total Billed</th>
              <th className="py-3 px-4">Collected</th>
              <th className="py-3 px-4">Outstanding</th>
              <th className="py-3 px-4">Last Payment</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockCustomerLedgers.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  {item.customerName}
                  <span className="block text-xs font-normal text-gray-400">{item.contact}</span>
                </td>
                <td className="py-3 px-4 text-gray-700">{item.projectCode}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">₹{item.totalBilled.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-semibold text-emerald-600">₹{item.paidAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-bold text-rose-600">₹{item.outstandingBalance.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{item.lastPaymentDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    item.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
