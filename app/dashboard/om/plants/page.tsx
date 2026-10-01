import Link from 'next/link';
import OMNav from '@/components/om/OMNav';
import { mockPlants } from '@/lib/mock/omData';

export default function PlantsListPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Commissioned Plants Directory</h1>
          <p className="text-sm text-gray-500">Asset registry, technical specifications, and warranty tracking.</p>
        </div>
      </div>

      <OMNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Plant Code</th>
              <th className="py-3 px-4">Client</th>
              <th className="py-3 px-4">Capacity</th>
              <th className="py-3 px-4">Inverter / Panels</th>
              <th className="py-3 px-4">Warranty Until</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPlants.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{p.plantCode}</td>
                <td className="py-3 px-4">
                  <p className="font-semibold text-gray-800">{p.customerName}</p>
                  <span className="text-xs text-gray-400">{p.customerPhone}</span>
                </td>
                <td className="py-3 px-4 font-bold text-gray-900">{p.capacityKw} kW</td>
                <td className="py-3 px-4 text-gray-600 text-xs">
                  <p>{p.inverterBrand}</p>
                  <p className="text-gray-400">{p.panelBrand}</p>
                </td>
                <td className="py-3 px-4 text-gray-600 text-xs">{p.warrantyExpiry}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    p.status === 'operational' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <Link href={`/dashboard/om/plants/${p.id}`} className="text-amber-600 font-semibold hover:underline">
                    View Details →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
