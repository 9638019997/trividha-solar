import FinanceNav from '@/components/finance/FinanceNav';
import { mockLoans } from '@/lib/mock/financeData';

export default function LoansPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">JanSamarth Solar Loans & EMI Schedules</h1>
        <p className="text-sm text-gray-500">Government rooftop solar subsidized financing and loan facilitation tracking.</p>
      </div>

      <FinanceNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Loan App ID</th>
              <th className="py-3 px-4">Customer Name</th>
              <th className="py-3 px-4">Lender / Scheme</th>
              <th className="py-3 px-4">Sanction Amount</th>
              <th className="py-3 px-4">Interest</th>
              <th className="py-3 px-4">Tenure</th>
              <th className="py-3 px-4">Est. EMI</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockLoans.map((loan) => (
              <tr key={loan.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-medium text-amber-600">{loan.loanId}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">{loan.applicantName}</td>
                <td className="py-3 px-4">
                  <p className="text-gray-900 font-medium">{loan.bankName}</p>
                  <p className="text-xs text-gray-500">{loan.scheme}</p>
                </td>
                <td className="py-3 px-4 font-bold text-gray-900">₹{loan.sanctionedAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4 text-gray-700">{loan.interestRatePercent}% p.a.</td>
                <td className="py-3 px-4 text-gray-700">{loan.tenureMonths} Months</td>
                <td className="py-3 px-4 font-semibold text-emerald-600">₹{loan.emiAmount.toLocaleString('en-IN')}/mo</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 text-xs font-semibold rounded capitalize bg-blue-100 text-blue-800">
                    {loan.status}
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
