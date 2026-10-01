import Link from 'next/link';
import HRMSNav from '@/components/hrms/HRMSNav';
import { mockEmployees } from '@/lib/mock/hrmsData';

export default function EmployeesListPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Directory</h1>
          <p className="text-sm text-gray-500">Corporate engineers, solar technicians, and executive leadership profiles.</p>
        </div>
      </div>

      <HRMSNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Emp Code</th>
              <th className="py-3 px-4">Full Name</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">Salary</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockEmployees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{emp.empCode}</td>
                <td className="py-3 px-4">
                  <p className="font-semibold text-gray-800">{emp.fullName}</p>
                  <span className="text-xs text-gray-400">{emp.designation}</span>
                </td>
                <td className="py-3 px-4 text-gray-600">{emp.department}</td>
                <td className="py-3 px-4 text-gray-600 text-xs">
                  <p>{emp.phone}</p>
                  <p className="text-gray-400">{emp.email}</p>
                </td>
                <td className="py-3 px-4 font-bold text-gray-900">₹{emp.monthlySalary.toLocaleString('en-IN')}/mo</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                    {emp.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Link href={`/dashboard/hrms/employees/${emp.id}`} className="text-amber-600 font-semibold hover:underline">
                    View Profile →
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
