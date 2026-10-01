import HRMSNav from '@/components/hrms/HRMSNav';
import { mockTrainings } from '@/lib/mock/hrmsData';

export default function TrainingPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Technical Skill & Safety Training</h1>
          <p className="text-sm text-gray-500">Rooftop safety certifications, DISCOM net-metering protocols, and inverter training.</p>
        </div>
      </div>

      <HRMSNav />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTrainings.map((trn) => (
          <div key={trn.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-gray-900 text-base">{trn.courseTitle}</h3>
                <p className="text-xs text-gray-500">{trn.category}</p>
              </div>
              <span className={`px-2.5 py-1 rounded text-xs font-semibold ${
                trn.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {trn.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm border-t pt-3">
              <div>
                <p className="text-xs text-gray-400">Accredited Trainer</p>
                <p className="font-medium text-gray-800 text-xs">{trn.trainer}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Duration</p>
                <p className="font-medium text-gray-800">{trn.durationHours} Hours</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Enrolled Staff</p>
                <p className="font-bold text-amber-600">{trn.enrolledEmployees} Persons</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Completion Status</p>
                <p className="font-bold text-emerald-600">{trn.completionRate}% Certified</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
