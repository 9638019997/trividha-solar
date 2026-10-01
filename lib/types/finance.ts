export type PaymentStatus = 'paid' | 'partial' | 'unpaid' | 'overdue';
export type QuotationStatus = 'draft' | 'sent' | 'approved' | 'rejected';
export type ExpenseCategory = 'Office' | 'Material' | 'Labour' | 'Transportation' | 'Miscellaneous';

export interface CustomerLedgerItem {
  id: string;
  customerId: string;
  customerName: string;
  contact: string;
  projectCode: string;
  totalBilled: number;
  paidAmount: number;
  outstandingBalance: number;
  status: PaymentStatus;
  lastPaymentDate: string;
}

export interface VendorLedgerItem {
  id: string;
  vendorId: string;
  vendorName: string;
  contactPerson: string;
  category: string;
  totalPurchased: number;
  paidAmount: number;
  outstandingBill: number;
  status: PaymentStatus;
  dueBy: string;
}

export interface Quotation {
  id: string;
  quoteNo: string;
  clientName: string;
  systemSizeKw: number;
  baseAmount: number;
  gstAmount: number;
  totalAmount: number;
  issueDate: string;
  validUntil: string;
  status: QuotationStatus;
}

export interface Invoice {
  id: string;
  invoiceNo: string;
  customerName: string;
  projectCode: string;
  billingDate: string;
  dueDate: string;
  subTotal: number;
  gstRate: number;
  gstAmount: number;
  grandTotal: number;
  paidAmount: number;
  status: PaymentStatus;
}

export interface PaymentTransaction {
  id: string;
  txnRef: string;
  date: string;
  partyName: string;
  type: 'Customer Collection' | 'Vendor Payment' | 'Refund' | 'Partner Payout';
  mode: 'NEFT/RTGS' | 'UPI' | 'Cheque' | 'Cash';
  amount: number;
  status: 'cleared' | 'processing' | 'refunded';
}

export interface ExpenseRecord {
  id: string;
  title: string;
  category: ExpenseCategory;
  date: string;
  amount: number;
  paidTo: string;
  approvedBy: string;
}

export interface CommissionSettlement {
  id: string;
  beneficiaryName: string;
  type: 'Channel Partner' | 'Sales Agent';
  projectRef: string;
  orderValue: number;
  commissionRatePercent: number;
  commissionEarned: number;
  payoutStatus: 'settled' | 'pending';
  payoutDate?: string;
}

export interface LoanRecord {
  id: string;
  loanId: string;
  applicantName: string;
  bankName: string;
  scheme: string;
  sanctionedAmount: number;
  tenureMonths: number;
  interestRatePercent: number;
  emiAmount: number;
  emisPaid: number;
  status: 'active' | 'approved' | 'closed';
}
