import InventoryNav from '@/components/inventory/InventoryNav';
import { mockProducts } from '@/lib/mock/inventoryData';

export default function ProductsStockPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Solar Products & Stock Catalog</h1>
          <p className="text-sm text-gray-500">Solar PV modules, inverters, cables, structures, and BOS materials.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors">
          + Add New SKU
        </button>
      </div>

      <InventoryNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">SKU / Item</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Brand / Specs</th>
                <th className="py-3 px-4">Unit Cost</th>
                <th className="py-3 px-4">Available</th>
                <th className="py-3 px-4">Allocated</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockProducts.map((p) => {
                const isLow = p.totalStock <= p.reorderLevel;
                return (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <p className="font-semibold text-gray-900">{p.name}</p>
                      <span className="text-xs text-gray-500 font-mono">{p.sku}</span>
                    </td>
                    <td className="py-3 px-4 uppercase text-xs font-semibold text-gray-600">{p.category}</td>
                    <td className="py-3 px-4">
                      <p className="text-gray-900 font-medium">{p.brand}</p>
                      <p className="text-xs text-gray-500">{p.specifications}</p>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-800">₹{p.unitCost.toLocaleString('en-IN')}</td>
                    <td className="py-3 px-4 font-bold text-gray-900">{p.totalStock} {p.unit}</td>
                    <td className="py-3 px-4 text-gray-600">{p.allocatedStock} {p.unit}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
                        isLow ? 'bg-red-100 text-red-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {isLow ? 'Low Stock' : 'Optimal'}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
