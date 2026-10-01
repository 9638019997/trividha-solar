import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockInvoices } from '@/lib/mock/financeData';

export async function generateStaticParams() {
  return mockInvoices.map((inv) => ({
    id: inv.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InvoiceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const invoice = mockInvoices.find((inv) => inv.id === id);

  if (!invoice) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/dashboard/finance/invoices" className="text-amber-600 text-sm font-medium hover:underline">
            ← Back to Invoices
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Tax Invoice: {invoice.invoiceNo}</h1>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full uppercase">
          {invoice.status}
        </span>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm border-b pb-4">
          <div>
            <p className="text-gray-400">Billed To</p>
            <p className="font-semibold text-gray-800">{invoice.customerName}</p>
            <p className="text-xs text-gray-500">Project: {invoice.projectCode}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400">Date of Invoice</p>
            <p className="font-semibold text-gray-800">{invoice.billingDate}</p>
            <p className="text-xs text-gray-500">Due Date: {invoice.dueDate}</p>
          </div>
        </div>

        <div className="pt-2 space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Taxable Subtotal</span>
            <span>₹{invoice.subTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>GST ({invoice.gstRate}%)</span>
            <span>₹{invoice.gstAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t">
            <span>Total Billed Amount</span>
            <span className="text-amber-600">₹{invoice.grandTotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-medium text-emerald-600">
            <span>Amount Received</span>
            <span>₹{invoice.paidAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
