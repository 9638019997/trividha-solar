import { createClient } from '@/lib/supabase/client';

export type UserRole = 'customer' | 'partner' | 'agent' | 'admin' | 'epc' | 'transport';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  full_name?: string;
  phone?: string;
  created_at?: string;
}

// 1. Auth & Profiles Service
export const authService = {
  async getSession() {
    const supabase = createClient();
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
  },

  async getProfile(userId: string): Promise<UserProfile | null> {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error) return null;
    return data;
  },

  async signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
  }
};

// 2. Solar Leads & Projects Service
export const projectService = {
  async getProjects(role?: string, userId?: string) {
    const supabase = createClient();
    let query = supabase.from('projects').select('*');
    if (role === 'customer' && userId) {
      query = query.eq('customer_id', userId);
    } else if (role === 'partner' && userId) {
      query = query.eq('partner_id', userId);
    }
    const { data, error } = await query;
    if (error) return [];
    return data;
  },

  async createLead(payload: { name: string; phone: string; address?: string; bill?: number }) {
    const supabase = createClient();
    const { data, error } = await supabase.from('leads').insert([payload]).select().single();
    if (error) throw error;
    return data;
  }
};

// 3. Storage Integration Service (Documents, Roof Photos, Invoices)
export const storageService = {
  async uploadFile(bucket: 'project-documents' | 'roof-photos', path: string, file: File) {
    const supabase = createClient();
    const { data, error } = await supabase.storage.from(bucket).upload(path, file, {
      upsert: true
    });
    if (error) throw error;
    return data;
  },

  getPublicUrl(bucket: string, path: string) {
    const supabase = createClient();
    const { data } = supabase.storage.from(bucket).getPublicUrl(path);
    return data.publicUrl;
  }
};
