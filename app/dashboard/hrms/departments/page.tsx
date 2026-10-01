import HRMSNav from '@/components/hrms/HRMSNav';

const departments = [
  { name: 'Engineering & Design', lead: 'Rajendra Sandanshiv', headCount: 4, function: 'Solar CAD layouts, SLD diagrams, CEIG & Net-metering approval filings' },
  { name: 'Field Operations & O&M', lead: 'Dilip Sandanshiv', headCount: 8, function: 'Rooftop mounting structure fabrication, DC cabling, inverter grid sync & AMC' },
  { name: 'Sales & Business Development', lead: 'Aakash Verma', headCount: 5, function: 'Customer site feasibility surveys, PM Surya Ghar JanSamarth quotations' },
  { name: 'Finance & Procurement', lead: 'Pooja Patel', headCount: 3, function: 'OEM tier-1 panel procurement, vendor payments, GST returns and invoicing' },
  { name: 'Human Resources', lead: 'Hiral Mehta', headCount: 2, function: 'Employee hiring, electrical technician training, payroll & attendance' },
];

export default function DepartmentsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Organizational Departments</h1>
        <p className="text-sm text-gray-500">Corporate hierarchy, department leadership, and staffing allocations.</p>
      </div>

      <HRMSNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {departments.map((dept) => (
          <div key={dept.name} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{dept.name}</h3>
                <p className="text-xs text-amber-600 font-semibold">Head: {dept.lead}</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                {dept.headCount} Staff
              </span>
            </div>
            <p className="text-sm text-gray-600 border-t pt-2">{dept.function}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
