import Link from 'next/link';
import ProjectNav from '@/components/projects/ProjectNav';
import { mockProjects } from '@/lib/mock/projectsData';

export default function ProjectsPage() {
  const totalProjects = mockProjects.length;
  const activeProjects = mockProjects.filter((p) => p.currentPhase !== 'completed').length;
  const completedProjects = mockProjects.filter((p) => p.currentPhase === 'completed').length;
  const totalCapacity = mockProjects.reduce((acc, curr) => acc + curr.capacityKw, 0);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Project Management ERP</h1>
          <p className="text-sm text-gray-500">Track and manage solar projects from survey to commissioning.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg transition-colors shadow-sm">
          + New Project
        </button>
      </div>

      <ProjectNav />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Total Projects</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{totalProjects}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">In Progress</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">{activeProjects}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Commissioned</p>
          <p className="text-3xl font-bold text-emerald-600 mt-2">{completedProjects}</p>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Total Capacity</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{totalCapacity} <span className="text-base font-normal">kW</span></p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-semibold text-gray-900">Active Solar Installations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">Code / Project</th>
                <th className="py-3 px-4">Client</th>
                <th className="py-3 px-4">Capacity</th>
                <th className="py-3 px-4">Phase</th>
                <th className="py-3 px-4">Progress</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mockProjects.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-900">{p.name}</p>
                    <span className="text-xs text-gray-500">{p.code} • {p.location}</span>
                  </td>
                  <td className="py-4 px-4 text-gray-700">{p.clientName}</td>
                  <td className="py-4 px-4 font-semibold text-gray-900">{p.capacityKw} kW</td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full capitalize ${
                      p.currentPhase === 'completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : p.currentPhase === 'installation'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {p.currentPhase}
                    </span>
                  </td>
                  <td className="py-4 px-4 w-44">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-amber-500 h-2 rounded-full"
                          style={{ width: `${p.progressPercent}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-gray-600">{p.progressPercent}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Link
                      href={`/dashboard/projects/${p.id}`}
                      className="text-amber-600 hover:text-amber-800 font-semibold text-sm"
                    >
                      View Details →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
