import ProjectNav from '@/components/projects/ProjectNav';
import { mockTasks } from '@/lib/mock/projectsData';

export default function TasksPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Task Management</h1>
          <p className="text-sm text-gray-500">Track on-field duties, assignments, and approvals.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Add Task
        </button>
      </div>

      <ProjectNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Task</th>
              <th className="py-3 px-4">Project</th>
              <th className="py-3 px-4">Assigned To</th>
              <th className="py-3 px-4">Due Date</th>
              <th className="py-3 px-4">Priority</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">{task.title}</td>
                <td className="py-3 px-4 text-gray-600">{task.projectName}</td>
                <td className="py-3 px-4 text-gray-600">{task.assignedTo}</td>
                <td className="py-3 px-4 text-gray-600">{task.dueDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded ${
                    task.priority === 'urgent'
                      ? 'bg-red-100 text-red-800'
                      : task.priority === 'high'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {task.priority}
                  </span>
                </td>
                <td className="py-3 px-4 capitalize text-gray-700">{task.status.replace('_', ' ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
