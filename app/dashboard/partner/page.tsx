'use client';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { Card, StatCard, Badge, Button } from '@/components/ui/Primitives';
import { SolarImage } from '@/components/solar/SolarImage';

export default function PartnerDashboard() {
  const navItems = [
    { label: 'Overview', href: '/dashboard/partner' },
    { label: 'My Leads', href: '/dashboard/partner/leads' },
    { label: 'Commission', href: '/dashboard/partner/commission' },
    { label: 'Projects', href: '/dashboard/partner/projects' }
  ];

  return (
    <DashboardShell title="Partner Enterprise Portal" role="Channel Partner" navItems={navItems}>
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Total Leads" value="142" change="+12% this month" />
        <StatCard title="Approved Projects" value="38" change="₹1.4 Cr Pipeline" />
        <StatCard title="Pending Surveys" value="09" change="Active allocation" />
        <StatCard title="Earned Commission" value="₹3,45,000" change="Paid to account" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Recent Allocations */}
        <Card className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-base text-gray-900 dark:text-white">Recent Solar Projects</h3>
            <Badge variant="amber">Live Pipeline</Badge>
          </div>
          <div className="space-y-3">
            {[
              { id: 'PRJ-1021', name: 'Surat Commercial Rooftop 50kW', status: 'In Survey', stage: 'EPC' },
              { id: 'PRJ-1022', name: 'Tapi PM Surya Ghar 3kW', status: 'Approved', stage: 'Installation' },
              { id: 'PRJ-1023', name: 'Navsari Industrial Plant 100kW', status: 'Discom Sanction', stage: 'Net Metering' }
            ].map((p) => (
              <div key={p.id} className="p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl flex items-center justify-between border border-gray-100 dark:border-gray-700">
                <div>
                  <p className="text-xs font-bold text-amber-600">{p.id}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{p.name}</p>
                </div>
                <div className="text-right">
                  <Badge variant="green">{p.status}</Badge>
                  <p className="text-[11px] text-gray-400 mt-1">{p.stage}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right Side: Quick Action & Visual */}
        <Card className="space-y-4">
          <h3 className="font-bold text-base text-gray-900 dark:text-white">Solar Project Showcase</h3>
          <SolarImage type="commercial" className="h-44 w-full" />
          <Button variant="primary" className="w-full">
            + Submit New Solar Lead
          </Button>
        </Card>
      </div>
    </DashboardShell>
  );
}
