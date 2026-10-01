import FinanceNav from '@/components/finance/FinanceNav';
import { mockPayments } from '@/lib/mock/financeData';

export default function PaymentsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payments & Receipts History</h1>
          <p className="text-sm text-gray-500">Customer payments collection, vendor settlements, and refund logs.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Record Payment
        </button>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Transaction Ref</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Party / Name</th>
              <th className="py-3 px-4">Transaction Type</th>
              <th className="py-3 px-4">Payment Mode</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPayments.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-medium text-gray-900">{p.txnRef}</td>
                <td className="py-3 px-4 text-gray-500">{p.date}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">{p.partyName}</td>
                <td className="py-3 px-4 text-gray-600">{p.type}</td>
                <td className="py-3 px-4 text-gray-600">{p.mode}</td>
                <td className="py-3 px-4 font-bold text-gray-900">₹{p.amount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 text-xs bg-emerald-100 text-emerald-800 rounded font-semibold capitalize">
                    {p.status}
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
