'use client';

import React, { useEffect, useState } from 'react';
import { getEnterpriseReportData, ReportSummary } from '@/app/actions/reports';

export default function EnterpriseReportsPage() {
  const [data, setData] = useState<ReportSummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'sales' | 'projects' | 'executive'>('executive');

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await getEnterpriseReportData();
        setData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const exportToCSV = (type: 'sales' | 'projects') => {
    if (!data) return;
    let csvContent = 'data:text/csv;charset=utf-8,';

    if (type === 'sales') {
      csvContent += 'ID,Customer Name,City,Status,Estimated Value (INR),Date\n';
      data.salesReport.forEach((r) => {
        csvContent += `"${r.id}","${r.customer_name}","${r.city}","${r.status}",${r.estimated_value},"${r.created_at}"\n`;
      });
    } else {
      csvContent += 'ID,Project Name,System Size (kW),Status,Date\n';
      data.projectReport.forEach((p) => {
        csvContent += `"${p.id}","${p.project_name}",${p.system_size_kw},"${p.status}","${p.created_at}"\n`;
      });
    }

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `trividha_${type}_report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports, PDF & Document Engine</h1>
          <p className="text-sm text-gray-500">
            Generate executive summaries, operational audit reports, and download live CSV/PDF exports.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => exportToCSV(activeTab === 'projects' ? 'projects' : 'sales')}
            className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
          >
            Export to CSV / Excel
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
          >
            Print / Save to PDF
          </button>
        </div>
      </div>

      <div className="hidden print:block border-b pb-4 mb-4">
        <h2 className="text-2xl font-bold text-gray-900">Trividha Synergy LLP — Official Business Report</h2>
        <p className="text-xs text-gray-500">Generated on {new Date().toLocaleDateString('en-IN')}</p>
      </div>

      <div className="flex border-b border-gray-200 gap-4 text-xs font-semibold print:hidden">
        <button
          onClick={() => setActiveTab('executive')}
          className={`pb-2 border-b-2 transition ${
            activeTab === 'executive'
              ? 'border-amber-600 text-amber-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Executive Summary
        </button>
        <button
          onClick={() => setActiveTab('sales')}
          className={`pb-2 border-b-2 transition ${
            activeTab === 'sales'
              ? 'border-amber-600 text-amber-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          Sales & Inquiries Audit
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`pb-2 border-b-2 transition ${
            activeTab === 'projects'
              ? 'border-amber-600 text-amber-600'
              : 'border-transparent text-gray-500 hover:text-gray-700'
          }`}
        >
          EPC & Project Execution
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Gross Estimated Revenue</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {loading ? '...' : `₹${((data?.executive.totalRevenue || 0) / 100000).toFixed(2)} Lakh`}
          </p>
          <span className="text-xs text-emerald-600 font-medium">● Verified Baseline</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Active EPC Projects</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">
            {loading ? '...' : data?.executive.activeProjects}
          </p>
          <span className="text-xs text-gray-500">Ongoing Site Works</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Commissioned Plants</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {loading ? '...' : data?.executive.completedProjects}
          </p>
          <span className="text-xs text-gray-500">Discom Synchronized</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Archived Documents</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">
            {loading ? '...' : data?.documentCount}
          </p>
          <span className="text-xs text-gray-500">Invoices, KYC & Approvals</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="font-bold text-sm text-gray-900 mb-4 capitalize">
          {activeTab} Live Audit Trail
        </h3>

        {loading ? (
          <p className="text-xs text-gray-400 py-10 text-center">Compiling enterprise report data...</p>
        ) : activeTab === 'projects' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase font-semibold border-b">
                <tr>
                  <th className="p-3">Project Title</th>
                  <th className="p-3">Capacity (kW)</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Created Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data?.projectReport.map((p) => (
                  <tr key={p.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900">{p.project_name}</td>
                    <td className="p-3">{p.system_size_kw} kW</td>
                    <td className="p-3 capitalize">{p.status}</td>
                    <td className="p-3 text-gray-400">{new Date(p.created_at).toLocaleDateString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase font-semibold border-b">
                <tr>
                  <th className="p-3">Customer / Firm</th>
                  <th className="p-3">Region</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Est. Value</th>
                  <th className="p-3">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data?.salesReport.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900">{s.customer_name}</td>
                    <td className="p-3">{s.city}</td>
                    <td className="p-3 capitalize">{s.status}</td>
                    <td className="p-3 font-medium text-gray-800">₹{s.estimated_value.toLocaleString('en-IN')}</td>
                    <td className="p-3 text-gray-400">{new Date(s.created_at).toLocaleDateString('en-IN')}</td>
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
