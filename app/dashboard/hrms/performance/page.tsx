import HRMSNav from '@/components/hrms/HRMSNav';
import { mockReviews } from '@/lib/mock/hrmsData';

export default function PerformancePage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Quarterly Performance Reviews</h1>
        <p className="text-sm text-gray-500">Key Performance Indicators (KPI), site quality audits, and appraisal evaluations.</p>
      </div>

      <HRMSNav />

      <div className="space-y-4">
        {mockReviews.map((rev) => (
          <div key={rev.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-lg">{rev.employeeName}</h3>
                <p className="text-xs text-gray-500">{rev.empCode} • Review Period: {rev.reviewPeriod}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Review Score</p>
                <p className="text-xl font-bold text-emerald-600">{rev.kpiRating} / 5.0</p>
              </div>
            </div>

            <div className="space-y-2 border-t pt-3 text-sm">
              <div>
                <p className="text-xs font-semibold text-gray-500">Key Strengths & Achievements</p>
                <p className="text-gray-800 mt-0.5">{rev.strengths}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500">Development Objectives</p>
                <p className="text-gray-800 mt-0.5">{rev.goals}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
