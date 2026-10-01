import ProjectNav from '@/components/projects/ProjectNav';
import { mockSurveys } from '@/lib/mock/projectsData';

export default function SurveyPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Site Survey & Feasibility</h1>
          <p className="text-sm text-gray-500">Technical roof assessments and shadow analysis reports.</p>
        </div>
        <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors">
          + Schedule Survey
        </button>
      </div>

      <ProjectNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockSurveys.map((survey) => (
          <div key={survey.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900">{survey.projectName}</h3>
                <p className="text-xs text-gray-500">Survey Date: {survey.surveyDate}</p>
              </div>
              <span className={`text-xs px-2.5 py-1 font-semibold rounded-full capitalize ${
                survey.status === 'completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
              }`}>
                {survey.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm pt-2 border-t border-gray-100">
              <div>
                <span className="text-gray-500 block text-xs">Roof Type:</span>
                <span className="font-medium text-gray-800">{survey.roofType}</span>
              </div>
              <div>
                <span className="text-gray-500 block text-xs">Shadow Free Area:</span>
                <span className="font-medium text-gray-800">{survey.shadowFreeAreaSqFt} sq. ft.</span>
              </div>
              <div>
                <span className="text-gray-500 block text-xs">Recommended Capacity:</span>
                <span className="font-semibold text-amber-600">{survey.recommendedCapacityKw} kW</span>
              </div>
              <div>
                <span className="text-gray-500 block text-xs">Surveyor:</span>
                <span className="font-medium text-gray-800">{survey.surveyor}</span>
              </div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600">
              <strong>Notes:</strong> {survey.notes}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
