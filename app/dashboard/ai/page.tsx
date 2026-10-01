import AINav from '@/components/ai/AINav';
import { mockCRMLeads } from '@/lib/mock/module12Data';

export default function AIDashboard() {
  const avgScore = mockCRMLeads.reduce((acc, l) => acc + l.aiScore, 0) / (mockCRMLeads.length || 1);
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">AI Innovation Center</h1>
      <AINav />
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-bold">AI Fleet Intelligence</h2>
        <p className="text-sm text-gray-500 mt-1">Average Lead Score: <span className="font-bold text-amber-600">{avgScore.toFixed(1)}/100</span></p>
      </div>
    </div>
  );
}
