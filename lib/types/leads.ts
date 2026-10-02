export interface Lead {
  id: string
  created_at: string
  updated_at: string
  full_name: string
  email: string
  phone: string
  city?: string | null
  service_type: string
  monthly_bill?: number | null
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'closed'
  notes?: string | null
}

export type LeadInsert = Omit<Lead, 'id' | 'created_at' | 'updated_at'>
export type LeadUpdate = Partial<LeadInsert>
