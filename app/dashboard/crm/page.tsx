import CRMNav from '@/components/crm/CRMNav';
import { mockCRMLeads, mockCRMOpportunities } from '@/lib/mock/module12Data';

export default function CRMDashboard() {
  const totalPipeline = mockCRMOpportunities.reduce((acc, opp) => acc + opp.value, 0);
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">CRM & Sales Pipeline</h1>
      <CRMNav />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm text-gray-500 font-bold uppercase">Active Leads</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">{mockCRMLeads.length}</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm text-gray-500 font-bold uppercase">Pipeline Value</h2>
          <p className="text-3xl font-bold text-emerald-600 mt-2">₹{totalPipeline.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
}
