import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockQuotations } from '@/lib/mock/financeData';

export async function generateStaticParams() {
  return mockQuotations.map((q) => ({
    id: q.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function QuotationDetailPage({ params }: PageProps) {
  const { id } = await params;
  const quote = mockQuotations.find((q) => q.id === id);

  if (!quote) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/dashboard/finance/quotations" className="text-amber-600 text-sm font-medium hover:underline">
            ← Back to Quotations
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">Quotation: {quote.quoteNo}</h1>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full uppercase">
          {quote.status}
        </span>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm border-b pb-4">
          <div>
            <p className="text-gray-400">Client</p>
            <p className="font-semibold text-gray-800">{quote.clientName}</p>
          </div>
          <div>
            <p className="text-gray-400">System Proposed</p>
            <p className="font-semibold text-gray-800">{quote.systemSizeKw} kW Rooftop Solar PV</p>
          </div>
          <div>
            <p className="text-gray-400">Issued On</p>
            <p className="font-semibold text-gray-800">{quote.issueDate}</p>
          </div>
          <div>
            <p className="text-gray-400">Valid Until</p>
            <p className="font-semibold text-gray-800">{quote.validUntil}</p>
          </div>
        </div>

        <div className="pt-2 space-y-2 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Base Solar PV System Turnkey Cost</span>
            <span>₹{quote.baseAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>GST (Goods & Services Tax) @ 18%</span>
            <span>₹{quote.gstAmount.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t">
            <span>Grand Total (All Inclusive)</span>
            <span className="text-amber-600">₹{quote.totalAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
