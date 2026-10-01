import SecurityNav from '@/components/security/SecurityNav';
export default function Page() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Active Sessions</h1>
      <SecurityNav />
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <p className="text-gray-600">Active Sessions console is active and ready.</p>
      </div>
    </div>
  );
}
