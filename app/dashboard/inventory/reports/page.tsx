import InventoryNav from '@/components/inventory/InventoryNav';

export default function InventoryReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Inventory Analytics & Audit Reports</h1>
        <p className="text-sm text-gray-500">Valuation audit, warehouse utilization, and vendor fulfillment rates.</p>
      </div>

      <InventoryNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Material Category Valuation Ratio</h3>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Solar PV Modules (540W Mono)</span>
                <span className="font-semibold">₹39.1 L (64%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '64%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Inverters (On-Grid 5kW / 10kW)</span>
                <span className="font-semibold">₹13.4 L (22%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Structures & Cables (BOS)</span>
                <span className="font-semibold">₹8.5 L (14%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Procurement & Warehouse KPI</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Vendor On-Time Delivery Rate</span>
              <span className="font-semibold text-emerald-600">96.2%</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Average GRN Inspection Turnaround</span>
              <span className="font-semibold text-gray-800">4.5 Hours</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Inventory Shrinkage / Discrepancy Rate</span>
              <span className="font-semibold text-emerald-600">0.02%</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
