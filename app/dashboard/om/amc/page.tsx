import OMNav from '@/components/om/OMNav';
import { mockAMCContracts } from '@/lib/mock/omData';

export default function AMCPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Annual Maintenance Contracts (AMC)</h1>
          <p className="text-sm text-gray-500">Service contracts, scheduled cleaning quotas, and renewal alerts.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Create AMC Contract
        </button>
      </div>

      <OMNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Contract No</th>
              <th className="py-3 px-4">Client</th>
              <th className="py-3 px-4">Plant Size</th>
              <th className="py-3 px-4">Plan Tier</th>
              <th className="py-3 px-4">Cleanings Done</th>
              <th className="py-3 px-4">Expiry Date</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockAMCContracts.map((a) => (
              <tr key={a.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-mono font-semibold text-gray-900">{a.contractNo}</td>
                <td className="py-3 px-4 font-medium text-gray-800">{a.customerName}</td>
                <td className="py-3 px-4 font-semibold text-gray-700">{a.plantCapacityKw} kW</td>
                <td className="py-3 px-4 text-gray-600">{a.planName}</td>
                <td className="py-3 px-4 font-bold text-emerald-600">{a.cleaningsCompleted} / {a.cleaningsIncluded}</td>
                <td className="py-3 px-4 text-gray-500">{a.expiryDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                    a.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {a.status.replace('_', ' ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
