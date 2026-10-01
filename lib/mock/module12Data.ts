import { CRMLead, CRMOpportunity, SecurityAuditLog, SecurityUser, SystemHealth } from '../types/module12';

export const mockCRMLeads: CRMLead[] = [
  { id: 'ld-01', name: 'Ravi Desai', company: 'Desai Textiles', phone: '+91 9876543210', email: 'ravi@desaitex.in', source: 'Website', status: 'New', aiScore: 88 },
  { id: 'ld-02', name: 'Anjali Sharma', company: 'Sharma Cold Storage', phone: '+91 9876543211', email: 'anjali@sharmacold.in', source: 'AI Lead Gen', status: 'Qualified', aiScore: 95 },
];

export const mockCRMOpportunities: CRMOpportunity[] = [
  { id: 'opp-01', leadId: 'ld-02', title: '50kW Rooftop Navsari', value: 2100000, stage: 'Proposal', probability: 75, expectedClose: '2026-11-15' },
];

export const mockAuditLogs: SecurityAuditLog[] = [
  { id: 'aud-01', timestamp: '2026-10-01 09:15:00', user: 'admin@trividha.com', action: 'User Login', resource: 'Auth', ipAddress: '192.168.1.10', status: 'Success' },
  { id: 'aud-02', timestamp: '2026-10-01 09:20:00', user: 'sales@trividha.com', action: 'Export Data', resource: 'CRM Leads', ipAddress: '192.168.1.45', status: 'Warning' },
];

export const mockSecurityUsers: SecurityUser[] = [
  { id: 'usr-01', name: 'Rajendra Sandanshiv', email: 'admin@trividha.com', role: 'Admin', lastLogin: '2026-10-01', status: 'Active' },
  { id: 'usr-02', name: 'Aakash Verma', email: 'sales@trividha.com', role: 'Sales', lastLogin: '2026-10-01', status: 'Active' },
];

export const mockSystemHealth: SystemHealth[] = [
  { service: 'PostgreSQL Database', status: 'Operational', latencyMs: 12, uptimePercent: 99.99 },
  { service: 'Next.js Frontend Server', status: 'Operational', latencyMs: 45, uptimePercent: 100 },
  { service: 'Redis Cache', status: 'Operational', latencyMs: 5, uptimePercent: 99.95 },
  { service: 'WhatsApp Gateway', status: 'Operational', latencyMs: 120, uptimePercent: 99.80 },
];
