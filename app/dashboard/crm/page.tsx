import CRMNav from '@/components/crm/CRMNav';
import { mockCRMOpportunities } from '@/lib/mock/module12Data';
import { getLeads } from '@/app/actions/leads';
import Link from 'next/link';

export default async function CRMPage() {
  const leads = await getLeads();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">CRM Operations</h1>
        <Link
          href="/dashboard/crm/leads"
          className="text-sm bg-amber-500 hover:bg-amber-600 text-white px-3 py-1.5 rounded-lg font-medium transition"
        >
          View Live Pipeline →
        </Link>
      </div>
      <CRMNav />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Live Leads</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">{leads.length}</p>
          <span className="text-xs text-green-600 font-medium">● Connected to Supabase</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Active Opportunities</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">{mockCRMOpportunities.length}</p>
          <span className="text-xs text-gray-500">Module 12 Pipeline</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Conversion Rate</h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            {leads.length > 0
              ? `${Math.round((leads.filter((l) => l.status === 'converted').length / leads.length) * 100)}%`
              : '0%'}
          </p>
          <span className="text-xs text-gray-500">Live Converted / Total</span>
        </div>
      </div>
    </div>
  );
}
