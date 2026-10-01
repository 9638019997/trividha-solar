import FinanceNav from '@/components/finance/FinanceNav';
import { mockCommissions } from '@/lib/mock/financeData';

export default function CommissionsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Partner & Agent Commission Settlements</h1>
        <p className="text-sm text-gray-500">Incentive calculations for channel partners and sales consultants.</p>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Beneficiary</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Project Ref</th>
              <th className="py-3 px-4">Order Value</th>
              <th className="py-3 px-4">Rate (%)</th>
              <th className="py-3 px-4">Commission</th>
              <th className="py-3 px-4">Payout Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockCommissions.map((c) => (
              <tr key={c.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">{c.beneficiaryName}</td>
                <td className="py-3 px-4 text-gray-600">{c.type}</td>
                <td className="py-3 px-4 text-gray-700">{c.projectRef}</td>
                <td className="py-3 px-4 text-gray-800">₹{c.orderValue.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 font-semibold text-gray-700">{c.commissionRatePercent}%</td>
                <td className="py-3 px-4 font-bold text-emerald-600">₹{c.commissionEarned.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded capitalize ${
                    c.payoutStatus === 'settled' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {c.payoutStatus}
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
