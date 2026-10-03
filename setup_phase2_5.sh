#!/bin/bash

# 1. Supabase Migration Schema
cat << 'INNER' > supabase/migrations/20261004_product_manufacturer_ecosystem.sql
-- Create Manufacturers Table
CREATE TABLE IF NOT EXISTS manufacturers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  website TEXT,
  country_of_origin TEXT,
  tier1_certified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create Products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  manufacturer_id UUID REFERENCES manufacturers(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  model_name TEXT NOT NULL,
  capacity_rating TEXT NOT NULL,
  technical_specs JSONB DEFAULT '{}'::jsonb,
  features TEXT[] DEFAULT ARRAY[]::TEXT[],
  warranty_years INT NOT NULL DEFAULT 5,
  datasheet_url TEXT,
  brochure_url TEXT,
  product_images TEXT[] DEFAULT ARRAY[]::TEXT[],
  certifications TEXT[] DEFAULT ARRAY[]::TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
INNER

# 2. Catalogue Types
mkdir -p types lib/catalogue app/catalogue app/dashboard/catalogue
cat << 'INNER' > types/catalogue.ts
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
INNER

# 3. Catalogue Data Store & Provider
cat << 'INNER' > lib/catalogue/data.ts
import { Manufacturer, SolarProduct } from '@/types/catalogue';

export const INITIAL_MANUFACTURERS: Manufacturer[] = [
  { id: 'adani', name: 'Adani Solar', isActive: true },
  { id: 'tatapower', name: 'Tata Power Solar', isActive: true },
  { id: 'waaree', name: 'Waaree Energies', isActive: true },
  { id: 'vikram', name: 'Vikram Solar', isActive: true },
  { id: 'goldi', name: 'Goldi Solar', isActive: true },
  { id: 'growatt', name: 'Growatt', isActive: true },
  { id: 'sungrow', name: 'Sungrow', isActive: true },
  { id: 'deye', name: 'Deye', isActive: true },
  { id: 'polycab', name: 'Polycab', isActive: true },
  { id: 'havells', name: 'Havells', isActive: true },
  { id: 'schneider', name: 'Schneider Electric', isActive: true },
  { id: 'exide', name: 'Exide Industries', isActive: true },
];

export const INITIAL_PRODUCTS: SolarProduct[] = [
  {
    id: 'prod-1',
    category: 'Solar Panels',
    brand: 'Adani Solar',
    model: 'Elan Shine Bifacial Mono PERC',
    capacity: '545W - 550W',
    specs: { 'Cell Type': 'Bifacial Mono PERC', 'Efficiency': '21.3%', 'Module Dimension': '2279 x 1134 mm' },
    features: ['Up to 25% bifacial gain', 'PID Resistant', 'IP68 Junction Box'],
    warranty: '12 Years Product, 30 Years Linear Performance',
    certifications: ['ALMM Approved', 'BIS Certified', 'IEC 61215'],
    isActive: true,
  },
  {
    id: 'prod-2',
    category: 'Inverters',
    brand: 'Growatt',
    model: 'MID 15-25KTL3-X',
    capacity: '20 kW Three Phase',
    specs: { 'Max Efficiency': '98.7%', 'MPPT Trackers': '2', 'AC Nominal Output': '400V 3-Phase' },
    features: ['Touch key and OLED display', 'Type II SPD on DC & AC', 'Export limitation support'],
    warranty: '5 Years Standard (Extendable to 10 Years)',
    certifications: ['IEC 62109', 'VDE-AR-N 4105'],
    isActive: true,
  },
  {
    id: 'prod-3',
    category: 'Batteries',
    brand: 'Exide Industries',
    model: 'Solar Tubemaster C10',
    capacity: '150Ah / 12V',
    specs: { 'Technology': 'Tall Tubular Lead-Acid', 'Cycle Life': '1500 cycles @ 80% DOD' },
    features: ['Low antimony alloy', 'Spill proof vent plugs', 'High temperature tolerance'],
    warranty: '5 Years Pro-rata Warranty',
    certifications: ['IS 13369'],
    isActive: true,
  },
  {
    id: 'prod-4',
    category: 'Cables',
    brand: 'Polycab',
    model: 'Solar DC XLPO 4 sq.mm',
    capacity: '1500V DC Rated',
    specs: { 'Conductor': 'Tinned Copper Class 5', 'Insulation': 'Cross-linked Polyolefin (XLPO)' },
    features: ['UV & Ozone Resistant', 'Flame Retardant', 'Halogen Free'],
    warranty: '25 Years Rated Life',
    certifications: ['EN 50618 (TUV)', 'IS 694'],
    isActive: true,
  },
];
INNER

# 4. User-Facing Product Catalogue Page with Legal Disclaimer
cat << 'INNER' > app/catalogue/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { INITIAL_PRODUCTS, INITIAL_MANUFACTURERS } from '@/lib/catalogue/data';

export default function ProductCataloguePage() {
  const categories = [
    'Solar Panels', 'Inverters', 'Batteries', 'Solar Structures',
    'ACDB/DCDB', 'Cables', 'Earthing', 'Lightning Arresters',
    'Net Meter Accessories', 'Solar Water Pumps', 'EV Chargers', 'BOS (Balance of System)'
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="max-w-7xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/trividha_logo.png"
            alt="Trividha Solar"
            width={48}
            height={48}
            className="rounded object-contain"
          />
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">TRIVIDHA SOLAR</h1>
            <p className="text-xs text-amber-500 font-medium">Enterprise Product Catalogue & Components</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="px-3 py-1.5 text-xs font-medium rounded border border-slate-700 hover:bg-slate-800 text-slate-300 transition"
          >
            Website
          </Link>
          <Link
            href="/dashboard/catalogue"
            className="px-3.5 py-1.5 text-xs font-semibold rounded bg-amber-500 hover:bg-amber-400 text-slate-950 transition"
          >
            Admin Manager
          </Link>
        </div>
      </header>

      {/* Catalogue Content */}
      <section className="max-w-7xl mx-auto mt-8">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-white">Clean Energy Equipment & Components</h2>
          <p className="text-sm text-slate-400 mt-1">
            Engineered systems, ALMM approved modules, BIS certified inverters, and BOS accessories.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-thin">
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-900 border border-slate-800 text-slate-300 whitespace-nowrap hover:border-amber-500/40 cursor-pointer transition"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {INITIAL_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex flex-col justify-between hover:border-amber-500/40 transition"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[11px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    {prod.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{prod.brand}</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">{prod.model}</h3>
                <p className="text-xs text-amber-500 font-semibold mb-4">Capacity: {prod.capacity}</p>

                <div className="space-y-1.5 py-3 border-t border-slate-800 text-xs text-slate-300">
                  {Object.entries(prod.specs).map(([key, val]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-500">{key}:</span>
                      <span className="font-medium text-slate-200">{val}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 font-medium">Warranty: {prod.warranty}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {prod.certifications.map((cert, cIdx) => (
                      <span key={cIdx} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-amber-500 font-medium cursor-pointer hover:underline">
                  View Technical Datasheet →
                </span>
                <span className="text-slate-500 text-[10px]">Tier-1 Specs</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Legal Disclaimer */}
      <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
        <p>
          All trademarks, logos, brand names and product names are the property of their respective owners and are used only for identification and informational purposes.
        </p>
      </footer>
    </main>
  );
}
INNER

# 5. Admin Catalogue & Manufacturer Management Page
cat << 'INNER' > app/dashboard/catalogue/page.tsx
import React from 'react';
import Link from 'next/link';
import { INITIAL_MANUFACTURERS, INITIAL_PRODUCTS } from '@/lib/catalogue/data';

export default function AdminCatalogueManager() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <header className="max-w-6xl mx-auto flex items-center justify-between pb-8 border-b border-slate-800">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">Catalogue & Manufacturer Management</h1>
          <p className="text-xs text-amber-500 font-medium">Configure brands, specifications, datasheets and inventory links</p>
        </div>
        <Link
          href="/dashboard"
          className="px-3.5 py-1.5 text-xs font-semibold rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
        >
          Back to Dashboard
        </Link>
      </header>

      <section className="max-w-6xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Brand Management Column */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Configured Brands</h2>
            <button className="px-2.5 py-1 text-[11px] bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400">
              + Add Brand
            </button>
          </div>
          <div className="space-y-2">
            {INITIAL_MANUFACTURERS.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-2.5 rounded bg-slate-800/50 border border-slate-800 text-xs">
                <span className="font-medium text-slate-200">{m.name}</span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Management Column */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">Product Models & Equipment</h2>
            <button className="px-2.5 py-1 text-[11px] bg-amber-500 text-slate-950 font-bold rounded hover:bg-amber-400">
              + Add Product
            </button>
          </div>
          <div className="space-y-3">
            {INITIAL_PRODUCTS.map((p) => (
              <div key={p.id} className="p-3 rounded bg-slate-800/50 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{p.model}</span>
                    <span className="text-[10px] text-amber-400 bg-amber-500/10 px-1.5 py-0.2 rounded border border-amber-500/20">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">{p.brand} • {p.capacity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-[11px] text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded">
                    Edit Specs
                  </button>
                  <button className="text-[11px] text-amber-500 hover:text-amber-400 px-2 py-1 bg-amber-500/10 rounded border border-amber-500/20">
                    Datasheet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
INNER

echo "Phase 2.5 files created successfully."
