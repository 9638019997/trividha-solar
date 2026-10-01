import OMNav from '@/components/om/OMNav';

export default function OMDocumentsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">O&M Documentation & Reports Vault</h1>
        <p className="text-sm text-gray-500">Commissioning certificates, test reports, inverter manuals, and warranty cards.</p>
      </div>

      <OMNav />

      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-3">
        <div className="flex justify-between items-center py-2 border-b">
          <div>
            <p className="font-semibold text-gray-800">50kW Navkar Mill - Pre-Commissioning Megger Test Report</p>
            <span className="text-xs text-gray-400">PDF • Signed by CEIG Inspector</span>
          </div>
          <button className="text-amber-600 font-semibold text-sm hover:underline">Download</button>
        </div>
        <div className="flex justify-between items-center py-2 border-b">
          <div>
            <p className="font-semibold text-gray-800">Waaree 540W Mono PERC 25-Year Warranty Certificate</p>
            <span className="text-xs text-gray-400">PDF • Manufacturer OEM Warranty</span>
          </div>
          <button className="text-amber-600 font-semibold text-sm hover:underline">Download</button>
        </div>
        <div className="flex justify-between items-center py-2">
          <div>
            <p className="font-semibold text-gray-800">Growatt On-Grid Inverter O&M Manual & Modbus Protocol</p>
            <span className="text-xs text-gray-400">PDF • Technical Manual</span>
          </div>
          <button className="text-amber-600 font-semibold text-sm hover:underline">Download</button>
        </div>
      </div>
    </div>
  );
}
