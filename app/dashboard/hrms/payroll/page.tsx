import Link from 'next/link';
import HRMSNav from '@/components/hrms/HRMSNav';
import { mockPayroll } from '@/lib/mock/hrmsData';

export default function PayrollPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Payroll & Salary Register</h1>
          <p className="text-sm text-gray-500">Monthly salary calculation, PF/ESIC/PT deductions, and pay slip issuance.</p>
        </div>
      </div>

      <HRMSNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">Month</th>
              <th className="py-3 px-4">Gross Earnings</th>
              <th className="py-3 px-4">Site Incentive</th>
              <th className="py-3 px-4">Total Deductions</th>
              <th className="py-3 px-4">Net Payable</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Pay Slip</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPayroll.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  {p.employeeName}
                  <span className="block text-xs font-normal text-gray-400">{p.designation}</span>
                </td>
                <td className="py-3 px-4 text-gray-600">{p.month}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">₹{p.grossEarnings.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-emerald-600 font-medium">+₹{p.siteIncentive.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-rose-600 font-medium">-₹{(p.pfDeduction + p.ptDeduction).toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-bold text-gray-900">₹{p.netPayable.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                    {p.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Link href={`/dashboard/hrms/payroll/slips/${p.id}`} className="text-amber-600 font-semibold hover:underline">
                    View Slip →
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
