import ProjectNav from '@/components/projects/ProjectNav';

export default function ReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Project Reports & Metrics</h1>
        <p className="text-sm text-gray-500">Installation pace, lead times, capacity distribution, and efficiency metrics.</p>
      </div>

      <ProjectNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Capacity Breakdown by Category</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Commercial / Industrial (&gt;20kW)</span>
                <span className="font-semibold">50 kW (77%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '77%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Residential (1kW - 10kW)</span>
                <span className="font-semibold">15 kW (23%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '23%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Turnaround Performance</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Average Survey Turnaround</span>
              <span className="font-semibold text-gray-800">2.4 Days</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Installation to Metering Avg.</span>
              <span className="font-semibold text-gray-800">14.1 Days</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">On-time Completion Rate</span>
              <span className="font-semibold text-emerald-600">92.5%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
