import InventoryNav from '@/components/inventory/InventoryNav';
import { mockVendors, mockPurchaseOrders } from '@/lib/mock/inventoryData';

export default function VendorsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Vendors & Purchase Orders</h1>
          <p className="text-sm text-gray-500">OEM manufacturers, raw material vendors, and PO tracking.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Create Purchase Order
        </button>
      </div>

      <InventoryNav />

      {/* PO Overview */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Recent Purchase Orders (POs)</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">PO Number</th>
              <th className="py-3 px-4">Vendor</th>
              <th className="py-3 px-4">Order Date</th>
              <th className="py-3 px-4">Expected Date</th>
              <th className="py-3 px-4">Total Amount</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPurchaseOrders.map((po) => (
              <tr key={po.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-amber-600">{po.poNumber}</td>
                <td className="py-3 px-4 text-gray-800 font-medium">{po.vendorName}</td>
                <td className="py-3 px-4 text-gray-500">{po.orderDate}</td>
                <td className="py-3 px-4 text-gray-500">{po.expectedDate}</td>
                <td className="py-3 px-4 font-semibold text-gray-900">₹{po.totalAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    po.status === 'received' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {po.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Vendor List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-900">Approved Vendor Directory</h2>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Vendor Name</th>
              <th className="py-3 px-4">Contact</th>
              <th className="py-3 px-4">Supplied Categories</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Rating</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockVendors.map((v) => (
              <tr key={v.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">{v.name}</td>
                <td className="py-3 px-4 text-gray-600">
                  <p>{v.contactPerson}</p>
                  <span className="text-xs text-gray-400">{v.phone}</span>
                </td>
                <td className="py-3 px-4 uppercase text-xs text-gray-700">{v.categoriesSupplied.join(', ')}</td>
                <td className="py-3 px-4 text-gray-600">{v.city}</td>
                <td className="py-3 px-4 font-bold text-amber-600">★ {v.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
