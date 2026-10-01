import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockPayroll } from '@/lib/mock/hrmsData';

export async function generateStaticParams() {
  return mockPayroll.map((p) => ({
    id: p.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function SalarySlipDetailPage({ params }: PageProps) {
  const { id } = await params;
  const slip = mockPayroll.find((p) => p.id === id);

  if (!slip) {
    notFound();
  }

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <Link href="/dashboard/hrms/payroll" className="text-amber-600 text-sm font-medium hover:underline">
          ← Back to Payroll Register
        </Link>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full uppercase">
          {slip.status}
        </span>
      </div>

      <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Trividha Synergy LLP</h1>
            <p className="text-xs text-gray-500">Commercial Solar Energy Solutions & Consulting</p>
            <p className="text-xs text-gray-400 mt-1">Vyara, Tapi District, Gujarat</p>
          </div>
          <div className="text-right">
            <h2 className="text-base font-bold text-gray-900">Salary Pay Slip</h2>
            <p className="text-xs text-amber-600 font-semibold">{slip.month}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm border-b pb-4">
          <div>
            <p className="text-gray-400">Employee Name</p>
            <p className="font-bold text-gray-900">{slip.employeeName}</p>
            <p className="text-xs text-gray-500">{slip.designation}</p>
          </div>
          <div>
            <p className="text-gray-400">Department / Code</p>
            <p className="font-semibold text-gray-900">{slip.department}</p>
            <p className="text-xs font-mono text-gray-500">{slip.empCode}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 border-b pb-1">Earnings</h3>
            <div className="flex justify-between">
              <span className="text-gray-600">Basic Salary</span>
              <span>₹{slip.basicSalary.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">HRA</span>
              <span>₹{slip.hra.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Conveyance Allowance</span>
              <span>₹{slip.conveyanceAllowance.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-emerald-600 font-medium">
              <span>Site Milestone Incentive</span>
              <span>₹{slip.siteIncentive.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t text-gray-900">
              <span>Gross Earnings</span>
              <span>₹{slip.grossEarnings.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900 border-b pb-1">Deductions</h3>
            <div className="flex justify-between">
              <span className="text-gray-600">EPF Employee Share</span>
              <span>₹{slip.pfDeduction.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gujarat Professional Tax (PT)</span>
              <span>₹{slip.ptDeduction.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t text-rose-600">
              <span>Total Deductions</span>
              <span>₹{(slip.pfDeduction + slip.ptDeduction).toLocaleString('en-IN')}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-xl flex justify-between items-center border border-amber-200">
          <div>
            <p className="text-xs uppercase font-semibold text-amber-900">Net Take-Home Pay</p>
            <p className="text-xs text-amber-700">Credited to salary bank account</p>
          </div>
          <p className="text-2xl font-bold text-amber-950">₹{slip.netPayable.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
}
