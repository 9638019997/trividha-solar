import HRMSNav from '@/components/hrms/HRMSNav';
import { mockAttendance } from '@/lib/mock/hrmsData';

export default function AttendancePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Daily Attendance & Site Geo-Punch</h1>
          <p className="text-sm text-gray-500">Track head office check-ins and remote solar site field technician check-ins.</p>
        </div>
      </div>

      <HRMSNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Emp Code</th>
              <th className="py-3 px-4">Staff Member</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">In Time</th>
              <th className="py-3 px-4">Out Time</th>
              <th className="py-3 px-4">Assigned Location</th>
              <th className="py-3 px-4">Attendance Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockAttendance.map((att) => (
              <tr key={att.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-medium text-gray-900">{att.empCode}</td>
                <td className="py-3 px-4 font-semibold text-gray-800">{att.employeeName}</td>
                <td className="py-3 px-4 text-gray-500">{att.date}</td>
                <td className="py-3 px-4 font-medium text-emerald-600">{att.inTime}</td>
                <td className="py-3 px-4 font-medium text-gray-600">{att.outTime}</td>
                <td className="py-3 px-4 text-gray-700">{att.workLocation}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                    att.status === 'Present'
                      ? 'bg-emerald-100 text-emerald-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {att.status}
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
