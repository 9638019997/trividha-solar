export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
}

export const SOLAR_SERVICES: ServiceItem[] = [
  {
    id: 'res-solar',
    title: 'Residential Rooftop Solar',
    category: 'Rooftop Systems',
    description: 'High-efficiency rooftop solar installations with full subsidy assistance under PM Surya Ghar Yojana.',
    features: ['Up to ₹78,000 Subsidy Support', 'Net Metering Approval', 'Tier-1 Mono PERC / TOPCon Modules'],
  },
  {
    id: 'comm-ind-solar',
    title: 'Commercial & Industrial (C&I)',
    category: 'Commercial EPC',
    description: 'Turnkey solar plants designed for factories, warehouses, hospitals, and educational campuses.',
    features: ['Accelerated Depreciation Benefits', 'OpEx / CapEx Models', 'Grid-tied High Capacity Inverters'],
  },
  {
    id: 'agri-solar',
    title: 'Agricultural Solar & Water Pumps',
    category: 'PM-KUSUM Ready',
    description: 'Solar water pumping systems and farm micro-grids empowering farmers with reliable daytime power.',
    features: ['Component-B & C Ready', 'Submersible & Surface Pumps', 'Zero Fuel Running Cost'],
  },
  {
    id: 'ev-charging',
    title: 'EV Charging Infrastructure',
    category: 'Clean Mobility',
    description: 'Solar-integrated AC/DC fast EV charging hubs for commercial complexes and residential societies.',
    features: ['Smart Load Management', 'Solar Synchronized Charging', 'Universal Gun Standards'],
  },
  {
    id: 'om-amc',
    title: 'Operations, Maintenance & AMC',
    category: 'Lifecycle Care',
    description: 'Comprehensive preventive maintenance, IV curve diagnostics, robotic cleaning, and generation audits.',
    features: ['Scheduled Panel Cleaning', 'Inverter Health Check', 'Generation Guarantee AMC'],
  },
];

export const MARKETING_FAQS = [
  {
    q: 'How much subsidy can I get under the PM Surya Ghar scheme?',
    a: 'Under the PM Surya Ghar Muft Bijli Yojana, residential installations receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for 3 kW and above directly credited to the consumer bank account.',
  },
  {
    q: 'How does Net Metering work in Gujarat with DGVCL / PGVCL?',
    a: 'A bidirectional net meter records electricity imported from the grid and surplus solar energy exported. At the end of the billing cycle, you are billed only for net imported units.',
  },
  {
    q: 'Does Trividha Solar assist with DISCOM and GEDA approvals?',
    a: 'Yes, our engineering team manages complete documentation, site feasibility, DISCOM registration, inspection approvals, and final net meter commissioning.',
  },
];
