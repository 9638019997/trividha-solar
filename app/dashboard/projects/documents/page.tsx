import ProjectNav from '@/components/projects/ProjectNav';
import { mockDocuments } from '@/lib/mock/projectsData';

export default function DocumentsPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Project Documents</h1>
          <p className="text-sm text-gray-500">Sanction letters, technical drawings, feasibility reports, and invoices.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Upload Document
        </button>
      </div>

      <ProjectNav />

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b border-gray-200">
            <tr>
              <th className="py-3 px-4">Document Title</th>
              <th className="py-3 px-4">Project</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">File Size</th>
              <th className="py-3 px-4">Uploaded</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockDocuments.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-900">{doc.title}</td>
                <td className="py-3 px-4 text-gray-600">{doc.projectName}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-0.5 text-xs bg-slate-100 text-slate-700 rounded font-medium">
                    {doc.category}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-500 text-xs">{doc.fileSize}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{doc.uploadDate}</td>
                <td className="py-3 px-4 text-right">
                  <a href={doc.downloadUrl} className="text-amber-600 hover:underline font-semibold text-xs">
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
