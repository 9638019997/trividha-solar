import ProjectNav from '@/components/projects/ProjectNav';
import { mockProjects } from '@/lib/mock/projectsData';

export default function TimelinePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Project Timelines</h1>
        <p className="text-sm text-gray-500">Gantt and phase-wise delivery schedules.</p>
      </div>

      <ProjectNav />

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
        {mockProjects.map((p) => (
          <div key={p.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <span className="text-xs text-gray-500">{p.startDate} to {p.targetCompletionDate}</span>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-amber-50 text-amber-700 rounded border border-amber-200">
                {p.currentPhase}
              </span>
            </div>
            <div className="relative pt-4">
              <div className="w-full bg-gray-100 h-3 rounded-full overflow-hidden flex">
                <div
                  className="bg-amber-600 h-full rounded-full transition-all"
                  style={{ width: `${p.progressPercent}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
                <span>Start ({p.startDate})</span>
                <span>Current: {p.progressPercent}%</span>
                <span>Target ({p.targetCompletionDate})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
