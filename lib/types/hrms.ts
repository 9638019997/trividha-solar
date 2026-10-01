export type DepartmentType = 'Engineering & Design' | 'Field Operations & O&M' | 'Sales & Business Development' | 'Finance & Procurement' | 'Human Resources';
export type EmploymentType = 'Full-Time' | 'Contract' | 'Trainee';
export type LeaveStatus = 'Approved' | 'Pending' | 'Rejected';
export type AttendanceStatus = 'Present' | 'Late' | 'Half-Day' | 'On-Leave' | 'Site Visit';

export interface Employee {
  id: string;
  empCode: string;
  fullName: string;
  designation: string;
  department: DepartmentType;
  email: string;
  phone: string;
  joiningDate: string;
  employmentType: EmploymentType;
  baseLocation: string;
  monthlySalary: number;
  panNo: string;
  uanNo: string;
  bankAccount: string;
  status: 'Active' | 'On Notice' | 'Probation';
}

export interface AttendanceRecord {
  id: string;
  empCode: string;
  employeeName: string;
  date: string;
  inTime: string;
  outTime: string;
  status: AttendanceStatus;
  workLocation: 'Vyara Head Office' | 'Surat Branch' | 'Tapi Site Installation' | 'Navsari Rooftop Site';
}

export interface LeaveRequest {
  id: string;
  empCode: string;
  employeeName: string;
  leaveType: 'Casual Leave' | 'Sick Leave' | 'Earned Leave';
  fromDate: string;
  toDate: string;
  days: number;
  reason: string;
  status: LeaveStatus;
}

export interface PayrollRecord {
  id: string;
  empId: string;
  empCode: string;
  employeeName: string;
  designation: string;
  department: DepartmentType;
  month: string;
  basicSalary: number;
  hra: number;
  conveyanceAllowance: number;
  siteIncentive: number;
  pfDeduction: number;
  ptDeduction: number;
  grossEarnings: number;
  netPayable: number;
  status: 'Paid' | 'Processing';
  disbursedDate?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: DepartmentType;
  location: string;
  openings: number;
  experienceRequired: string;
  applicantsCount: number;
  status: 'Open' | 'Interviewing' | 'Closed';
}

export interface PerformanceReview {
  id: string;
  empCode: string;
  employeeName: string;
  reviewPeriod: string;
  kpiRating: number;
  reviewer: string;
  strengths: string;
  goals: string;
}

export interface TrainingProgram {
  id: string;
  courseTitle: string;
  category: 'Safety & Working at Heights' | 'Solar PV Installation & Wiring' | 'Inverter Commissioning' | 'JanSamarth Subsidy Portal';
  trainer: string;
  durationHours: number;
  enrolledEmployees: number;
  completionRate: number;
  status: 'Upcoming' | 'In Progress' | 'Completed';
}
