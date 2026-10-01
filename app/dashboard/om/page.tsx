import Link from 'next/link';
import OMNav from '@/components/om/OMNav';
import {
  mockPlants,
  mockServiceRequests,
  mockBreakdowns,
} from '@/lib/mock/omData';

export default function OMDashboardPage() {
  const totalCapacity = mockPlants.reduce((acc, p) => acc + p.capacityKw, 0);
  const activePlantsCount = mockPlants.filter((p) => p.status === 'operational').length;
  const pendingServicesCount = mockServiceRequests.filter((s) => s.status !== 'completed').length;
  const openBreakdowns = mockBreakdowns.filter((b) => b.status !== 'Resolved').length;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Operations & Maintenance (O&M) ERP</h1>
          <p className="text-sm text-gray-500">Solar rooftop telemetry, preventive maintenance, fault resolution & AMC tracking.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/om/services" className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm shadow-sm transition-colors">
            + Log Service Request
          </Link>
        </div>
      </div>

      <OMNav />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Capacity Under O&M</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{totalCapacity} <span className="text-sm font-normal text-gray-500">kWp</span></p>
          <p className="text-xs text-emerald-600 mt-1">{mockPlants.length} Monitored Installations</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-emerald-600 font-semibold">Active Fleet Health</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">{((activePlantsCount / mockPlants.length) * 100).toFixed(0)}%</p>
          <p className="text-xs text-gray-400 mt-1">{activePlantsCount} of {mockPlants.length} fully optimal</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Pending Service Jobs</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">{pendingServicesCount} <span className="text-sm font-normal text-gray-500">Tickets</span></p>
          <p className="text-xs text-amber-700 mt-1">Technicians dispatched</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-rose-600 font-semibold">Active Breakdowns</p>
          <p className="text-2xl font-bold text-rose-600 mt-2">{openBreakdowns} <span className="text-sm font-normal text-gray-500">Unresolved</span></p>
          <p className="text-xs text-gray-500 mt-1">Avg MTTR: 3.2 Hours</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900">Rooftop Solar Fleet Telemetry</h2>
          <Link href="/dashboard/om/plants" className="text-xs font-semibold text-amber-600 hover:underline">
            All Plants →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">Plant Code / Customer</th>
                <th className="py-3 px-4">Capacity</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Today Generation</th>
                <th className="py-3 px-4">Performance Ratio (PR)</th>
                <th className="py-3 px-4">Plant Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockPlants.map((plant) => (
                <tr key={plant.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <p className="font-semibold text-gray-900">{plant.name}</p>
                    <span className="text-xs text-gray-400 font-mono">{plant.plantCode}</span>
                  </td>
                  <td className="py-3 px-4 font-bold text-gray-800">{plant.capacityKw} kW</td>
                  <td className="py-3 px-4 text-gray-600">{plant.city}</td>
                  <td className="py-3 px-4 text-emerald-600 font-medium">{plant.todayGenKwh} kWh</td>
                  <td className="py-3 px-4 font-semibold text-gray-800">{plant.performanceRatio}%</td>
                  <td className="py-3 px-4">
                    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                      plant.status === 'operational'
                        ? 'bg-emerald-100 text-emerald-800'
                        : plant.status === 'degraded'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}>
                      {plant.status}
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
