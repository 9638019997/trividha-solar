import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockEmployees } from '@/lib/mock/hrmsData';

export async function generateStaticParams() {
  return mockEmployees.map((emp) => ({
    id: emp.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EmployeeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const emp = mockEmployees.find((e) => e.id === id);

  if (!emp) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/dashboard/hrms/employees" className="text-amber-600 text-sm font-medium hover:underline">
            ← Back to Employee Directory
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">{emp.fullName}</h1>
          <p className="text-xs font-mono text-gray-400">{emp.empCode} • {emp.designation}</p>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full uppercase">
          {emp.status}
        </span>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
        <div>
          <h2 className="text-base font-bold text-gray-900 border-b pb-2">Employment & Role Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-3">
            <div>
              <p className="text-gray-400">Department</p>
              <p className="font-semibold text-gray-800">{emp.department}</p>
            </div>
            <div>
              <p className="text-gray-400">Employment Type</p>
              <p className="font-semibold text-gray-800">{emp.employmentType}</p>
            </div>
            <div>
              <p className="text-gray-400">Joining Date</p>
              <p className="font-semibold text-gray-800">{emp.joiningDate}</p>
            </div>
            <div>
              <p className="text-gray-400">Base Location</p>
              <p className="font-semibold text-gray-800">{emp.baseLocation}</p>
            </div>
            <div>
              <p className="text-gray-400">Phone</p>
              <p className="font-semibold text-gray-800">{emp.phone}</p>
            </div>
            <div>
              <p className="text-gray-400">Work Email</p>
              <p className="font-semibold text-gray-800">{emp.email}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-base font-bold text-gray-900 border-b pb-2">Statutory & Bank Verification</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-3">
            <div>
              <p className="text-gray-400">Income Tax PAN</p>
              <p className="font-mono font-bold text-gray-800">{emp.panNo}</p>
            </div>
            <div>
              <p className="text-gray-400">EPFO UAN</p>
              <p className="font-mono font-bold text-gray-800">{emp.uanNo}</p>
            </div>
            <div>
              <p className="text-gray-400">Salary Account</p>
              <p className="font-medium text-gray-800">{emp.bankAccount}</p>
            </div>
            <div>
              <p className="text-gray-400">Gross Monthly CTC</p>
              <p className="text-lg font-bold text-amber-600">₹{emp.monthlySalary.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
