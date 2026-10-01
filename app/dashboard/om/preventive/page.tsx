import OMNav from '@/components/om/OMNav';
import { mockPreventiveSchedules } from '@/lib/mock/omData';

export default function PreventivePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Preventive Maintenance Schedules</h1>
          <p className="text-sm text-gray-500">Monthly DC array cleaning, quarterly torque audits, and inverter filter checks.</p>
        </div>
      </div>

      <OMNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Plant Name</th>
              <th className="py-3 px-4">Frequency</th>
              <th className="py-3 px-4">Next Due Date</th>
              <th className="py-3 px-4">Last Inspected</th>
              <th className="py-3 px-4">Lead Tech</th>
              <th className="py-3 px-4">Checklist Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPreventiveSchedules.map((prv) => (
              <tr key={prv.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-semibold text-gray-900">{prv.plantName}</td>
                <td className="py-3 px-4 text-gray-600">{prv.frequency}</td>
                <td className="py-3 px-4 font-bold text-amber-600">{prv.nextDueDate}</td>
                <td className="py-3 px-4 text-gray-500">{prv.lastDoneDate}</td>
                <td className="py-3 px-4 text-gray-700">{prv.assignedTech}</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                    {prv.checklistStatus}
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
