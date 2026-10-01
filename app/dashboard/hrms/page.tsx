import Link from 'next/link';
import HRMSNav from '@/components/hrms/HRMSNav';
import {
  mockEmployees,
  mockAttendance,
  mockLeaves,
  mockPayroll,
} from '@/lib/mock/hrmsData';

export default function HRMSDashboardPage() {
  const totalEmployees = mockEmployees.length;
  const presentToday = mockAttendance.filter((a) => a.status === 'Present' || a.status === 'Site Visit').length;
  const pendingLeaves = mockLeaves.filter((l) => l.status === 'Pending').length;
  const monthlySalaryOutflow = mockPayroll.reduce((acc, p) => acc + p.netPayable, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">HR & Employee Management ERP</h1>
          <p className="text-sm text-gray-500">Corporate directory, solar field technician roaster, biometric attendance & payroll automation.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/hrms/employees" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition-colors">
            + Onboard Employee
          </Link>
        </div>
      </div>

      <HRMSNav />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Total Staff Count</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{totalEmployees} <span className="text-sm font-normal text-gray-500">Members</span></p>
          <p className="text-xs text-emerald-600 mt-1">100% active staff</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">Today On-Duty</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">{presentToday} / {totalEmployees}</p>
          <p className="text-xs text-gray-400 mt-1">Includes rooftop site visits</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Pending Leave Requests</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">{pendingLeaves}</p>
          <p className="text-xs text-gray-400 mt-1">Requires manager approval</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Monthly Payroll Disbursed</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹{(monthlySalaryOutflow / 1000).toFixed(0)}k</p>
          <p className="text-xs text-emerald-600 mt-1">PF & PT deducted on time</p>
        </div>
      </div>

      {/* Employee Quick List */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900">Recent Employee Roster</h2>
          <Link href="/dashboard/hrms/employees" className="text-xs font-semibold text-amber-600 hover:underline">
            View All Directory →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">Code / Name</th>
                <th className="py-3 px-4">Designation</th>
                <th className="py-3 px-4">Department</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Joining Date</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockEmployees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <p className="font-semibold text-gray-900">{emp.fullName}</p>
                    <span className="text-xs text-gray-400 font-mono">{emp.empCode}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-800 font-medium">{emp.designation}</td>
                  <td className="py-3 px-4 text-gray-600">{emp.department}</td>
                  <td className="py-3 px-4 text-gray-600">{emp.baseLocation}</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">{emp.joiningDate}</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800">
                      {emp.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
