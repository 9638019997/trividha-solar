export interface PartnerProfileData {
  fullName?: string;
  mobile?: string;
  email?: string;
  businessType?: string;
  firmName?: string;
  gstNumber?: string;
  panNumber?: string;
  bankAccount?: string;
  ifscCode?: string;
  [key: string]: any;
}

export interface PartnerState {
  isAuthenticated: boolean;
  partnerName: string;
  mobile: string;
  email: string;
  businessType: string;
  firmName: string;
  gstNumber: string;
  panNumber: string;
  bankAccount: string;
  ifscCode: string;
  profile?: PartnerProfileData;
}

export const defaultPartnerState: PartnerState = {
  isAuthenticated: false,
  partnerName: "",
  mobile: "",
  email: "",
  businessType: "",
  firmName: "",
  gstNumber: "",
  panNumber: "",
  bankAccount: "",
  ifscCode: "",
  profile: {},
};

export function readPartnerState(): PartnerState {
  if (typeof window === "undefined") return defaultPartnerState;
  try {
    const item = localStorage.getItem("trividha_partner_state");
    return item ? JSON.parse(item) : defaultPartnerState;
  } catch {
    return defaultPartnerState;
  }
}

export function writePartnerState(state: Partial<PartnerState>): void {
  if (typeof window === "undefined") return;
  try {
    const current = readPartnerState();
    const updated = { ...current, ...state };
    localStorage.setItem("trividha_partner_state", JSON.stringify(updated));
  } catch (e) {
    console.error("Error writing partner state", e);
  }
}

export function markPartnerAuthenticated(profile?: any): void {
  writePartnerState({ 
    isAuthenticated: true, 
    ...(profile ? { profile, ...profile } : {})
  });
}