import FinanceNav from '@/components/finance/FinanceNav';
import { mockExpenses } from '@/lib/mock/financeData';

export default function ExpensesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Corporate & Site Expense Management</h1>
          <p className="text-sm text-gray-500">Track daily site overheads, crane rentals, labour wages, and office expenses.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Add Expense Voucher
        </button>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Description</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Paid To</th>
              <th className="py-3 px-4">Amount</th>
              <th className="py-3 px-4">Approved By</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockExpenses.map((exp) => (
              <tr key={exp.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">{exp.title}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded font-medium">
                    {exp.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500">{exp.date}</td>
                <td className="py-3 px-4 text-gray-700">{exp.paidTo}</td>
                <td className="py-3 px-4 font-bold text-rose-600">₹{exp.amount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-gray-600 text-xs">{exp.approvedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
