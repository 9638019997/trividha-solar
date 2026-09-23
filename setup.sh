#!/usr/bin/env bash
set -e

echo "=== 1. Setting up Next.js Enterprise Architecture ==="
npm init -y
npm install --save \
  next@15.1.7 react@19.0.0 react-dom@19.0.0 \
  @supabase/supabase-js @supabase/ssr \
  @google/genai clsx tailwind-merge framer-motion gsap lucide-react

npm install --save-dev \
  typescript @types/react @types/react-dom @types/node \
  tailwindcss postcss autoprefixer @cloudflare/next-on-pages

echo "=== 2. Creating Directory Structure & Portals ==="
mkdir -p app/\(auth\)/login app/\(auth\)/register \
  app/dashboard/customer app/dashboard/partner app/dashboard/agent app/dashboard/admin \
  app/api/ai/advisor components lib/ai lib/supabase supabase

echo "=== 3. Creating Supabase Database Schema ==="
cat << 'SQL' > supabase/schema.sql
CREATE TYPE user_role AS ENUM ('customer', 'channel_partner', 'sales_agent', 'admin');
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT UNIQUE NOT NULL,
  role user_role DEFAULT 'customer'::user_role NOT NULL,
  state TEXT DEFAULT 'Gujarat',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  monthly_bill NUMERIC(10,2) NOT NULL,
  estimated_kw NUMERIC(5,2),
  status TEXT DEFAULT 'new',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES public.profiles(id),
  system_capacity_kw NUMERIC(6,2) NOT NULL,
  status TEXT DEFAULT 'feasibility_passed',
  total_cost NUMERIC(12,2) NOT NULL,
  subsidy NUMERIC(10,2) NOT NULL
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
SQL

echo "=== 4. Adding Gemini AI Solar Advisor ==="
cat << 'TS' > lib/ai/gemini.ts
import { GoogleGenAI } from "@google/genai";
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
export async function getSolarRecommendation(bill: number, type: string) {
  const prompt = `Act as Senior Solar Consultant for Trividha Solar Gujarat. Monthly bill: ₹${bill}, Type: ${type}. Return JSON: {recommendedKw, subsidy, savings, paybackYears, advice}.`;
  const response = await ai.models.generateContent({ model: "gemini-2.5-flash", contents: prompt });
  return response.text;
}
TS

echo "=== 5. Committing to main ==="
git add .
git commit -m "feat(enterprise): upgrade to Next.js enterprise platform with Supabase & Gemini AI"
git push origin main
echo "=== Setup Completed Successfully! ==="
