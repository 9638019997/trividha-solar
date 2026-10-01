import SystemNav from '@/components/system/SystemNav';
export default function SystemDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">System Administration</h1>
      <SystemNav />
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <p className="text-gray-600">Company configurations, branch control, and system backup management.</p>
      </div>
    </div>
  );
}
