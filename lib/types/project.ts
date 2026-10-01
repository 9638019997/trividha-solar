export type ProjectStatus = 'lead' | 'survey' | 'procurement' | 'installation' | 'commissioning' | 'completed' | 'on_hold';
export type PriorityLevel = 'low' | 'medium' | 'high' | 'urgent';

export interface Task {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  assignedTo: string;
  dueDate: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: PriorityLevel;
}

export interface SiteSurvey {
  id: string;
  projectId: string;
  projectName: string;
  surveyor: string;
  surveyDate: string;
  roofType: 'RCC Flat' | 'Tin Shade' | 'Tiled';
  roofAreaSqFt: number;
  shadowFreeAreaSqFt: number;
  recommendedCapacityKw: number;
  status: 'scheduled' | 'in_progress' | 'completed';
  notes: string;
}

export interface InstallationStage {
  stageName: string;
  status: 'pending' | 'in_progress' | 'completed';
  completedDate?: string;
  remarks?: string;
}

export interface ProjectDocument {
  id: string;
  projectId: string;
  projectName: string;
  title: string;
  category: 'Quotation' | 'Sanction Letter' | 'Site Photo' | 'Invoice' | 'Net Metering';
  fileSize: string;
  uploadDate: string;
  downloadUrl: string;
}

export interface Project {
  id: string;
  code: string;
  name: string;
  clientName: string;
  clientPhone: string;
  location: string;
  capacityKw: number;
  budget: number;
  currentPhase: ProjectStatus;
  progressPercent: number;
  startDate: string;
  targetCompletionDate: string;
  leadEngineer: string;
  surveyDetails?: SiteSurvey;
  installationStages?: InstallationStage[];
}
