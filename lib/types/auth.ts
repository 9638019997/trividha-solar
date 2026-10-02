import { z } from 'zod'

export type UserRole = 'customer' | 'partner' | 'agent' | 'admin'

export interface Profile {
  id: string
  email: string
  full_name: string | null
  phone?: string | null
  role: UserRole
  created_at: string
  updated_at: string
}

export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['customer', 'partner', 'agent', 'admin']).default('customer'),
})

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
