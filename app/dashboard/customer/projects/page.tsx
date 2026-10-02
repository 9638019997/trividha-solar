'use client';

import React, { useEffect, useState } from 'react';
import { getCustomerProjects, CustomerProject } from '@/app/actions/customer';

export default function CustomerProjectsPage() {
  const [projects, setProjects] = useState<CustomerProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getCustomerProjects();
      setProjects(data);
      setLoading(false);
    }
    load()
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">My Solar Projects</h1>
        <p className="text-sm text-gray-500">Track implementation milestones and commissioning records</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading your projects...</div>
        ) : projects.length === 0 ? (
          <div className="p-12 text-center text-gray-500">No projects registered yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                <tr>
                  <th className="p-4">Project Name</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Capacity</th>
                  <th className="p-4">Expected Gen / Year</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {projects.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-4 font-semibold text-gray-900">{p.project_name}</td>
                    <td className="p-4 capitalize text-gray-600">{p.project_type}</td>
                    <td className="p-4 font-medium text-amber-600">{p.system_size_kw} kW</td>
                    <td className="p-4 text-gray-600">{p.expected_generation_kwh || '—'} kWh</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 capitalize">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
