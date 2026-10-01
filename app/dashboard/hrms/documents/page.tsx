import HRMSNav from '@/components/hrms/HRMSNav';

export default function HRDocumentsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Employee Documents & Statutory Vault</h1>
        <p className="text-sm text-gray-500">Employment agreements, ID proofs, Aadhaar, PAN cards, and electrical supervisor licenses.</p>
      </div>

      <HRMSNav />

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
        <div className="flex justify-between items-center py-2.5 border-b">
          <div>
            <p className="font-semibold text-gray-800">Trividha Synergy Standard Employee NDA & Code of Conduct</p>
            <span className="text-xs text-gray-400">PDF • Policy Document</span>
          </div>
          <button className="text-amber-600 font-semibold text-sm hover:underline">Download</button>
        </div>
        <div className="flex justify-between items-center py-2.5 border-b">
          <div>
            <p className="font-semibold text-gray-800">Gujarat Electrical Inspectorate (CEIG) Supervisor License - Dhaval C.</p>
            <span className="text-xs text-gray-400">PDF • Statutory Technical Certificate</span>
          </div>
          <button className="text-amber-600 font-semibold text-sm hover:underline">Download</button>
        </div>
        <div className="flex justify-between items-center py-2.5">
          <div>
            <p className="font-semibold text-gray-800">Group Personal Accident & Rooftop Work Insurance Policy Schedule</p>
            <span className="text-xs text-gray-400">PDF • Corporate Staff Coverage</span>
          </div>
          <button className="text-amber-600 font-semibold text-sm hover:underline">Download</button>
        </div>
      </div>
    </div>
  );
}
