import os, json

# 1. Update tsconfig.json
tsconfig_data = {
  "compilerOptions": {
    "target": "es2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": True,
    "skipLibCheck": True,
    "strict": True,
    "noEmit": True,
    "esModuleInterop": True,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": True,
    "isolatedModules": True,
    "jsx": "preserve",
    "incremental": True,
    "plugins": [ { "name": "next" } ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

with open("tsconfig.json", "w") as f:
    json.dump(tsconfig_data, f, indent=2)
print("Updated tsconfig.json")

# 2. Update/create lib/supabase.ts
supabase_code = """import { createBrowserClient } from '@supabase/ssr';

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'
  );
};

export const supabase = createClient();
"""

os.makedirs("lib", exist_ok=True)
with open("lib/supabase.ts", "w") as f:
    f.write(supabase_code)
print("Updated lib/supabase.ts")

# 3. Create lib/validators.ts
validators_code = """/**
 * Validation rules for forms, user entries, and document inputs
 */

export const isValidEmail = (email: string): boolean => {
  if (!email) return false;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const isValidPhone = (phone: string): boolean => {
  if (!phone) return false;
  const cleaned = phone.replace(/[\s\-()]/g, '');
  const regex = /^(?:\+91)?[6-9]\d{9}$/;
  return regex.test(cleaned);
};

export const isValidPAN = (pan: string): boolean => {
  if (!pan) return false;
  const regex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return regex.test(pan.trim().toUpperCase());
};

export const isValidGST = (gst: string): boolean => {
  if (!gst) return false;
  const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
  return regex.test(gst.trim().toUpperCase());
};

export const isValidIFSC = (ifsc: string): boolean => {
  if (!ifsc) return false;
  const regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  return regex.test(ifsc.trim().toUpperCase());
};

export const isValidAadhaar = (aadhaar: string): boolean => {
  if (!aadhaar) return false;
  const cleaned = aadhaar.replace(/[\s\-]/g, '');
  const regex = /^\d{12}$/;
  return regex.test(cleaned);
};

export interface FileValidationOptions {
  maxSizeMB?: number;
  allowedTypes?: string[];
  allowedExtensions?: string[];
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
}

export const validateFile = (
  file: File | { name: string; size: number; type: string },
  options: FileValidationOptions = {}
): ValidationResult => {
  if (!file) {
    return { valid: false, error: 'File is required' };
  }

  const maxSize = (options.maxSizeMB || 10) * 1024 * 1024;
  if (file.size > maxSize) {
    return {
      valid: false,
      error: `File size exceeds maximum limit of ${options.maxSizeMB || 10}MB`,
    };
  }

  if (options.allowedTypes && options.allowedTypes.length > 0) {
    const isTypeAllowed = options.allowedTypes.some(
      (type) => file.type === type || file.type.startsWith(type.replace('*', ''))
    );
    if (!isTypeAllowed) {
      return {
        valid: false,
        error: `File type '${file.type}' is not allowed. Allowed types: ${options.allowedTypes.join(', ')}`,
      };
    }
  }

  if (options.allowedExtensions && options.allowedExtensions.length > 0) {
    const ext = file.name.split('.').pop()?.toLowerCase();
    if (!ext || !options.allowedExtensions.map((e) => e.toLowerCase()).includes(ext)) {
      return {
        valid: false,
        error: `File extension '.${ext}' is not allowed. Allowed extensions: ${options.allowedExtensions.join(', ')}`,
      };
    }
  }

  return { valid: true };
};

export const validators = {
  email: isValidEmail,
  phone: isValidPhone,
  pan: isValidPAN,
  gst: isValidGST,
  ifsc: isValidIFSC,
  aadhaar: isValidAadhaar,
  file: validateFile,
};

export default validators;
"""

with open("lib/validators.ts", "w") as f:
    f.write(validators_code)
print("Updated lib/validators.ts")

# 4. Update lib/partner-service.ts and lib/partner-store.ts
partner_service_code = """import { supabase } from '@/lib/supabase';

export interface Lead {
  id?: string;
  partner_id?: string;
  name: string;
  email: string;
  phone: string;
  status?: string;
  location?: string;
  system_size_kw?: number;
  created_at?: string;
}

export interface Customer {
  id?: string;
  partner_id?: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  pan?: string;
  aadhaar?: string;
  created_at?: string;
}

export interface Project {
  id?: string;
  partner_id?: string;
  customer_id?: string;
  title: string;
  status?: string;
  capacity_kw?: number;
  cost?: number;
  created_at?: string;
}

export interface Quotation {
  id?: string;
  partner_id?: string;
  customer_name?: string;
  amount: number;
  status?: string;
  details?: Record<string, any>;
  created_at?: string;
}

export interface Commission {
  id?: string;
  partner_id?: string;
  amount: number;
  status?: string;
  payout_date?: string;
  created_at?: string;
}

export interface Notification {
  id?: string;
  user_id?: string;
  title: string;
  message: string;
  read?: boolean;
  created_at?: string;
}

export interface DocumentUpload {
  file: File;
  bucket?: string;
  path?: string;
}

export const PartnerService = {
  // LEADS CRUD
  async getLeads(partnerId?: string) {
    let query = supabase.from('leads').select('*');
    if (partnerId) query = query.eq('partner_id', partnerId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async createLead(lead: Lead) {
    const { data, error } = await supabase.from('leads').insert([lead]).select();
    if (error) throw error;
    return data?.[0];
  },
  async updateLead(id: string, updates: Partial<Lead>) {
    const { data, error } = await supabase.from('leads').update(updates).eq('id', id).select();
    if (error) throw error;
    return data?.[0];
  },
  async deleteLead(id: string) {
    const { error } = await supabase.from('leads').delete().eq('id', id);
    if (error) throw error;
    return true;
  },

  // CUSTOMERS CRUD
  async getCustomers(partnerId?: string) {
    let query = supabase.from('customers').select('*');
    if (partnerId) query = query.eq('partner_id', partnerId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async createCustomer(customer: Customer) {
    const { data, error } = await supabase.from('customers').insert([customer]).select();
    if (error) throw error;
    return data?.[0];
  },
  async updateCustomer(id: string, updates: Partial<Customer>) {
    const { data, error } = await supabase.from('customers').update(updates).eq('id', id).select();
    if (error) throw error;
    return data?.[0];
  },
  async deleteCustomer(id: string) {
    const { error } = await supabase.from('customers').delete().eq('id', id);
    if (error) throw error;
    return true;
  },

  // PROJECTS CRUD
  async getProjects(partnerId?: string) {
    let query = supabase.from('projects').select('*');
    if (partnerId) query = query.eq('partner_id', partnerId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async createProject(project: Project) {
    const { data, error } = await supabase.from('projects').insert([project]).select();
    if (error) throw error;
    return data?.[0];
  },
  async updateProject(id: string, updates: Partial<Project>) {
    const { data, error } = await supabase.from('projects').update(updates).eq('id', id).select();
    if (error) throw error;
    return data?.[0];
  },
  async deleteProject(id: string) {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) throw error;
    return true;
  },

  // QUOTATIONS CRUD
  async getQuotations(partnerId?: string) {
    let query = supabase.from('quotations').select('*');
    if (partnerId) query = query.eq('partner_id', partnerId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async createQuotation(quotation: Quotation) {
    const { data, error } = await supabase.from('quotations').insert([quotation]).select();
    if (error) throw error;
    return data?.[0];
  },
  async updateQuotation(id: string, updates: Partial<Quotation>) {
    const { data, error } = await supabase.from('quotations').update(updates).eq('id', id).select();
    if (error) throw error;
    return data?.[0];
  },
  async deleteQuotation(id: string) {
    const { error } = await supabase.from('quotations').delete().eq('id', id);
    if (error) throw error;
    return true;
  },

  // COMMISSIONS CRUD
  async getCommissions(partnerId?: string) {
    let query = supabase.from('commissions').select('*');
    if (partnerId) query = query.eq('partner_id', partnerId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async createCommission(commission: Commission) {
    const { data, error } = await supabase.from('commissions').insert([commission]).select();
    if (error) throw error;
    return data?.[0];
  },
  async updateCommission(id: string, updates: Partial<Commission>) {
    const { data, error } = await supabase.from('commissions').update(updates).eq('id', id).select();
    if (error) throw error;
    return data?.[0];
  },

  // NOTIFICATIONS CRUD
  async getNotifications(userId?: string) {
    let query = supabase.from('notifications').select('*');
    if (userId) query = query.eq('user_id', userId);
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },
  async createNotification(notification: Notification) {
    const { data, error } = await supabase.from('notifications').insert([notification]).select();
    if (error) throw error;
    return data?.[0];
  },
  async markNotificationRead(id: string) {
    const { data, error } = await supabase.from('notifications').update({ read: true }).eq('id', id).select();
    if (error) throw error;
    return data?.[0];
  },

  // DOCUMENTS UPLOAD WITH SUPABASE STORAGE
  async uploadDocument(file: File, path: string, bucket = 'documents') {
    const filePath = `${path}/${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage.from(bucket).upload(filePath, file);
    if (error) throw error;

    const { data: urlData } = supabase.storage.from(bucket).getPublicUrl(data.path);
    return { path: data.path, publicUrl: urlData.publicUrl };
  },
  async getDocumentUrl(path: string, bucket = 'documents') {
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  },
  async deleteDocument(path: string, bucket = 'documents') {
    const { error } = await supabase.storage.from(bucket).remove([path]);
    if (error) throw error;
    return true;
  }
};

export default PartnerService;
"""

with open("lib/partner-service.ts", "w") as f:
    f.write(partner_service_code)
print("Updated lib/partner-service.ts")

# Synchronize partner-store.ts to export PartnerService or forward calls as appropriate
partner_store_code = """import PartnerService from './partner-service';
export * from './partner-service';
export { PartnerService };
export default PartnerService;
"""

with open("lib/partner-store.ts", "w") as f:
    f.write(partner_store_code)
print("Updated lib/partner-store.ts")

# 5. Create/update middleware.ts to protect /partner routes
middleware_code = """import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /partner routes (including /partner, /dashboard/partner, etc.)
  if (pathname.startsWith('/partner') || pathname.startsWith('/dashboard/partner')) {
    // Exclude public auth routes like /partner/login or /partner/register
    if (
      pathname.includes('/login') ||
      pathname.includes('/register') ||
      pathname.includes('/forgot-password')
    ) {
      return NextResponse.next();
    }

    const token =
      request.cookies.get('sb-access-token')?.value ||
      request.cookies.get('supabase-auth-token')?.value ||
      request.headers.get('authorization');

    if (!token) {
      const loginUrl = new URL('/partner/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/partner/:path*', '/dashboard/partner/:path*'],
};
"""

with open("middleware.ts", "w") as f:
    f.write(middleware_code)
print("Updated middleware.ts")

