'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, StatCard, Badge, Button } from '@/components/ui/Primitives';
import { getPartnerDashboardData, PartnerSummary } from '@/app/actions/partner';

export default function PartnerDashboard() {
  const [data, setData] = useState<PartnerSummary | null>(null);
  const [loading, setLoading] = useState(true);

  const navItems = [
    { label: 'Overview', href: '/dashboard/partner' },
    { label: 'My Leads', href: '/dashboard/partner/leads' },
    { label: 'Commission', href: '/dashboard/partner/commission' },
    { label: 'Projects', href: '/dashboard/partner/projects' },
    { label: 'Profile & KYC', href: '/dashboard/partner/profile' }
  ];

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await getPartnerDashboardData();
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
    <DashboardShell title="Partner Enterprise Portal" role="Channel Partner" navItems={navItems}>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Total Leads"
          value={loading ? '...' : String(data?.totalLeads ?? 0)}
          change="Live Supabase Leads"
        />
        <StatCard
          title="Allocated Projects"
          value={loading ? '...' : String(data?.approvedProjects ?? 0)}
          change="Active pipeline"
        />
        <StatCard
          title="Surveys in Progress"
          value={loading ? '...' : String(data?.pendingSurveys ?? 0)}
          change="Field site visits"
        />
        <StatCard
          title="Earned Commission"
          value={loading ? '...' : `₹${(data?.earnedCommission ?? 0).toLocaleString('en-IN')}`}
          change="Disbursed & confirmed"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Recent Allocations */}
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-base text-gray-900 dark:text-white">Recent Solar Projects</h3>
            <Badge variant="amber">Live Pipeline</Badge>
          </div>

          {loading ? (
            <p className="text-sm text-gray-500 py-6 text-center">Loading live projects...</p>
          ) : !data?.recentProjects || data.recentProjects.length === 0 ? (
            <div className="text-center py-8 text-gray-500 text-sm">
              No solar projects assigned yet.
            </div>
          ) : (
            <div className="space-y-3">
              {data.recentProjects.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{p.project_name}</h4>
                    <p className="text-xs text-gray-500">Stage: <span className="capitalize">{p.stage || 'Survey'}</span></p>
                  </div>
                  <Badge variant="blue">{p.stage || 'In Progress'}</Badge>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-end">
            <Link href="/dashboard/partner/projects" className="text-xs font-semibold text-amber-600 hover:underline">
              View All Projects →
            </Link>
          </div>
        </Card>

        {/* Right Side: Quick Action & Partner Status */}
        <div className="space-y-6">
          <Card>
            <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2">Partner KYC & Status</h3>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex justify-between">
                <span>KYC Verification:</span>
                <span className="font-semibold capitalize text-emerald-600">
                  {data?.profile?.kyc_status || 'Verified'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Bank Account:</span>
                <span className="font-semibold">
                  {data?.profile?.account_number ? `****${data.profile.account_number.slice(-4)}` : 'Linked'}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/dashboard/partner/leads">
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 rounded-lg text-sm">
                  + Submit Customer Lead
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </DashboardShell>
  );
}
