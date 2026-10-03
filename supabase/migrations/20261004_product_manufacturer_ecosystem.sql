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
