import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockPlants } from '@/lib/mock/omData';

export async function generateStaticParams() {
  return mockPlants.map((plant) => ({
    id: plant.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PlantDetailPage({ params }: PageProps) {
  const { id } = await params;
  const plant = mockPlants.find((p) => p.id === id);

  if (!plant) {
    notFound();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <Link href="/dashboard/om/plants" className="text-amber-600 text-sm font-medium hover:underline">
            ← Back to Plants Directory
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">{plant.name}</h1>
          <p className="text-xs font-mono text-gray-400">{plant.plantCode}</p>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-full uppercase">
          {plant.status}
        </span>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm border-b pb-4">
          <div>
            <p className="text-gray-400">Client Contact</p>
            <p className="font-semibold text-gray-800">{plant.customerName} ({plant.customerPhone})</p>
            <p className="text-xs text-gray-500">{plant.location}</p>
          </div>
          <div>
            <p className="text-gray-400">Commissioning Date</p>
            <p className="font-semibold text-gray-800">{plant.installationDate}</p>
            <p className="text-xs text-emerald-600 font-medium">Warranty active until {plant.warrantyExpiry}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400">Installed Inverter</p>
            <p className="font-medium text-gray-800">{plant.inverterBrand}</p>
          </div>
          <div>
            <p className="text-gray-400">Solar PV Modules</p>
            <p className="font-medium text-gray-800">{plant.panelBrand}</p>
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-lg flex justify-between items-center border border-amber-200">
          <div>
            <p className="text-xs font-semibold text-amber-900">Today Generation</p>
            <p className="text-xl font-bold text-amber-950">{plant.todayGenKwh} kWh</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-amber-900">Performance Ratio (PR)</p>
            <p className="text-xl font-bold text-amber-950">{plant.performanceRatio}%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
