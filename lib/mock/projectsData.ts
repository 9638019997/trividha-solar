import { Project, Task, SiteSurvey, ProjectDocument } from '@/lib/types/project';

export const mockProjects: Project[] = [
  {
    id: 'proj-001',
    code: 'TS-2026-001',
    name: 'Shree Krishna Residency 10kW',
    clientName: 'Ramesh Patel',
    clientPhone: '+91 98250 12345',
    location: 'Surat, Gujarat',
    capacityKw: 10,
    budget: 450000,
    currentPhase: 'installation',
    progressPercent: 65,
    startDate: '2026-02-15',
    targetCompletionDate: '2026-03-30',
    leadEngineer: 'Dilip Sandanshiv',
    installationStages: [
      { stageName: 'Structure Mounting', status: 'completed', completedDate: '2026-03-01' },
      { stageName: 'Module Clamping', status: 'completed', completedDate: '2026-03-10' },
      { stageName: 'Inverter & Cabling', status: 'in_progress' },
      { stageName: 'Earthing & Lightning Arrestor', status: 'pending' },
      { stageName: 'Net Metering Inspection', status: 'pending' },
    ]
  },
  {
    id: 'proj-002',
    code: 'TS-2026-002',
    name: 'Navkar Textile Mill 50kW',
    clientName: 'Sanjay Jain',
    clientPhone: '+91 97240 56789',
    location: 'Vyara, Tapi',
    capacityKw: 50,
    budget: 2100000,
    currentPhase: 'survey',
    progressPercent: 20,
    startDate: '2026-03-01',
    targetCompletionDate: '2026-05-15',
    leadEngineer: 'Aakash Verma',
    installationStages: [
      { stageName: 'Structure Mounting', status: 'pending' },
      { stageName: 'Module Clamping', status: 'pending' },
      { stageName: 'Inverter & Cabling', status: 'pending' },
      { stageName: 'Earthing & Lightning Arrestor', status: 'pending' },
      { stageName: 'Net Metering Inspection', status: 'pending' },
    ]
  },
  {
    id: 'proj-003',
    code: 'TS-2026-003',
    name: 'Bhakti Farmhouse 5kW Rooftop',
    clientName: 'Chetan Desai',
    clientPhone: '+91 99090 99887',
    location: 'Navsari, Gujarat',
    capacityKw: 5,
    budget: 240000,
    currentPhase: 'completed',
    progressPercent: 100,
    startDate: '2026-01-10',
    targetCompletionDate: '2026-02-20',
    leadEngineer: 'Dilip Sandanshiv',
    installationStages: [
      { stageName: 'Structure Mounting', status: 'completed', completedDate: '2026-01-20' },
      { stageName: 'Module Clamping', status: 'completed', completedDate: '2026-01-28' },
      { stageName: 'Inverter & Cabling', status: 'completed', completedDate: '2026-02-05' },
      { stageName: 'Earthing & Lightning Arrestor', status: 'completed', completedDate: '2026-02-10' },
      { stageName: 'Net Metering Inspection', status: 'completed', completedDate: '2026-02-18' },
    ]
  }
];

export const mockSurveys: SiteSurvey[] = [
  {
    id: 'surv-101',
    projectId: 'proj-001',
    projectName: 'Shree Krishna Residency 10kW',
    surveyor: 'Kishan Rathod',
    surveyDate: '2026-02-18',
    roofType: 'RCC Flat',
    roofAreaSqFt: 1400,
    shadowFreeAreaSqFt: 1100,
    recommendedCapacityKw: 10,
    status: 'completed',
    notes: 'South facing unblocked roof. Standard 1.5m elevated structure recommended.'
  },
  {
    id: 'surv-102',
    projectId: 'proj-002',
    projectName: 'Navkar Textile Mill 50kW',
    surveyor: 'Aakash Verma',
    surveyDate: '2026-03-05',
    roofType: 'Tin Shade',
    roofAreaSqFt: 6500,
    shadowFreeAreaSqFt: 5800,
    recommendedCapacityKw: 50,
    status: 'in_progress',
    notes: 'Purlin spacing inspection required for clamp compatibility.'
  }
];

export const mockTasks: Task[] = [
  {
    id: 'task-1',
    projectId: 'proj-001',
    projectName: 'Shree Krishna Residency',
    title: 'Deliver DC cables and 10kW On-grid inverter',
    assignedTo: 'Vikram Joshi',
    dueDate: '2026-03-25',
    status: 'in_progress',
    priority: 'high'
  },
  {
    id: 'task-2',
    projectId: 'proj-001',
    projectName: 'Shree Krishna Residency',
    title: 'Submit DISCOM Net Metering Application',
    assignedTo: 'Dilip Sandanshiv',
    dueDate: '2026-03-28',
    status: 'pending',
    priority: 'urgent'
  },
  {
    id: 'task-3',
    projectId: 'proj-002',
    projectName: 'Navkar Textile Mill',
    title: 'Complete 3D shadow analysis report',
    assignedTo: 'Aakash Verma',
    dueDate: '2026-03-26',
    status: 'pending',
    priority: 'medium'
  }
];

export const mockDocuments: ProjectDocument[] = [
  {
    id: 'doc-1',
    projectId: 'proj-001',
    projectName: 'Shree Krishna Residency',
    title: 'Final Quotation & SLA.pdf',
    category: 'Quotation',
    fileSize: '1.8 MB',
    uploadDate: '2026-02-16',
    downloadUrl: '#'
  },
  {
    id: 'doc-2',
    projectId: 'proj-001',
    projectName: 'Shree Krishna Residency',
    title: 'DISCOM Feasibility Approval.pdf',
    category: 'Sanction Letter',
    fileSize: '820 KB',
    uploadDate: '2026-02-28',
    downloadUrl: '#'
  },
  {
    id: 'doc-3',
    projectId: 'proj-002',
    projectName: 'Navkar Textile Mill',
    title: 'Roof Satellite & Drone Survey.zip',
    category: 'Site Photo',
    fileSize: '14.2 MB',
    uploadDate: '2026-03-06',
    downloadUrl: '#'
  }
];
