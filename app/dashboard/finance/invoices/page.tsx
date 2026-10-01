import Link from 'next/link';
import FinanceNav from '@/components/finance/FinanceNav';
import { mockInvoices } from '@/lib/mock/financeData';

export default function InvoicesListPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tax Invoices & Billing</h1>
          <p className="text-sm text-gray-500">GST compliant tax invoices for solar projects and service contracts.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Generate Tax Invoice
        </button>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Invoice No</th>
              <th className="py-3 px-4">Customer</th>
              <th className="py-3 px-4">Project Ref</th>
              <th className="py-3 px-4">Billing Date</th>
              <th className="py-3 px-4">Grand Total</th>
              <th className="py-3 px-4">Paid</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockInvoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{inv.invoiceNo}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{inv.customerName}</td>
                <td className="py-3 px-4 text-gray-600">{inv.projectCode}</td>
                <td className="py-3 px-4 text-gray-500">{inv.billingDate}</td>
                <td className="py-3 px-4 font-bold text-gray-900">₹{inv.grandTotal.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-emerald-600 font-semibold">₹{inv.paidAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    inv.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Link href={`/dashboard/finance/invoices/${inv.id}`} className="text-amber-600 font-semibold hover:underline">
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
