import OMNav from '@/components/om/OMNav';
import { mockTechnicians } from '@/lib/mock/omData';

export default function TechniciansPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Field Service Technicians</h1>
          <p className="text-sm text-gray-500">Service roster, regional dispatch, and technician task completion.</p>
        </div>
      </div>

      <OMNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTechnicians.map((t) => (
          <div key={t.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{t.name}</h3>
                <p className="text-xs text-gray-500">{t.assignedRegion}</p>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs font-semibold ${
                t.isAvailableToday ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-700'
              }`}>
                {t.isAvailableToday ? 'On Duty' : 'Off Duty'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="font-medium text-gray-800">{t.phone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Base Depot</p>
                <p className="font-medium text-gray-800">{t.baseCity}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Active Work Orders</p>
                <p className="font-bold text-amber-600">{t.activeTickets} Sites</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Completed This Month</p>
                <p className="font-bold text-emerald-600">{t.completedVisitsThisMonth} Visits</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
