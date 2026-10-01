import HRMSNav from '@/components/hrms/HRMSNav';
import { mockJobs } from '@/lib/mock/hrmsData';

export default function RecruitmentPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Recruitment & Talent Pipeline</h1>
          <p className="text-sm text-gray-500">Open rooftop solar technical positions and applicant hiring funnel.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm">
          + Post Job Role
        </button>
      </div>

      <HRMSNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockJobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{job.title}</h3>
                <p className="text-xs text-gray-500">{job.department} • {job.location}</p>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs font-semibold ${
                job.status === 'Open' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {job.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
              <div>
                <p className="text-xs text-gray-400">Open Vacancies</p>
                <p className="font-bold text-amber-600">{job.openings} Positions</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Total Applicants</p>
                <p className="font-bold text-gray-800">{job.applicantsCount} Candidates</p>
              </div>
              <div className="col-span-2">
                <p className="text-xs text-gray-400">Experience Profile</p>
                <p className="text-gray-700 text-xs mt-0.5">{job.experienceRequired}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
