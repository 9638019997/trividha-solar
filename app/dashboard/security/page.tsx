import SecurityNav from '@/components/security/SecurityNav';
import { mockAuditLogs, mockSecurityUsers } from '@/lib/mock/module12Data';
export default function SecurityDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Security & Audit Control</h1>
      <SecurityNav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-bold uppercase">Active Users</p>
          <p className="text-2xl font-bold">{mockSecurityUsers.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-500 font-bold uppercase">Audit Events</p>
          <p className="text-2xl font-bold text-amber-600">{mockAuditLogs.length}</p>
        </div>
      </div>
    </div>
  );
}
