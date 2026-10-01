import SystemNav from '@/components/system/SystemNav';

export default function AdminDashboardPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Control Center</h1>
          <p className="text-sm text-gray-500 mt-1">Manage system configurations, branches, and security policies.</p>
        </div>
      </div>
      <SystemNav />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">System Status</h2>
          <p className="text-2xl font-bold text-emerald-600 mt-2">Operational</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Total Modules</h2>
          <p className="text-2xl font-bold text-gray-900 mt-2">12 Active</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase">Security State</h2>
          <p className="text-2xl font-bold text-amber-600 mt-2">Enforced</p>
        </div>
      </div>
    </div>
  );
}
