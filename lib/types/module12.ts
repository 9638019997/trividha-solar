export interface CRMLead {
  id: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  source: 'Organic' | 'Referral' | 'AI Lead Gen' | 'Website';
  status: 'New' | 'Contacted' | 'Qualified' | 'Lost';
  aiScore: number;
}

export interface CRMOpportunity {
  id: string;
  leadId: string;
  title: string;
  value: number;
  stage: 'Discovery' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';
  probability: number;
  expectedClose: string;
}

export interface SecurityAuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  ipAddress: string;
  status: 'Success' | 'Failed' | 'Warning';
}

export interface SecurityUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Sales' | 'Technician';
  lastLogin: string;
  status: 'Active' | 'Suspended';
}

export interface SystemHealth {
  service: string;
  status: 'Operational' | 'Degraded' | 'Offline';
  latencyMs: number;
  uptimePercent: number;
}
