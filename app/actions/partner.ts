'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export interface PartnerSummary {
  totalLeads: number
  approvedProjects: number
  pendingSurveys: number
  earnedCommission: number
  recentProjects: Array<{
    id: string
    project_name: string
    stage: string
  }>
  recentLeads: Array<{
    id: string
    customer_name: string
    phone: string
    city: string
    status: string
    estimated_value: number
  }>
  profile: {
    partner_name: string
    firm_name?: string
    kyc_status: string
    account_number?: string
    bank_name?: string
    ifsc_code?: string
  } | null
}

export async function getPartnerDashboardData(): Promise<PartnerSummary> {
  const supabase = await createClient()

  // 1. Fetch Partner Profile
  const { data: profile } = await supabase
    .from('partner_profiles')
    .select('partner_name, firm_name, kyc_status, account_number, bank_name, ifsc_code')
    .limit(1)
    .maybeSingle()

  // 2. Fetch Leads Count & Recent Leads
  const { data: leads, count: leadsCount } = await supabase
    .from('partner_leads')
    .select('id, customer_name, phone, city, status, estimated_value', { count: 'exact' })
    .order('created_at', { ascending: false })
    .limit(5)

  // 3. Fetch Projects Count & Recent Projects
  const { data: projects, count: projectsCount } = await supabase
    .from('partner_projects')
    .select('id, project_name, stage', { count: 'exact' })
    .order('created_at', { ascending: false })
    .limit(5)

  // 4. Fetch Commissions
  const { data: commissions } = await supabase
    .from('partner_commissions')
    .select('paid_commission')

  const totalPaid = commissions?.reduce(
    (acc, curr) => acc + (Number(curr.paid_commission) || 0),
    0
  ) || 0

  const pendingSurveysCount = (projects || []).filter(
    (p) => p.stage?.toLowerCase() === 'survey'
  ).length

  return {
    totalLeads: leadsCount || (leads ? leads.length : 0),
    approvedProjects: projectsCount || (projects ? projects.length : 0),
    pendingSurveys: pendingSurveysCount,
    earnedCommission: totalPaid,
    recentProjects: projects || [],
    recentLeads: leads || [],
    profile: profile || null,
  }
}

export async function createPartnerLead(formData: FormData) {
  const supabase = await createClient()
  const customer_name = formData.get('customer_name') as string
  const phone = formData.get('phone') as string
  const city = formData.get('city') as string
  const estimated_value = Number(formData.get('estimated_value')) || 0
  const notes = formData.get('notes') as string

  // Fetch or default to active partner profile
  const { data: partner } = await supabase
    .from('partner_profiles')
    .select('id')
    .limit(1)
    .maybeSingle()

  if (!partner) {
    return { success: false, message: 'No active partner profile found. Complete KYC first.' }
  }

  const { error } = await supabase.from('partner_leads').insert([
    {
      partner_id: partner.id,
      customer_name,
      phone,
      city,
      estimated_value,
      notes,
      status: 'new',
    },
  ])

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/dashboard/partner')
  revalidatePath('/dashboard/partner/leads')
  return { success: true, message: 'Lead added successfully.' }
}
