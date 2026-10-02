import { createClient } from '@/lib/supabase/server'
import { cache } from 'react'

export type UserRole = 'customer' | 'partner' | 'agent' | 'admin'

export interface AuthProfile {
  id: string
  email: string
  full_name: string | null
  role: UserRole
}

export const getSessionUser = cache(async () => {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('id, email, full_name, role')
    .eq('id', user.id)
    .single()

  return {
    user,
    profile: (profile as AuthProfile) ?? null,
  }
})
