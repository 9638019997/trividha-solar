export type ProductCategory = 
  | 'Solar Panels'
  | 'Inverters'
  | 'Batteries'
  | 'Solar Structures'
  | 'ACDB/DCDB'
  | 'Cables'
  | 'Earthing'
  | 'Lightning Arresters'
  | 'Net Meter Accessories'
  | 'Solar Water Pumps'
  | 'EV Chargers'
  | 'BOS (Balance of System)';

export interface Manufacturer {
  id: string;
  name: string;
  logoUrl?: string;
  website?: string;
  isPartner?: boolean;
  isActive: boolean;
}

export interface SolarProduct {
  id: string;
  category: ProductCategory;
  brand: string;
  model: string;
  capacity: string;
  specs: Record<string, string>;
  features: string[];
  warranty: string;
  datasheetUrl?: string;
  brochureUrl?: string;
  imageUrl?: string;
  certifications: string[];
  isActive: boolean;
}
