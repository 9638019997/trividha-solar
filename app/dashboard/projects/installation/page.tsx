import ProjectNav from '@/components/projects/ProjectNav';
import { mockProjects } from '@/lib/mock/projectsData';

export default function InstallationPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Installation Management</h1>
        <p className="text-sm text-gray-500">Track on-site hardware mounting, electrical wiring, and commissioning.</p>
      </div>

      <ProjectNav />

      <div className="space-y-6">
        {mockProjects.map((p) => (
          <div key={p.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-100 gap-2">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{p.name}</h3>
                <p className="text-xs text-gray-500">Engineer in Charge: {p.leadEngineer} | Capacity: {p.capacityKw} kW</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-700">{p.progressPercent}% Done</span>
                <div className="w-32 bg-gray-200 rounded-full h-2.5">
                  <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: `${p.progressPercent}%` }}></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mt-4">
              {p.installationStages?.map((stage, idx) => (
                <div key={idx} className="p-3 border rounded-lg bg-gray-50 flex flex-col justify-between">
                  <p className="text-xs font-semibold text-gray-800">{stage.stageName}</p>
                  <span className={`inline-block mt-3 px-2 py-0.5 text-[10px] font-bold rounded uppercase w-fit ${
                    stage.status === 'completed'
                      ? 'bg-emerald-100 text-emerald-800'
                      : stage.status === 'in_progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {stage.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
