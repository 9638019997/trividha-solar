import InventoryNav from '@/components/inventory/InventoryNav';
import { mockWarehouses } from '@/lib/mock/inventoryData';

export default function WarehousesPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Multi-Warehouse Network</h1>
          <p className="text-sm text-gray-500">Central depots, regional hubs, and on-site distribution centers.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Add Warehouse
        </button>
      </div>

      <InventoryNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockWarehouses.map((wh) => (
          <div key={wh.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{wh.name}</h3>
                <span className="text-xs font-mono text-gray-500">{wh.code}</span>
              </div>
              <span className="bg-amber-50 text-amber-800 text-xs px-2.5 py-1 rounded font-semibold border border-amber-200">
                Active Depot
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm border-t border-gray-100 pt-3">
              <div>
                <p className="text-xs text-gray-500">Location Address</p>
                <p className="font-medium text-gray-800">{wh.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Supervisor / Lead</p>
                <p className="font-medium text-gray-800">{wh.supervisor}</p>
                <p className="text-xs text-gray-400">{wh.contact}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Floor Space</p>
                <p className="font-semibold text-gray-800">{wh.totalCapacitySqFt.toLocaleString()} sq. ft.</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Capacity Occupancy</p>
                <p className="font-semibold text-amber-600">{wh.utilizationPercent}%</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-amber-600 h-2 rounded-full" style={{ width: `${wh.utilizationPercent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
