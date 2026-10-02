'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAdminAnalytics, AdminAnalyticsData } from '@/app/actions/admin-bi';

export default function SuperAdminControlCenter() {
  const [data, setData] = useState<AdminAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await getAdminAnalytics();
        setData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Super Admin Control Center & BI</h1>
          <p className="text-sm text-gray-500">
            Real-time business intelligence, Gujarat district penetration, pipeline health & system controls
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/dashboard/security/users"
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition"
          >
            User Roles & RBAC
          </Link>
          <Link
            href="/dashboard/system/backup"
            className="px-3 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-lg transition shadow-sm"
          >
            System Backups
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Pipeline Gross Value</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {loading ? '...' : `₹${((data?.metrics.totalRevenue || 0) / 100000).toFixed(2)} Lakh`}
          </p>
          <span className="text-xs text-emerald-600 font-medium">● Live Estimator</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Total Installed Capacity</p>
          <p className="text-2xl font-bold text-amber-600 mt-2">
            {loading ? '...' : `${data?.metrics.commissionedKw.toFixed(1)} kW`}
          </p>
          <span className="text-xs text-gray-500">South Gujarat EPC</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Active Pipeline Projects</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {loading ? '...' : data?.metrics.activeProjects}
          </p>
          <span className="text-xs text-amber-600 font-medium">In Execution</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs font-semibold uppercase text-gray-500">Total Customer Inquiries</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {loading ? '...' : data?.metrics.totalLeads}
          </p>
          <span className="text-xs text-gray-500">Organic & Partner leads</span>
        </div>
      </div>

      {/* BI Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* District Penetration */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-gray-900 mb-4">Gujarat District Distribution</h3>
          {loading ? (
            <p className="text-xs text-gray-400 py-6 text-center">Loading district records...</p>
          ) : (
            <div className="space-y-3">
              {data?.districtDistribution.map((d) => (
                <div key={d.district} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium text-gray-700">
                    <span>{d.district}</span>
                    <span>{d.count} inquiries</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-2 rounded-full"
                      style={{ width: `${Math.min(100, d.count * 5)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lead Funnel */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="font-bold text-sm text-gray-900 mb-4">Sales & Lead Funnel Health</h3>
          {loading ? (
            <p className="text-xs text-gray-400 py-6 text-center">Loading funnel...</p>
          ) : (
            <div className="space-y-3">
              {data?.leadFunnel.map((f) => (
                <div key={f.status} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                  <span className="text-xs font-semibold uppercase text-gray-600">{f.status}</span>
                  <span className="text-sm font-bold text-gray-900">{f.count}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Infrastructure Health Status */}
      <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <h3 className="font-bold text-sm text-gray-900 mb-3">Enterprise Infrastructure Status</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-3 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
            <span className="font-bold">Database:</span> {data?.systemHealth.databaseStatus || 'Online'}
          </div>
          <div className="p-3 bg-blue-50 text-blue-800 rounded-lg border border-blue-200">
            <span className="font-bold">Security:</span> {data?.systemHealth.authEngine || 'RLS Enforced'}
          </div>
          <div className="p-3 bg-purple-50 text-purple-800 rounded-lg border border-purple-200">
            <span className="font-bold">Storage:</span> {data?.systemHealth.storageStatus || 'Operational'}
          </div>
        </div>
      </div>
    </div>
  );
}
