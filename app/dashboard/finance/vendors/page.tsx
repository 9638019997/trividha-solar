import FinanceNav from '@/components/finance/FinanceNav';
import { mockVendorLedgers } from '@/lib/mock/financeData';

export default function VendorLedgersPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Vendor Accounts & Payables</h1>
        <p className="text-sm text-gray-500">Manage supplier bills, purchase orders settlements, and payment schedules.</p>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Vendor</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Total Purchases</th>
              <th className="py-3 px-4">Amount Paid</th>
              <th className="py-3 px-4">Outstanding Due</th>
              <th className="py-3 px-4">Due Date</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockVendorLedgers.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  {v.vendorName}
                  <span className="block text-xs font-normal text-gray-400">Attn: {v.contactPerson}</span>
                </td>
                <td className="py-3 px-4 text-gray-600">{v.category}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">₹{v.totalPurchased.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-semibold text-emerald-600">₹{v.paidAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-bold text-rose-600">₹{v.outstandingBill.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{v.dueBy}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    v.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {v.status}
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
