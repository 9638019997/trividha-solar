import OMNav from '@/components/om/OMNav';

export default function MonitoringPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Performance Monitoring & PR Analytics</h1>
        <p className="text-sm text-gray-500">Daily solar irradiation, PR curve, and inverter yield analysis.</p>
      </div>

      <OMNav />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Average Fleet PR</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">80.4%</p>
          <p className="text-xs text-gray-400 mt-1">Target benchmark: >= 78%</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Estimated Daily Generation</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">284.7 kWh</p>
          <p className="text-xs text-gray-400 mt-1">Across 65kW Total Capacity</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase text-gray-500 font-semibold">Carbon Offset Today</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">233.5 kg CO2</p>
          <p className="text-xs text-gray-400 mt-1">Equivalent to 11 trees planted</p>
        </div>
      </div>
    </div>
  );
}
