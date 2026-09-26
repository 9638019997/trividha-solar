import { supabase } from '@/lib/supabase';

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
