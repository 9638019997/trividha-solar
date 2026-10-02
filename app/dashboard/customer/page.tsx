'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getCustomerProjects,
  getCustomerQuotations,
  CustomerProject,
  CustomerQuotation,
} from '@/app/actions/customer';

export default function CustomerDashboardOverview() {
  const [projects, setProjects] = useState<CustomerProject[]>([]);
  const [quotes, setQuotes] = useState<CustomerQuotation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [projData, quoteData] = await Promise.all([
        getCustomerProjects(),
        getCustomerQuotations(),
      ]);
      setProjects(projData);
      setQuotes(quoteData);
      setLoading(false);
    }
    loadData();
  }, []);

  const totalKw = projects.reduce((acc, p) => acc + (Number(p.system_size_kw) || 0), 0);
  const activeProject = projects[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Customer Portal & Self-Service</h1>
        <p className="text-sm text-gray-500">Live solar installation status, generation stats, and billing records</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">My Solar Systems</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{projects.length}</p>
          <span className="text-xs text-emerald-600">● Live Connected</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">Total Capacity</p>
          <p className="text-3xl font-bold text-amber-600 mt-2">{totalKw.toFixed(1)} kW</p>
          <span className="text-xs text-gray-500">Rooftop Solar</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">Quotations & Invoices</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{quotes.length}</p>
          <span className="text-xs text-gray-500">Active Proposals</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">System Health</p>
          <p className="text-3xl font-bold text-emerald-600 mt-2">Optimal</p>
          <span className="text-xs text-emerald-600">100% Inverter Online</span>
        </div>
      </div>

      {/* Active Project Card */}
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Project Progress Tracker</h2>
          <Link href="/dashboard/customer/projects" className="text-sm font-semibold text-amber-600 hover:underline">
            View All Projects →
          </Link>
        </div>

        {loading ? (
          <p className="text-sm text-gray-500 py-6 text-center">Loading solar system details...</p>
        ) : activeProject ? (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div>
                <p className="font-semibold text-gray-900">{activeProject.project_name}</p>
                <p className="text-xs text-gray-500">Capacity: {activeProject.system_size_kw} kW • {activeProject.project_type}</p>
              </div>
              <span className="mt-2 sm:mt-0 px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800 capitalize self-start">
                Status: {activeProject.status}
              </span>
            </div>

            {/* Stepper */}
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-2.5 rounded-full transition-all duration-500"
                style={{
                  width:
                    activeProject.status === 'completed'
                      ? '100%'
                      : activeProject.status === 'installation'
                      ? '70%'
                      : '35%',
                }}
              ></div>
            </div>

            <div className="grid grid-cols-3 text-xs text-gray-500 text-center font-medium">
              <span className="text-amber-600">1. Site Survey & Approval</span>
              <span className={activeProject.status !== 'in_progress' ? 'text-amber-600' : ''}>2. Installation & Metering</span>
              <span className={activeProject.status === 'completed' ? 'text-emerald-600' : ''}>3. Commissioned</span>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 text-gray-500 text-sm">
            No active solar installation found. Contact our team to request a site survey.
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          href="/dashboard/customer/quotations"
          className="p-4 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition block"
        >
          <h3 className="font-semibold text-amber-900">View Quotations & Subsidy</h3>
          <p className="text-xs text-amber-700 mt-1">Review PM Surya Ghar subsidy details and download proposals.</p>
        </Link>
        <Link
          href="/dashboard/customer/documents"
          className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl hover:bg-emerald-100 transition block"
        >
          <h3 className="font-semibold text-emerald-900">Download Documents</h3>
          <p className="text-xs text-emerald-700 mt-1">Access sanction letters, warranties, and commissioning certificates.</p>
        </Link>
        <Link
          href="/dashboard/customer/support"
          className="p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition block"
        >
          <h3 className="font-semibold text-blue-900">Raise Service Request</h3>
          <p className="text-xs text-blue-700 mt-1">Submit tickets for solar panel cleaning, inverter issues, or maintenance.</p>
        </Link>
      </div>
    </div>
  );
}
