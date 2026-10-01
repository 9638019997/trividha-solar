import HRMSNav from '@/components/hrms/HRMSNav';
import { mockLeaves } from '@/lib/mock/hrmsData';

export default function LeavesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leave Management & Approvals</h1>
          <p className="text-sm text-gray-500">Casual leaves, sick leaves, and annual paid time off tracking.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Apply for Leave
        </button>
      </div>

      <HRMSNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">Leave Type</th>
              <th className="py-3 px-4">From - To</th>
              <th className="py-3 px-4">Total Days</th>
              <th className="py-3 px-4">Reason</th>
              <th className="py-3 px-4">Approval Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockLeaves.map((l) => (
              <tr key={l.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">
                  {l.employeeName}
                  <span className="block text-xs font-normal text-gray-400">{l.empCode}</span>
                </td>
                <td className="py-3 px-4 text-gray-700">{l.leaveType}</td>
                <td className="py-3 px-4 text-gray-600 text-xs">{l.fromDate} to {l.toDate}</td>
                <td className="py-3 px-4 font-bold text-gray-800">{l.days} Days</td>
                <td className="py-3 px-4 text-gray-600 text-xs">{l.reason}</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                    {l.status}
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
