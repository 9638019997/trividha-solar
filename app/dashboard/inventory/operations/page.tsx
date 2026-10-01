import InventoryNav from '@/components/inventory/InventoryNav';
import { mockOperations } from '@/lib/mock/inventoryData';

export default function InventoryOperationsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory Operations & Movement</h1>
          <p className="text-sm text-gray-500">Goods Receipt Note (GRN), Project Dispatch/Issue, and Inter-Hub Transfers.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-3 py-2 rounded-lg text-sm">
            + New GRN (Stock In)
          </button>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-3 py-2 rounded-lg text-sm">
            + Dispatch / Issue (Stock Out)
          </button>
        </div>
      </div>

      <InventoryNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Ref Number</th>
              <th className="py-3 px-4">Type</th>
              <th className="py-3 px-4">Warehouse</th>
              <th className="py-3 px-4">Product</th>
              <th className="py-3 px-4">Qty</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Handled By</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockOperations.map((op) => (
              <tr key={op.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{op.referenceNo}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                    op.type.includes('Stock In')
                      ? 'bg-emerald-100 text-emerald-800'
                      : op.type.includes('Stock Out')
                      ? 'bg-rose-100 text-rose-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {op.type}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">{op.warehouseName}</td>
                <td className="py-3 px-4 font-medium text-gray-900">{op.productName}</td>
                <td className="py-3 px-4 font-bold text-gray-800">{op.quantity}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{op.date}</td>
                <td className="py-3 px-4 text-gray-600">{op.handledBy}</td>
                <td className="py-3 px-4 capitalize font-semibold text-xs text-gray-700">{op.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
