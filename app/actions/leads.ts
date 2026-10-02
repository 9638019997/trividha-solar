'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'
import type { Lead } from '@/lib/types/leads'

// 1. Zod Validation Schema
const LeadSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  city: z.string().optional(),
  service_type: z.string().default('rooftop_solar'),
  monthly_bill: z.coerce.number().optional(),
  status: z.enum(['new', 'contacted', 'qualified', 'converted', 'closed']).default('new'),
  notes: z.string().optional(),
})

export type LeadActionState = {
  success?: boolean
  message?: string
  errors?: Record<string, string[]>
  data?: Lead
}

// 2. CREATE: Submit new lead/inquiry
export async function createLeadAction(
  _prevState: LeadActionState,
  formData: FormData
): Promise<LeadActionState> {
  const rawData = Object.fromEntries(formData.entries())
  const validated = LeadSchema.safeParse(rawData)

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
      message: 'Validation failed. Please verify form inputs.',
    }
  }

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('leads')
    .insert([validated.data])
    .select()
    .single()

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/admin/leads')
  return { success: true, message: 'Inquiry submitted successfully!', data }
}

// 3. READ: Fetch all leads
export async function getLeads(): Promise<Lead[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching leads:', error.message)
    return []
  }

  return (data as Lead[]) || []
}

// 4. UPDATE: Modify lead status
export async function updateLeadStatus(
  id: string,
  status: Lead['status']
): Promise<{ success: boolean; message?: string }> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('leads')
    .update({ status })
    .eq('id', id)

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/admin/leads')
  return { success: true, message: 'Status updated successfully.' }
}

// 5. DELETE: Remove lead
export async function deleteLead(
  id: string
): Promise<{ success: boolean; message?: string }> {
  const supabase = await createClient()
  const { error } = await supabase
    .from('leads')
    .delete()
    .eq('id', id)

  if (error) {
    return { success: false, message: error.message }
  }

  revalidatePath('/admin/leads')
  return { success: true, message: 'Lead deleted successfully.' }
}