import ProductionNav from '@/components/production/ProductionNav';
import { mockSystemHealth } from '@/lib/mock/module12Data';
export default function ProductionDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Production & DevOps</h1>
      <ProductionNav />
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold mb-4">System Health</h2>
        <div className="space-y-3">
          {mockSystemHealth.map((s) => (
            <div key={s.service} className="flex justify-between items-center border-b pb-2">
              <span className="font-medium text-gray-800">{s.service}</span>
              <span className="px-2 py-1 rounded text-xs font-bold bg-emerald-100 text-emerald-800">{s.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
