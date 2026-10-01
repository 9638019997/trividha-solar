import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mockProjects } from '@/lib/mock/projectsData';

// Required for Next.js static export with dynamic routes
export async function generateStaticParams() {
  return mockProjects.map((project) => ({
    id: project.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = mockProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard/projects" className="text-amber-600 hover:underline text-sm font-medium mb-1 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">{project.name}</h1>
          <p className="text-sm text-gray-500">{project.code} | {project.location}</p>
        </div>
        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium capitalize">
          {project.currentPhase}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Project Overview</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">System Capacity</p>
                <p className="font-semibold text-gray-800">{project.capacityKw} kW</p>
              </div>
              <div>
                <p className="text-gray-500">Estimated Budget</p>
                <p className="font-semibold text-gray-800">₹{project.budget.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-gray-500">Start Date</p>
                <p className="font-semibold text-gray-800">{project.startDate}</p>
              </div>
              <div>
                <p className="text-gray-500">Target Commissioning</p>
                <p className="font-semibold text-gray-800">{project.targetCompletionDate}</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">Overall Progress</span>
                <span className="font-bold text-amber-600">{project.progressPercent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-amber-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${project.progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Milestone Progress</h2>
            <div className="space-y-3">
              {project.installationStages?.map((stage, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 rounded-lg border border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${
                      stage.status === 'completed'
                        ? 'bg-emerald-500'
                        : stage.status === 'in_progress'
                        ? 'bg-amber-500 animate-pulse'
                        : 'bg-gray-300'
                    }`} />
                    <span className="font-medium text-gray-800 text-sm">{stage.stageName}</span>
                  </div>
                  <span className="text-xs uppercase font-bold text-gray-500">
                    {stage.completedDate ? `Done: ${stage.completedDate}` : stage.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Client Details</h2>
            <div className="text-sm space-y-2">
              <div>
                <p className="text-gray-500">Client Name</p>
                <p className="font-semibold text-gray-800">{project.clientName}</p>
              </div>
              <div>
                <p className="text-gray-500">Contact Number</p>
                <p className="font-semibold text-gray-800">{project.clientPhone}</p>
              </div>
              <div>
                <p className="text-gray-500">Site Location</p>
                <p className="font-semibold text-gray-800">{project.location}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Assignment</h2>
            <div className="text-sm space-y-2">
              <div>
                <p className="text-gray-500">Project Lead Engineer</p>
                <p className="font-semibold text-gray-800">{project.leadEngineer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
