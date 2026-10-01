import OMNav from '@/components/om/OMNav';
import { mockServiceRequests } from '@/lib/mock/omData';

export default function ServicesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Field Service & Maintenance Tickets</h1>
          <p className="text-sm text-gray-500">Track technician visits, routine module washing, and on-site servicing.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + New Service Ticket
        </button>
      </div>

      <OMNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Ticket No</th>
              <th className="py-3 px-4">Plant Name</th>
              <th className="py-3 px-4">Service Type</th>
              <th className="py-3 px-4">Scheduled Date</th>
              <th className="py-3 px-4">Technician</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockServiceRequests.map((s) => (
              <tr key={s.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{s.ticketNo}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{s.plantName}</td>
                <td className="py-3 px-4 text-gray-600">{s.serviceType}</td>
                <td className="py-3 px-4 text-gray-500">{s.scheduledDate}</td>
                <td className="py-3 px-4 font-medium text-gray-700">{s.assignedTechnician}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded uppercase ${
                    s.priority === 'high' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {s.priority}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-full capitalize bg-blue-100 text-blue-800">
                    {s.status.replace('_', ' ')}
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
