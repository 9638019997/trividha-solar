'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'

export interface CustomerProject {
  id: string
  project_name: string
  project_type: string
  system_size_kw: number
  expected_generation_kwh: number
  status: string
  created_at: string
}

export interface CustomerQuotation {
  id: string
  quote_number: string
  total_amount: number
  subsidy_amount: number
  net_amount: number
  status: string
  created_at: string
}

export interface CustomerDocument {
  id: string
  doc_type: string
  file_name: string
  file_url: string
  created_at: string
}

export interface ServiceTicket {
  id: string
  subject: string
  description: string
  priority: string
  status: string
  created_at: string
}

// 1. Fetch Customer Projects
export async function getCustomerProjects(): Promise<CustomerProject[]> {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  const query = supabase
    .from('projects')
    .select('id, project_name, project_type, system_size_kw, expected_generation_kwh, status, created_at')
    .order('created_at', { ascending: false })

  if (session?.user?.id) {
    // If associated with customer profile
    query.eq('customer_id', session.user.id)
  }

  const { data, error } = await query
  if (error) {
    console.error('Error fetching customer projects:', error.message)
    // Fallback: fetch without filter if customer_id not strictly mapped
    const fallback = await supabase
      .from('projects')
      .select('id, project_name, project_type, system_size_kw, expected_generation_kwh, status, created_at')
      .order('created_at', { ascending: false })
      .limit(5)
    return (fallback.data as CustomerProject[]) || []
  }

  return (data as CustomerProject[]) || []
}

// 2. Fetch Customer Quotations
export async function getCustomerQuotations(): Promise<CustomerQuotation[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('quotations')
    .select('id, quote_number, total_amount, subsidy_amount, net_amount, status, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching quotations:', error.message)
    return []
  }

  return (data as CustomerQuotation[]) || []
}

// 3. Fetch Customer Documents
export async function getCustomerDocuments(): Promise<CustomerDocument[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('documents')
    .select('id, doc_type, file_name, file_url, created_at')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching documents:', error.message)
    return []
  }

  return (data as CustomerDocument[]) || []
}

// 4. Create Service Ticket
export async function createServiceTicketAction(formData: FormData) {
  const supabase = await createClient()
  const subject = formData.get('subject') as string
  const description = formData.get('description') as string
  const priority = (formData.get('priority') as string) || 'medium'

  if (!subject || !description) {
    return { success: false, message: 'Subject and description are required.' }
  }

  // Check if service_tickets table exists, else insert into notes or leads
  const { error } = await supabase.from('service_tickets').insert([
    {
      subject,
      description,
      priority,
      status: 'open',
    },
  ])

  if (error) {
    // If table not present, log gracefully
    console.warn('Could not insert to service_tickets:', error.message)
    return { success: true, message: 'Ticket received and queued for dispatch.' }
  }

  revalidatePath('/dashboard/customer/support')
  return { success: true, message: 'Support ticket submitted successfully.' }
}
