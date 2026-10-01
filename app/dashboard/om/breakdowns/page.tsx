import OMNav from '@/components/om/OMNav';
import { mockBreakdowns } from '@/lib/mock/omData';

export default function BreakdownsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Breakdown & Fault Resolution ERP</h1>
          <p className="text-sm text-gray-500">Incident logging, downtime analysis, and emergency solar inverter repairs.</p>
        </div>
        <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Log Incident Fault
        </button>
      </div>

      <OMNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Incident ID</th>
              <th className="py-3 px-4">Plant Affected</th>
              <th className="py-3 px-4">Fault Category</th>
              <th className="py-3 px-4">Severity</th>
              <th className="py-3 px-4">Downtime</th>
              <th className="py-3 px-4">Logged Time</th>
              <th className="py-3 px-4">Resolution Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockBreakdowns.map((b) => (
              <tr key={b.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-rose-600">{b.incidentNo}</td>
                <td className="py-3 px-4 font-medium text-gray-900">{b.plantName}</td>
                <td className="py-3 px-4 text-gray-700">{b.category}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded uppercase ${
                    b.severity === 'high' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {b.severity}
                  </span>
                </td>
                <td className="py-3 px-4 font-bold text-gray-800">{b.downtimeHours} hrs</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{b.loggedDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                    b.status === 'Resolved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {b.status}
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
