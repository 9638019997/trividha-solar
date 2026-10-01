import OMNav from '@/components/om/OMNav';

export default function OMReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">O&M Operational Audit Reports</h1>
        <p className="text-sm text-gray-500">Service SLA compliance, breakdown MTTR, and technician efficiency metrics.</p>
      </div>

      <OMNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Key SLA Performance Metrics</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">First-Response SLA (&lt; 24h)</span>
              <span className="font-bold text-emerald-600">98.5%</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Mean Time to Repair (MTTR)</span>
              <span className="font-semibold text-gray-800">3.2 Hours</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">AMC Renewal Retention Rate</span>
              <span className="font-bold text-emerald-600">94.0%</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Routine Washing & Cleaning Quota</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Scheduled Washes This Month</span>
              <span className="font-semibold text-gray-800">40 Sites</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Completed On-Time</span>
              <span className="font-semibold text-emerald-600">38 Sites (95%)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
