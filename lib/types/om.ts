export type PlantStatus = 'operational' | 'degraded' | 'maintenance' | 'offline';
export type ServiceStatus = 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
export type FaultSeverity = 'low' | 'medium' | 'high' | 'critical';
export type AMCStatus = 'active' | 'expiring_soon' | 'expired';

export interface SolarPlant {
  id: string;
  plantCode: string;
  name: string;
  capacityKw: number;
  customerName: string;
  customerPhone: string;
  location: string;
  city: string;
  installationDate: string;
  inverterBrand: string;
  panelBrand: string;
  warrantyExpiry: string;
  status: PlantStatus;
  todayGenKwh: number;
  performanceRatio: number;
}

export interface ServiceRequest {
  id: string;
  ticketNo: string;
  plantId: string;
  plantName: string;
  serviceType: 'Routine Cleaning' | 'Inverter Fault' | 'Structure Check' | 'Earthing Inspection';
  requestedDate: string;
  scheduledDate: string;
  assignedTechnician: string;
  status: ServiceStatus;
  priority: 'low' | 'medium' | 'high';
  notes: string;
}

export interface PreventiveSchedule {
  id: string;
  plantName: string;
  frequency: 'Monthly' | 'Quarterly' | 'Bi-Annual' | 'Annual';
  nextDueDate: string;
  lastDoneDate: string;
  assignedTech: string;
  checklistStatus: 'Pending' | 'Completed' | 'Overdue';
}

export interface BreakdownLog {
  id: string;
  incidentNo: string;
  plantName: string;
  category: 'Inverter Grid Trip' | 'DC Isolation Fault' | 'Cable Damage' | 'Module Cracking';
  severity: FaultSeverity;
  downtimeHours: number;
  loggedDate: string;
  resolutionDate?: string;
  resolvedBy?: string;
  status: 'Open' | 'Under Investigation' | 'Resolved';
}

export interface Technician {
  id: string;
  name: string;
  phone: string;
  baseCity: string;
  assignedRegion: string;
  activeTickets: number;
  completedVisitsThisMonth: number;
  rating: number;
  isAvailableToday: boolean;
}

export interface AMCContract {
  id: string;
  contractNo: string;
  customerName: string;
  plantCapacityKw: number;
  planName: 'Comprehensive O&M' | 'Preventive Only' | 'Standard Cleaning';
  startDate: string;
  expiryDate: string;
  annualFee: number;
  cleaningsIncluded: number;
  cleaningsCompleted: number;
  status: AMCStatus;
}
