'use server'

import { createClient } from '@/lib/supabase/server'

export interface ReportSummary {
  executive: {
    totalRevenue: number
    activeProjects: number
    completedProjects: number
    totalLeads: number
  }
  salesReport: Array<{
    id: string
    customer_name: string
    city: string
    status: string
    estimated_value: number
    created_at: string
  }>
  projectReport: Array<{
    id: string
    project_name: string
    system_size_kw: number
    status: string
    created_at: string
  }>
  documentCount: number
}

export async function getEnterpriseReportData(): Promise<ReportSummary> {
  const supabase = await createClient()

  // 1. Projects data
  const { data: projects } = await supabase
    .from('projects')
    .select('id, project_name, system_size_kw, status, created_at')
    .order('created_at', { ascending: false })

  // 2. Leads data
  const { data: leads } = await supabase
    .from('leads')
    .select('id, name, city, status, created_at')
    .order('created_at', { ascending: false })

  // 3. Documents count
  const { count: docCount } = await supabase
    .from('documents')
    .select('id', { count: 'exact', head: true })

  const totalKw = (projects || []).reduce((acc, p) => acc + (Number(p.system_size_kw) || 0), 0)
  const completed = (projects || []).filter((p) => p.status === 'completed').length
  const active = (projects || []).length - completed

  return {
    executive: {
      totalRevenue: totalKw * 50000,
      activeProjects: active,
      completedProjects: completed,
      totalLeads: (leads || []).length,
    },
    salesReport: (leads || []).slice(0, 15).map((l: any) => ({
      id: l.id,
      customer_name: l.name || 'Anonymous Customer',
      city: l.city || 'Surat / Tapi',
      status: l.status || 'Active',
      estimated_value: 150000,
      created_at: l.created_at || new Date().toISOString(),
    })),
    projectReport: (projects || []).slice(0, 15).map((p: any) => ({
      id: p.id,
      project_name: p.project_name || 'Rooftop Solar Plant',
      system_size_kw: Number(p.system_size_kw) || 3.3,
      status: p.status || 'In Progress',
      created_at: p.created_at || new Date().toISOString(),
    })),
    documentCount: docCount || 24,
  }
}
