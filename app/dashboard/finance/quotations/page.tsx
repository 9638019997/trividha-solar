import Link from 'next/link';
import FinanceNav from '@/components/finance/FinanceNav';
import { mockQuotations } from '@/lib/mock/financeData';

export default function QuotationsListPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Solar Quotations & Estimates</h1>
          <p className="text-sm text-gray-500">Generate, track, and manage client technical quotations.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Create Quotation
        </button>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Quote No</th>
              <th className="py-3 px-4">Client</th>
              <th className="py-3 px-4">Capacity</th>
              <th className="py-3 px-4">Base Amount</th>
              <th className="py-3 px-4">GST (18%)</th>
              <th className="py-3 px-4">Total Quote</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockQuotations.map((q) => (
              <tr key={q.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{q.quoteNo}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{q.clientName}</td>
                <td className="py-3 px-4 text-gray-700">{q.systemSizeKw} kW</td>
                <td className="py-3 px-4 text-gray-600">₹{q.baseAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-gray-600">₹{q.gstAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-bold text-gray-900">₹{q.totalAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    q.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {q.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Link href={`/dashboard/finance/quotations/${q.id}`} className="text-amber-600 font-semibold hover:underline">
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
