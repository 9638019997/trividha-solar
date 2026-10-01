import Link from 'next/link';
import InventoryNav from '@/components/inventory/InventoryNav';
import { mockProducts, mockWarehouses, mockPurchaseOrders } from '@/lib/mock/inventoryData';

export default function InventoryDashboardPage() {
  const totalValuation = mockProducts.reduce((acc, p) => acc + p.totalStock * p.unitCost, 0);
  const lowStockCount = mockProducts.filter((p) => p.totalStock <= p.reorderLevel).length;
  const activeOrdersCount = mockPurchaseOrders.filter((po) => po.status === 'ordered').length;

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Supply Chain & Inventory ERP</h1>
          <p className="text-sm text-gray-500">Track solar panels, inverters, structures, warehousing, and purchase orders.</p>
        </div>
        <div className="flex gap-2">
          <Link href="/dashboard/inventory/operations" className="bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm transition-colors">
            + Quick Stock In / Out
          </Link>
        </div>
      </div>

      <InventoryNav />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Total Stock Valuation</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">₹{(totalValuation / 100000).toFixed(2)} <span className="text-sm font-normal text-gray-500">Lakhs</span></p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">SKU Categories</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">{mockProducts.length} <span className="text-sm font-normal text-gray-500">Active SKUs</span></p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-amber-600 font-semibold">Low Stock Alerts</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">{lowStockCount} <span className="text-sm font-normal text-gray-500">Items</span></p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Active Purchase Orders</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">{activeOrdersCount} <span className="text-sm font-normal text-gray-500">Pending Delivery</span></p>
        </div>
      </div>

      {/* Low Stock Watchlist */}
      {lowStockCount > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-600 animate-pulse" />
            <h3 className="font-semibold text-amber-900 text-sm">Critical Stock Alert (Reorder Threshold Reached)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
            {mockProducts.filter((p) => p.totalStock <= p.reorderLevel).map((item) => (
              <div key={item.id} className="bg-white p-3 rounded-lg border border-amber-200 flex justify-between items-center text-sm">
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">SKU: {item.sku} | Reorder Level: {item.reorderLevel} {item.unit}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-red-600">{item.totalStock} {item.unit} left</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Warehouse Summary Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900">Regional Warehouses Overview</h2>
          <Link href="/dashboard/inventory/warehouses" className="text-xs font-semibold text-amber-600 hover:underline">
            Manage All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">Warehouse Code</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Supervisor</th>
                <th className="py-3 px-4">Capacity</th>
                <th className="py-3 px-4">Utilization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockWarehouses.map((wh) => (
                <tr key={wh.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-semibold text-gray-900">{wh.name} ({wh.code})</td>
                  <td className="py-3 px-4 text-gray-600">{wh.location}</td>
                  <td className="py-3 px-4 text-gray-700">{wh.supervisor}</td>
                  <td className="py-3 px-4 text-gray-700">{wh.totalCapacitySqFt.toLocaleString()} sq. ft.</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-600 h-2 rounded-full" style={{ width: `${wh.utilizationPercent}%` }}></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">{wh.utilizationPercent}%</span>
                    </div>
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
