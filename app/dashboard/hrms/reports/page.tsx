import HRMSNav from '@/components/hrms/HRMSNav';

export default function HRReportsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">HR Analytics & Compliance Reports</h1>
        <p className="text-sm text-gray-500">Headcount growth, department salary expenditure, and EPF/ESIC statutory compliance.</p>
      </div>

      <HRMSNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Departmental Salary Expenditure</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Field Operations & Installation</span>
              <span className="font-semibold text-gray-900">₹1,25,000 / mo</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Engineering & Approvals</span>
              <span className="font-semibold text-gray-900">₹85,000 / mo</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Finance & Procurement</span>
              <span className="font-semibold text-gray-900">₹35,000 / mo</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-gray-900 text-base">Statutory Compliance Status</h3>
          <ul className="divide-y divide-gray-100 text-sm">
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">EPF ECR Filing (Monthly)</span>
              <span className="font-bold text-emerald-600">100% Compliant</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Gujarat Professional Tax (PT)</span>
              <span className="font-bold text-emerald-600">Paid On-Time</span>
            </li>
            <li className="py-2.5 flex justify-between">
              <span className="text-gray-600">Rooftop Safety PPE Inspection</span>
              <span className="font-bold text-emerald-600">Certified Valid</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
